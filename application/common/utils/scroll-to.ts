/* eslint-disable immutable/no-let */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation}
 * @see {@link https://github.com/danro/easing-js/blob/master/easing.js}
 * @see {@link  https://github.com/cferdinandi/smooth-scroll/blob/master/src/js/smooth-scroll.js}
 *
 * @requires lodash
 * @requires common/utils/environment
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import { isFunction } from 'lodash';

import { isBrowser } from './environment';
import { getDateNow } from './date';

interface AnimateOptions {
    duration: number;
    easing: Function;
    callback: Function;
    render: Function;
}

interface ScrollToOptions {
    top: number;
    duration: number;
    easing: Function;
    callback: Function;
}

/**
 * Quad easing function - acceleration until halfway, then deceleration.
 *
 * @see https://gist.github.com/gre/1650294
 *
 * @param {number} t - The current animation process running from 0 to 1
 * @returns {number} The next process value
 */
export function easeInOutQuad(t): number {
    // eslint-disable-next-line no-mixed-operators
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * Helper function to get scrolling offset.
 *
 * 'document.body.scrollTop' was working in Chrome but didn't work on Firefox, so had to resort to window.pageYOffset.
 * But can't fallback to document.body.scrollTop as that doesn't work in IE with a doctype (?) so have to use
 * document.documentElement.scrollTop
 *
 * @see {@link https://github.com/yuanyan/react-image/blob/master/src/Image.js}
 *
 * @returns {number} The current scrolling y offset value
 */
export function getPageOffset(): number {
    if (!isBrowser()) {
        return 0;
    }
    const currentScrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        0;

    /**
     * Could be negative while bouncing, so we restrict the value
     * here to avoid errors
     */
    return currentScrollY < 0 ? 0 : currentScrollY;
}

/**
 * Handle scrolling animation using requestAnimationFrame if possible.
 *
 * @see https://github.com/gre/bezier-easing
 *
 * @private
 * @param {object} [options] - The scrolling options
 * @param {number} [options.top] - The window scroll top position
 * @param {number} [options.duration] - The scrolling animation time
 * @param {Function} [options.easing] - The animation easing function
 * @param {Function} [options.callback] - The animation done callback
 * @returns {void}
 */
function animate(options: AnimateOptions): void {
    const { render, duration, easing, callback } = options;
    const { requestAnimationFrame } = window;
    const { cancelAnimationFrame } = window;
    const hasRequestAnimationFrame = !!(
        requestAnimationFrame && cancelAnimationFrame
    );
    const start = getDateNow();

    let requestId;

    (function loop() {
        const progress = (getDateNow() - start) / duration;

        if (progress >= 1) {
            render(1);
            callback();
        } else {
            if (hasRequestAnimationFrame) {
                requestId = requestAnimationFrame(loop);
            } else {
                requestId = setTimeout(loop, 1000 / 60);
            }

            render(easing(progress), requestId);
        }
    })();
}

/**
 * Animate window scroll position.
 *
 * @param {object} [opts={}] - The scrolling options
 * @param {number} [opts.top=0] - The window scroll top position
 * @param {number} [opts.duration=300] - The scrolling animation time
 * @param {Function} [opts.easing=easeInOutQuad] - The animation easing function
 * @param {Function} [opts.callback=Function.prototype] - The animation done callback
 * @returns {void}
 */
export function scrollTo(opts: ScrollToOptions = {}): void {
    const options = {
        top: 0,
        duration: 300,
        easing: easeInOutQuad,
        callback: Function.prototype,
        ...opts
    };

    if (!isBrowser()) {
        options.callback.call(null, options);
        return;
    }
    const hasWindowScrollTo = isFunction(window.scrollTo);

    if (!options.duration) {
        if (hasWindowScrollTo) {
            window.scrollTo(0, options.top);
        }
        options.callback.call(null, options);
        return;
    }

    const scrollTopCurrent = getPageOffset();
    animate({
        render: function stepFunction(time) {
            const top = Math.floor(
                // eslint-disable-next-line no-mixed-operators
                scrollTopCurrent + (options.top - scrollTopCurrent) * time
            );
            if (hasWindowScrollTo) {
                window.scrollTo(0, top);
            }
        },
        duration: options.duration,
        easing: options.easing,
        callback: options.callback.bind(null, options)
    });
}

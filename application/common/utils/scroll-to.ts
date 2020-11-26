/* eslint-disable immutable/no-let */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 *
 * @see {@link http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation}
 * @see {@link https://github.com/danro/easing-js/blob/master/easing.js}
 * @see {@link https://github.com/cferdinandi/smooth-scroll/blob/master/src/js/smooth-scroll.js}
 */
import { isFunction, noop } from 'lodash';

import { isBrowser } from './environment';
import { getDateNow } from './date';
import { callFn } from './function';

interface AnimateOptions {
    callback?: () => void;
    duration?: number;
    easing?: (progress: number) => number;
    render?: (progress: number) => void;
}

interface ScrollToOptions {
    callback?: () => void;
    duration?: number;
    easing?: (progress: number) => number;
    top?: number;
}

const hasWindowScrollTo = isFunction(window?.scrollTo);

/**
 * Quad easing function - acceleration until halfway, then deceleration.
 * Only considering the progress value for the range [0, 1] => [0, 1]
 *
 * @see https://gist.github.com/gre/1650294
 *
 * @param {number} progress - The current animation process running from 0 to 1
 * @returns {number} The next process value
 */
export function easeInOutQuad(progress: number): number {
    // eslint-disable-next-line no-mixed-operators
    return progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
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
    const { callback, duration, easing, render } = options;
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
            cancelAnimationFrame(requestId);
            render(1);
            callFn(callback);
        } else {
            if (hasRequestAnimationFrame) {
                requestId = requestAnimationFrame(loop);
            } else {
                requestId = setTimeout(loop, 1000 / 60);
            }

            render(easing(progress));
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
        callback: noop,
        duration: 300,
        easing: easeInOutQuad,
        top: 0,
        ...opts
    };
    const { callback, duration, easing, top } = options;

    if (!isBrowser()) {
        callFn(callback);
        return;
    }

    if (!duration) {
        if (hasWindowScrollTo) {
            window.scrollTo(0, top);
        }
        callFn(callback);
        return;
    }

    const scrollTopCurrent = getPageOffset();
    animate({
        callback,
        duration,
        easing,
        render: function stepFunction(progress: number) {
            const target = Math.floor(
                // eslint-disable-next-line no-mixed-operators
                scrollTopCurrent + (top - scrollTopCurrent) * progress
            );
            if (hasWindowScrollTo) {
                window.scrollTo(0, target);
            }
        }
    });
}

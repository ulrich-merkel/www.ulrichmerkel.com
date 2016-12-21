/* global performance, requestAnimationFrame*/
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

/**
 * Quad easing function - acceleration until halfway, then deceleration.
 *
 * @see https://gist.github.com/gre/1650294
 *
 * @function
 * @private
 * @param {number} t The current animation process running from 0 to 1
 * @returns {number} The next process value
 */
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // eslint-disable-line no-mixed-operators
}

/**
 * Get current time helper.
 *
 * Following the lazy loading design pattern, the current function will be
 * overridden with the correct implementation the first time it will be
 * called. After that all consequent calls deliver the correct one without
 * conditions for different browser capabilities.
 *
 * @see Nicholas C. Zakas, High Performance JavaScript (Page 154)
 *
 * @function
 * @private
 * @returns {number} The current timestamp
 */
let getTime = function getTimeLazyLoaded() {

    if (typeof performance !== 'undefined' && isFunction(performance.now)) {
        getTime = function getTimeFn() {
            return performance.now();
        };
    } else {
        getTime = function getTimeFn() {
            return (new Date()).getTime();
        };
    }

    return getTime();

};

/**
 * Helper function to get scrolling offset.
 *
 * 'document.body.scrollTop' was working in Chrome but didn't work on Firefox, so had to resort to window.pageYOffset.
 * But can't fallback to document.body.scrollTop as that doesn't work in IE with a doctype (?) so have to use
 * document.documentElement.scrollTop
 *
 * @see {@link https://github.com/yuanyan/react-image/blob/master/src/Image.js}
 *
 * @function
 * @private
 * @returns {number} The current scrolling y offset value
 */
function getPageOffset() {
    if (!isBrowser()) {
        return 0;
    }
    let currentScrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;

    // could be negative while bouncing
    if (currentScrollY < 0) {
        currentScrollY = 0;
    }

    return currentScrollY;
}

/**
 * Handle scrolling animation using requestAnimationFrame if possible.
 *
 * @see https://github.com/gre/bezier-easing
 *
 * @function
 * @private
 * @param {Object} [options] The scrolling options
 * @param {number} [options.top] The window scroll top position
 * @param {number} [options.duration] The scrolling animation time
 * @param {Function} [options.easing] The animation easing function
 * @param {Function} [options.callback] The animation done callback
 * @returns {void}
 */
function animate(options) {

    const { render, duration, easing, callback } = options;
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;
    const hasRequestAnimationFrame = !!(requestAnimationFrame && cancelAnimationFrame);
    const start = getTime();

    let requestId;

    (function loop() {

        const p = (getTime() - start) / duration;

        if (p >= 1) {

            render(1);
            callback();

        } else {

            if (hasRequestAnimationFrame) {
                requestId = requestAnimationFrame(loop);
            } else {
                requestId = setTimeout(loop, 1000 / 60);
            }

            render(easing(p), requestId);

        }

    }());

}

/**
 * Animate window scroll position.
 *
 * @function
 * @param {Object} [opts={}] The scrolling options
 * @param {number} [opts.top=0] The window scroll top position
 * @param {number} [opts.duration=300] The scrolling animation time
 * @param {Function} [opts.easing=easeInOutQuad] The animation easing function
 * @param {Function} [opts.callback=Function.prototype] The animation done callback
 * @returns {void}
 */
function scrollTo(opts = {}) {

    const options = Object.assign({}, {
        top: 0,
        duration: 300,
        easing: easeInOutQuad,
        callback: Function.prototype
    }, opts);

    if (!isBrowser()) {
        options.callback.call(null, options);
        return;
    }

    if (!options.duration) {
        window.scrollTo(0, options.top);
        options.callback.call(null, options);
        return;
    }

    const scrollTopCurrent = getPageOffset();
    animate({
        render: function stepFunction(time) {
            window.scrollTo(0, Math.floor(scrollTopCurrent + ((options.top - scrollTopCurrent) * time)));
        },
        duration: options.duration,
        easing: options.easing,
        callback: options.callback.bind(null, options)
    });

}

export default scrollTo;
export {
    getPageOffset,
    easeInOutQuad
};

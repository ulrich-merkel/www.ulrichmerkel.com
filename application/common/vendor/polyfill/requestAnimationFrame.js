/**
 * RequestAnimationFrame polyfill, modified and improved based on eric möllers work.
 *
 * @file
 * @module
 *
 * @version 0.0.1
 *
 * @see {@link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating}
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */
(function (window) {

    // local vars
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        vendorsLength = vendors.length,
        x;

    // try to use browser prefixed version
    for (x = 0; x < vendorsLength && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelRequestAnimationFrame = window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    // fall back to standard timers
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);

            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }

}(window));

/**
 * Test if browser is touch device.
 *
 * @see {@link http://flexslider.woothemes.com/}
 *
 * @function
 * @private
 * @returns {Boolean} Whether this device has touch display or not
 */
function hasTouchEvents() {
    const touchstart = 'ontouchstart' in window;
    const touchPoints = navigator && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);

    return touchstart || touchPoints;
}

export default hasTouchEvents;

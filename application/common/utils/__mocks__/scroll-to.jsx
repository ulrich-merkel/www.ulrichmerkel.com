/* eslint-disable no-unused-vars */
/* @TODO Still in use? */
function easeInOutQuad() {
    return 1;
}

function getPageOffset(offset) {
    return offset;
}

function scrollTo({ top, duration, easing, callback }) {
    callback.call();
}

export default scrollTo;
export { getPageOffset, easeInOutQuad };

/**
 * @see {@link https://github.com/airbnb/enzyme/issues/426}
 */
const map = {};

window.addEventListener = jest.genMockFn().mockImpl((event, cb) => {
    map[event] = cb;
});
window.removeEventListener = jest.genMockFn().mockImpl((event) => {
    map[event] = null;
});

export default map;

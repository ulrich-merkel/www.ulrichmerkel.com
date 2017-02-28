/* eslint-disable immutable/no-mutation */
/**
 * @see {@link https://github.com/airbnb/enzyme/issues/426}
 */
const map = {};

window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
    map[event] = cb;
});
window.removeEventListener = jest.genMockFn().mockImplementation((event) => {
    map[event] = null;
});

export default map;

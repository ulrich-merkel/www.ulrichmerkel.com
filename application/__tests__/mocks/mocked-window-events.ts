/* eslint-disable immutable/no-mutation */
/**
 * @see {@link https://github.com/airbnb/enzyme/issues/426}
 */
const mockedWindowEvents = {};

window.addEventListener = jest.fn().mockImplementation((event, cb) => {
    mockedWindowEvents[event] = cb;
});
window.removeEventListener = jest.fn().mockImplementation((event) => {
    mockedWindowEvents[event] = null;
});

export {
    mockedWindowEvents
}

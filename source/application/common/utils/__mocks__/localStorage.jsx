// http://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
// http://dev.paperlesspost.com/jest-unit-testing-react-js/325
const mock = (function mockFn() {

    var store = {};

    return {
        getItem: function getItem(key) {
            return store[key];
        },
        setItem: function setItem(key, value) {
            store[key] = value.toString();
        },
        removeItem: function removeItem(key) {
            delete store[key];
        },
        clear: function clear() {
            store = {};
        }
    };
}());

export default mock;

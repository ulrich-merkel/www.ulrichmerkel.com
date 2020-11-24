/**
 * @see {@link http://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests}
 * @see {@link http://dev.paperlesspost.com/jest-unit-testing-react-js/325}
 */
export const mockedLocalStorage = (function mockFn() {
    // eslint-disable-next-line immutable/no-let
    let store = {};

    return {
        getItem: function getItem(key: string): string {
            return store[key];
        },
        setItem: function setItem(key: string, value: string): void {
            store[key] = value.toString();
        },
        removeItem: function removeItem(key: string): void {
            delete store[key];
        },
        clear: function clear(): void {
            store = {};
        }
    };
})();

/* eslint-disable func-names */
import { configureStore, rootReducer } from '../configure-store';

describe('configureStore', function () {
    it('should create a store', function () {
        const store = configureStore();
        expect(store.dispatch).toBeDefined();
        expect(store.subscribe).toBeDefined();
        expect(store.getState).toBeDefined();
    });
    it('should create a store with preloaded state', function () {
        const store = configureStore({
            csrf: { token: 'foo' }
        });
        const state = store.getState();
        expect(state.csrf.token).toBeDefined();
        expect(state.csrf.token).toEqual('foo');
    });
});

describe('rootReducer', function () {
    it('should create the correct store keys', function () {
        expect(rootReducer).toMatchSnapshot();
    });
});

import { configureStore, rootReducer } from '../configure-store';

describe('configureStore', function fnDescribe() {
    it('should create a store', function fnIt() {
        const store = configureStore();
        expect(store.dispatch).toBeDefined();
        expect(store.subscribe).toBeDefined();
        expect(store.getState).toBeDefined();
    });
    it('should create a store with preloaded state', function fnIt() {
        const store = configureStore({
            csrf: { token: 'foo' }
        });
        const state = store.getState();
        expect(state.csrf.token).toBeDefined();
        expect(state.csrf.token).toEqual('foo');
    });
});

describe('rootReducer', function fnDescribe() {
    it('should create the correct store keys', function fnIt() {
        expect(rootReducer).toMatchSnapshot();
    });
});

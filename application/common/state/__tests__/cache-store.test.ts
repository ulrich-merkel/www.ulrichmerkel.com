import { loadState, saveState, stateKey } from '../cache-store';
import { WebStorage } from '../../utils/web-storage';

describe('cache-store', function fnDescribe() {
    const webStorage = new WebStorage();

    it('should save and load a state', function fnIt() {
        const state = { foo: 'bar' };
        saveState(state);
        expect(loadState()).toEqual(state);
    });
    it('should return undefined if state is not valid', function fnIt() {
        webStorage.save(stateKey, JSON.stringify({ some: 'weirdState' }));
        expect(loadState()).toEqual(undefined);
    });
    it('should return undefined if state not a JSON string', function fnIt() {
        webStorage.save(stateKey, 'foo-bar');
        expect(loadState()).toEqual(undefined);
    });
});

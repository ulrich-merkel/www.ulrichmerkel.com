import { isBrowser, isNode } from '../environment';

describe('isBrowser', function fnDescribe() {
    it('should call isBrowser', function fnIt() {
        expect(isBrowser()).toBeDefined();
    });
});

describe('isNode', function fnDescribe() {
    it('should call isNode', function fnIt() {
        expect(isNode()).toBeDefined();
    });
});

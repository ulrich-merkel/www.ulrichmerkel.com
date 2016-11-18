/* eslint-disable func-names */
import { isBrowser, isNode, isWebWorker } from './../environment';

describe('environment', function () {
    it('should call isBrowser', function () {
        expect(isBrowser()).toBeDefined();
    });
    it('should call isNode', function () {
        expect(isNode()).toBeDefined();
    });
    it('should call isWebWorker', function () {
        expect(isWebWorker()).toBeDefined();
    });
});

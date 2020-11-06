/* eslint-disable func-names */
import { isBrowser, isNode } from '../environment';

describe('common/utils/environment', function () {
    it('should call isBrowser', function () {
        expect(isBrowser()).toBeDefined();
    });
    it('should call isNode', function () {
        expect(isNode()).toBeDefined();
    });
});

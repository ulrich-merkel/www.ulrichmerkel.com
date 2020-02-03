/* eslint-disable func-names, immutable/no-mutation, lodash/prefer-constant */
import hasCssCustomProperties from '../css-custom-properties';

describe('client/feature-detect/css-custom-properties', function () {
    beforeEach(function () {
        global.window = undefined;
    });

    it('should return false in non browser environments', function () {
        expect(hasCssCustomProperties()).toBeFalsy();
    });
    it('should check for correct browser features', function () {
        Object.defineProperty(global, 'window', {
            writable: false,
            value: {
                CSS: {
                    supports() {
                        return true;
                    }
                }
            }
        });

        expect(hasCssCustomProperties()).toBeTruthy();
    });
});

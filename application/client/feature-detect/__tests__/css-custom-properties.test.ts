import { hasCssCustomProperties } from '../css-custom-properties';

describe('hasCssCustomProperties', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        // eslint-disable-next-line immutable/no-mutation
        global.window = undefined;
    });

    it('should return false in non browser environments', function fnIt() {
        expect(hasCssCustomProperties()).toBeFalsy();
    });
    // it('should check for correct browser features', function fnIt() {
    //     Object.defineProperty(global, 'window', {
    //         writable: false,
    //         value: {
    //             // eslint-disable-next-line lodash/prefer-constant
    //             CSS: {
    //                 supports() {
    //                     return true;
    //                 }
    //             }
    //         }
    //     });

    //     expect(hasCssCustomProperties()).toBeTruthy();
    // });
});

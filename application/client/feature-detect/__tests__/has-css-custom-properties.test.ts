import { hasCssCustomProperties } from '../has-css-custom-properties';

describe('hasCssCustomProperties', function fnDescribe() {
    it('should return false in non browser environments', function fnIt() {
        expect(hasCssCustomProperties()).toBeFalsy();
    });
});

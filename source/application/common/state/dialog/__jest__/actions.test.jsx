/* eslint-disable func-names */
import { DIALOG_CHANGE_VISIBLE } from './../constants';
import { changeDialogVisible } from './../actions';

describe('actions', function () {
    describe('changeDialogVisible', function () {
        it(`should have a type of ${DIALOG_CHANGE_VISIBLE}`, function () {
            expect(changeDialogVisible().type).toEqual(DIALOG_CHANGE_VISIBLE);
        });
        it('should pass on the visible value we pass in', function () {
            const visible = true;
            expect(changeDialogVisible(visible).visible).toEqual(visible);
        });
    });
});

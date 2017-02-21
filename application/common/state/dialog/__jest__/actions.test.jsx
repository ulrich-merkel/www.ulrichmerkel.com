/* eslint-disable func-names */
import { STATE_DIALOG_VISIBLE_CHANGE } from './../constants';
import { changeDialogVisible } from './../actions';

describe('common/state/dialog/actions', function () {
    describe('changeDialogVisible', function () {
        it(`should have a type of ${STATE_DIALOG_VISIBLE_CHANGE}`, function () {
            expect(changeDialogVisible().type).toEqual(STATE_DIALOG_VISIBLE_CHANGE);
        });
        it('should pass on the visible value we pass in', function () {
            const visible = true;
            expect(changeDialogVisible(visible).visible).toEqual(visible);
        });
    });
});

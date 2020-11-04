/* eslint-disable func-names */
import { STATE_THEME_SELECTED_CHANGE } from '../constants';
import { changeThemeSelected } from '../actions';

describe('common/state/theme/actions', function () {
    describe('changeThemeSelected', function () {
        it(`should have a type of ${STATE_THEME_SELECTED_CHANGE}`, function () {
            expect(changeThemeSelected().type).toEqual(
                STATE_THEME_SELECTED_CHANGE
            );
        });
        it('should pass on the visible value we pass in', function () {
            const selected = '1234';
            expect(changeThemeSelected(selected).selected).toEqual(selected);
        });
    });
});

/* eslint-disable func-names */
import { STATE_THEME_DEFAULT_STATE } from '../constants';
import { selectStateThemeSelected } from '../selector';

describe('common/state/theme/selector', function () {
    describe('selectStateThemeSelected', function () {
        it('should return the correct state', function () {
            const state = {
                theme: {
                    selected: 'foo'
                }
            };
            expect(selectStateThemeSelected(state)).toEqual(
                state.theme.selected
            );
        });
        it("should return false if state isn't found", function () {
            const state = {
                some: {
                    thing: 'lorem'
                }
            };
            expect(selectStateThemeSelected(state)).toEqual(
                STATE_THEME_DEFAULT_STATE.selected
            );
        });
    });
});

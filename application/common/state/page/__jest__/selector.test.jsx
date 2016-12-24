/* eslint-disable func-names */
import { selectStatePage } from './../selector';

describe('common/state/intl/selector', function () {
    describe('selectStatePage', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                page: {
                    viewsAfterReload: 4
                }
            });
            expect(selectStatePage(state)).toEqual(state.page);
        });
        it('should return an empty object if state isn\'t found', function () {
            const state = Object.assign({}, {
                hello: {
                    kitty: 'lorem'
                }
            });
            expect(selectStatePage(state)).toEqual({});
        });
    });
});

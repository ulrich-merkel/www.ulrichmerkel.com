/* eslint-disable func-names */
import { selectStateIntlLocale } from './../selector';

describe('common/state/intl/selector', function () {
    describe('selectStateIntlLocale', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                intl: {
                    locale: 'en-EN'
                }
            });
            expect(selectStateIntlLocale(state)).toEqual(state.intl.locale);
        });
        it('should return empyt string if state isn\'t found', function () {
            const state = Object.assign({}, {
                foo: {
                    bar: 'lorem'
                }
            });
            expect(selectStateIntlLocale(state)).toEqual('');
        });
    });
});

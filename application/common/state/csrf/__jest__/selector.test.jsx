/* eslint-disable func-names */
import { selectStateCsrfToken } from '../selector';

describe('common/state/contact/selector', function () {
    describe('selectStateCsrfToken', function () {
        it('should return the correct state', function () {
            const state = {
                csrf: {
                    token: 'alsdkjaskh12i3uzhqwjk'
                }
            };
            expect(selectStateCsrfToken(state)).toEqual(state.csrf.token);
        });
        it("should return an empty string if state isn't found", function () {
            const state = {
                foo: {
                    bar: 'lorem'
                },
                bar: {
                    foo: 'ipsum'
                },
                csrf: {
                    foobar: 'test'
                }
            };
            expect(selectStateCsrfToken(state)).toEqual('');
        });
    });
});

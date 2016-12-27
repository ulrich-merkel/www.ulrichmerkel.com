/* eslint-disable func-names */
import { selectStateConfig } from './../selector';

describe('common/state/config/selector', function () {
    describe('selectStateConfig', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                config: {
                    test: 'foo'
                }
            });
            expect(selectStateConfig(state)).toEqual(state.config);
        });
        it('should return an empty object if state isn\'t found', function () {
            const state = Object.assign({}, {
                foo: {
                    bar: 'test'
                },
                bar: {
                    foo: 'test'
                }
            });
            expect(selectStateConfig(state)).toEqual({});
        });
    });
});

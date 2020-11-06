import { mockState } from '../../../../__tests__/utils/get-mocked-store';
import { selectStateConfig } from '../selector';

describe('selectStateConfig', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateConfig(mockState)).toMatchSnapshot();
    });
    it("should return an empty object if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'test'
            },
            bar: {
                foo: 'test'
            }
        };
        expect(selectStateConfig(state)).toMatchSnapshot();
    });
});

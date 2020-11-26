import { mockedState } from '../../../../__tests__/utils/get-mocked-store';
import { selectStateConfig } from '../selector';

describe('selectStateConfig', () => {
    it('should return the correct state', () => {
        expect(selectStateConfig(mockedState)).toMatchSnapshot();
    });
    it("should return an empty object if state isn't found", () => {
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

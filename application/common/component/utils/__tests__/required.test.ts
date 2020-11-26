import { getRequiredAttributes } from '../required';

describe('getRequiredAttributes', function fnDescribe() {
    it('should return the correct attributes', function fnIt() {
        expect(getRequiredAttributes()).toMatchSnapshot();
        expect(getRequiredAttributes(false)).toMatchSnapshot();
        expect(getRequiredAttributes(true)).toMatchSnapshot();
    });
});

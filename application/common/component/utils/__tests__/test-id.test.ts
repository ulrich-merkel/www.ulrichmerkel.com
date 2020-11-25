import { getTestIdAttributes } from '../test-id';

describe('getTestIdAttributes', function fnDescribe() {
    it('should return the correct attributes', function fnIt() {
        expect(getTestIdAttributes()).toMatchSnapshot();
        expect(getTestIdAttributes('test-element')).toMatchSnapshot();
    });
});

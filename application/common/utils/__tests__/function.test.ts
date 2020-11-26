import { callFn } from '../function';

describe('callFn', function fnDescribe() {
    it('should call functions correctly', function fnIt() {
        const testFn1 = jest.fn();
        callFn(testFn1);
        expect(testFn1).toHaveBeenCalled();
    });
    it('should be fail safe', function fnIt() {
        callFn('foo');
    });
});

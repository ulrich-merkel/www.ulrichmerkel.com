import { callFn } from '../function';

describe('isValidArray', function fnDescribe() {
    it('should call functions correctly', function fnIt() {
        const testFn1 = jest.fn();
        callFn(testFn1);
        expect(testFn1).toHaveBeenCalled();

        const testFn2 = jest.fn().mockImplementation((test) => test);
        callFn(testFn2, 'foo');
        expect(testFn2).toHaveBeenCalled();
        expect(testFn2).toHaveBeenCalledWith('foo');
    });
    it('should be fail safe', function fnIt() {
        callFn('foo');
    });
});

/* eslint-disable func-names */
import scrollTo, { easeInOutQuad } from '../scroll-to';

const defaults = {
    top: 0,
    duration: 300,
    easing: easeInOutQuad,
    callback: Function.prototype
};

describe('common/utils/scroll-to', function () {
    it('should call scrollTo with default options', function () {
        const callback = jest.fn();
        scrollTo({
            callback
        });
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledWith(Object.assign({}, defaults, {
            callback
        }));
    });
    it('should call callback', function () {
        const callback = jest.fn();
        scrollTo({
            top: 100,
            callback
        });
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledWith(Object.assign({}, defaults, {
            top: 100,
            callback
        }));
    });
});

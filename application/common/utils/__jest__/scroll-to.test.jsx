/* eslint-disable func-names */
import scrollTo, { easeInOutQuad, scrollToElement } from '../scroll-to';

const defaults = {
    top: 0,
    duration: 300,
    easing: easeInOutQuad,
    callback: Function.prototype
};

describe('common/utils/scroll-to', function () {
    describe('scrollTo', function () {
        it('should call scrollTo with default options', function () {
            const callback = jest.fn();
            scrollTo({
                callback
            });
            expect(callback).toBeCalled();
            expect(callback).toHaveBeenCalledWith({ ...defaults, callback });
        });
        it('should call callback', function () {
            const callback = jest.fn();
            scrollTo({
                top: 100,
                callback
            });
            expect(callback).toBeCalled();
            expect(callback).toHaveBeenCalledWith({
                ...defaults,
                top: 100,
                callback
            });
        });
    });
    describe('scrollToElement', function () {
        it('should call scrollToElement', function () {
            expect(scrollToElement).toBeDefined();
        });
    });
});

/* eslint-disable func-names */
/* global describe, it, expect */
import scrollTo, { easeInOutQuad } from './../scroll-to';

const defaults = {
    top: 0,
    duration: 300,
    easing: easeInOutQuad,
    callback: Function.prototype
};

describe('scroll-to', function () {

    it('should call scrollTo with default options', function () {
        const callback = jest.fn();
        scrollTo({
            callback: callback
        });
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledWith(Object.assign({}, defaults, {
            callback: callback
        }));
    });

    it('should call window.scrollTo', function () {
        const callback = jest.fn();
        scrollTo({
            top: 100,
            callback: callback
        });
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledWith(Object.assign({}, defaults, {
            top: 100,
            callback: callback
        }));
    });

});

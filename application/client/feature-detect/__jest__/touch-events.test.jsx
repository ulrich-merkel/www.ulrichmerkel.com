/* eslint-disable func-names, immutable/no-mutation, lodash/prefer-constant */
import hasTouchEvents from '../touch-events';

describe('client/feature-detect/touch-events', function () {
    beforeEach(function () {
        global.window = undefined;
    });

    it('should return false in non browser environments', function () {
        expect(hasTouchEvents()).toBeFalsy();
    });
    it('should check for correct ontouchstart browser features', function () {
        global.window = {
            ontouchstart: function () {
                return true;
            }
        };

        expect(hasTouchEvents()).toBeTruthy();
    });
    it('should return false for non navigator and non touch events', function () {
        global.window = {};

        expect(hasTouchEvents()).toBeFalsy();
    });
    it('should check for correct navigator browser features', function () {
        global.window = {
            navigator: {
                maxTouchPoints: 10
            }
        };

        expect(hasTouchEvents()).toBeTruthy();
    });
    it('should check for correct navigator ms browser features', function () {
        global.window = {
            navigator: {
                msMaxTouchPoints: 10
            }
        };

        expect(hasTouchEvents()).toBeTruthy();
    });
});

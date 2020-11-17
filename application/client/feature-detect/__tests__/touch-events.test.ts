import { hasTouchEvents } from '../touch-events';

describe('hasTouchEvents', function fnDescribe() {
    it('should return false in non browser environments', function fnIt() {
        const windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => undefined);

        expect(hasTouchEvents()).toBeFalsy();
        windowSpy.mockRestore();
    });
    it('should check for correct ontouchstart browser features', function fnIt() {
        const originalWindow = { ...global.window };
        const windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => ({
            ...originalWindow,
            ontouchstart: function () {
                return true;
            }
        }));

        expect(hasTouchEvents()).toBeTruthy();
        windowSpy.mockRestore();
    });
    it('should return false for non navigator and non touch events', function fnIt() {
        const originalWindow = { ...global.window };
        const windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => ({
            ...originalWindow,
            navigator: {}
        }));

        expect(hasTouchEvents()).toBeFalsy();
        windowSpy.mockRestore();
    });
    it('should check for correct navigator browser features', function fnIt() {
        const originalWindow = { ...global.window };
        const windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => ({
            ...originalWindow,
            navigator: {
                ...originalWindow.navigator,
                maxTouchPoints: 10
            }
        }));

        expect(hasTouchEvents()).toBeTruthy();
        windowSpy.mockRestore();
    });
    it('should check for correct navigator ms browser features', function fnIt() {
        const originalWindow = { ...global.window };
        const windowSpy = jest.spyOn(global, 'window', 'get');
        windowSpy.mockImplementation(() => ({
            ...originalWindow,
            navigator: {
                ...originalWindow.navigator,
                msMaxTouchPoints: 10
            }
        }));

        expect(hasTouchEvents()).toBeTruthy();
        windowSpy.mockRestore();
    });
});

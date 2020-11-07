/* eslint-disable lodash/prefer-constant */
import { featureDetect } from '../feature-detect';
import { hasCssCustomProperties } from '../css-custom-properties';
import { hasTouchEvents } from '../touch-events';

jest.mock('../css-custom-properties');
jest.mock('../touch-events');

const globalWindow = global.window;

describe('featureDetect', function fnDescribe() {
    afterEach(function fnAfterEach() {
        // eslint-disable-next-line immutable/no-mutation
        global.window = globalWindow;
    });

    it('should return false in non browser environments', function fnIt() {
        // eslint-disable-next-line immutable/no-mutation
        global.window = undefined;
        expect(featureDetect()).toBeFalsy();
    });
    it('should add feature detect css classNames', function fnIt() {
        featureDetect();

        const html = document.getElementsByTagName('html')[0];
        expect(html.className).toEqual('js no-customproperties no-touchevents');
    });
    it('should add className for css custom properties', function fnIt() {
        hasCssCustomProperties.mockImplementation(() => true);
        hasTouchEvents.mockImplementation(() => false);
        featureDetect();

        const html = document.getElementsByTagName('html')[0];
        expect(html.className).toEqual('js no-touchevents customproperties');
    });
    it('should add className for touch events', function fnIt() {
        hasCssCustomProperties.mockImplementation(() => false);
        hasTouchEvents.mockImplementation(() => true);
        featureDetect();

        const html = document.getElementsByTagName('html')[0];
        expect(html.className).toEqual('js no-customproperties touchevents');
    });
});

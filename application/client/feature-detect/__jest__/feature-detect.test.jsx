/* eslint-disable func-names, immutable/no-mutation, lodash/prefer-constant */
import 'jsdom-global/register';
import featureDetect from '../feature-detect';
import hasCssCustomProperties from '../css-custom-properties';
import hasTouchEvents from '../touch-events';

jest.mock('../css-custom-properties');
jest.mock('../touch-events');

describe('client/feature-detect/feature-detect', function () {
    it('should add feature detect css classNames', function () {
        featureDetect();

        const html = document.getElementsByTagName('html')[0];
        expect(html.className).toEqual('js no-customproperties no-touchevents');
    });
    it('should add className for css custom properties', function () {
        hasCssCustomProperties.mockImplementation(() => true);
        hasTouchEvents.mockImplementation(() => false);
        featureDetect();

        const html = document.getElementsByTagName('html')[0];
        expect(html.className).toEqual('js no-touchevents customproperties');
    });
    it('should add className for touch events', function () {
        hasCssCustomProperties.mockImplementation(() => false);
        hasTouchEvents.mockImplementation(() => true);
        featureDetect();

        const html = document.getElementsByTagName('html')[0];
        expect(html.className).toEqual('js no-customproperties touchevents');
    });
});

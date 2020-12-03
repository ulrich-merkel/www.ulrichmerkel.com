import MatchMediaMock from 'jest-matchmedia-mock';
import { AVAILABLE_COLOR_SCHEMES } from '../../../common/state/color-scheme/duck';
import {
    hasDarkModeEnabled,
    getSelectedPrefersColorScheme
} from '../has-dark-mode-enabled';

const { LIGHT, DARK } = AVAILABLE_COLOR_SCHEMES;

describe('getSelectedPrefersColorScheme', function fnDescribe() {
    let matchMediaMock;

    beforeEach(function fnBeforeEach() {
        matchMediaMock = new MatchMediaMock();
    });
    afterEach(function fnAfterEach() {
        matchMediaMock.clear();
    });

    it(`should return the correct browser settings for ${LIGHT} mode`, function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${LIGHT})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(getSelectedPrefersColorScheme()).toEqual(LIGHT);
    });
    it(`should return the correct browser settings for ${DARK} mode`, function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${DARK})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(getSelectedPrefersColorScheme()).toEqual(DARK);
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(getSelectedPrefersColorScheme()).toEqual(null);
    });
});

describe('hasDarkModeEnabled', function fnDescribe() {
    let matchMediaMock;

    beforeEach(function fnBeforeEach() {
        matchMediaMock = new MatchMediaMock();
    });
    afterEach(function fnAfterEach() {
        matchMediaMock.clear();
    });

    it(`should return the correct browser settings for ${LIGHT} mode`, function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${LIGHT})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(hasDarkModeEnabled()).toBeFalsy();
    });
    it(`should return the correct browser settings for ${DARK} mode`, function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${DARK})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(hasDarkModeEnabled()).toBeTruthy();
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(hasDarkModeEnabled()).toBeFalsy();
    });
});

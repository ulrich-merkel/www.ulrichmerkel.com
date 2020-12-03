import MatchMediaMock from 'jest-matchmedia-mock';
import { AVAILABLE_COLOR_SCHEMES } from '../../../common/state/color-scheme/duck';
import {
    hasDarkModeEnabled,
    selectedPrefersColorScheme
} from '../has-dark-mode-enabled';

describe('selectedPrefersColorScheme', function fnDescribe() {
    let matchMediaMock;

    beforeEach(function fnBeforeEach() {
        matchMediaMock = new MatchMediaMock();
    });
    afterEach(function fnAfterEach() {
        matchMediaMock.clear();
    });

    it('should return the correct browser settings for light mode', function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${AVAILABLE_COLOR_SCHEMES.LIGHT})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(selectedPrefersColorScheme()).toEqual(
            AVAILABLE_COLOR_SCHEMES.LIGHT
        );
    });
    it('should return the correct browser settings for dark mode', function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${AVAILABLE_COLOR_SCHEMES.DARK})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(selectedPrefersColorScheme()).toEqual(
            AVAILABLE_COLOR_SCHEMES.DARK
        );
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(selectedPrefersColorScheme()).toEqual(null);
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

    it('should return the correct browser settings for light mode', function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${AVAILABLE_COLOR_SCHEMES.LIGHT})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(hasDarkModeEnabled()).toBeFalsy();
    });
    it('should return the correct browser settings for dark mode', function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${AVAILABLE_COLOR_SCHEMES.DARK})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(selectedPrefersColorScheme()).toBeTruthy();
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(hasDarkModeEnabled()).toBeFalsy();
    });
});

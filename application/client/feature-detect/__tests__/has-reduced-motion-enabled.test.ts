import MatchMediaMock from 'jest-matchmedia-mock';
import { AVAILABLE_MOTION_PREFERENCES } from '../../../common/state/reduced-motion/constants';
import {
    hasReducedMotionEnabled,
    getSelectedPrefersReducedMotion
} from '../has-reduced-motion-enabled';

const { NO_PREFERENCE, REDUCE } = AVAILABLE_MOTION_PREFERENCES;

describe('getSelectedPrefersReducedMotion', function fnDescribe() {
    let matchMediaMock;

    beforeEach(function fnBeforeEach() {
        matchMediaMock = new MatchMediaMock();
    });
    afterEach(function fnAfterEach() {
        matchMediaMock.clear();
    });

    it(`should return the correct browser settings for ${REDUCE} mode`, function fnIt() {
        const mediaQuery = `(prefers-reduced-motion: ${REDUCE})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(getSelectedPrefersReducedMotion()).toEqual(REDUCE);
    });
    it(`should return the correct browser settings for ${NO_PREFERENCE} mode`, function fnIt() {
        const mediaQuery = `(prefers-reduced-motion: ${NO_PREFERENCE})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(getSelectedPrefersReducedMotion()).toEqual(NO_PREFERENCE);
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(getSelectedPrefersReducedMotion()).toEqual(null);
    });
});

describe('hasReducedMotionEnabled', function fnDescribe() {
    let matchMediaMock;

    beforeEach(function fnBeforeEach() {
        matchMediaMock = new MatchMediaMock();
    });
    afterEach(function fnAfterEach() {
        matchMediaMock.clear();
    });

    it(`should return the correct browser settings for ${NO_PREFERENCE} mode`, function fnIt() {
        const mediaQuery = `(prefers-reduced-motion: ${NO_PREFERENCE})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(hasReducedMotionEnabled()).toBeFalsy();
    });
    it(`should return the correct browser settings for ${REDUCE} mode`, function fnIt() {
        const mediaQuery = `(prefers-reduced-motion: ${REDUCE})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(hasReducedMotionEnabled()).toBeTruthy();
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(hasReducedMotionEnabled()).toBeFalsy();
    });
});

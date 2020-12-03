import MatchMediaMock from 'jest-matchmedia-mock';
import { AVAILABLE_COLOR_SCHEMES } from '../../../common/state/color-scheme/duck';
import { matchMedia } from '../match-media';

describe('matchMedia', function fnDescribe() {
    let matchMediaMock;

    beforeEach(function fnBeforeEach() {
        matchMediaMock = new MatchMediaMock();
    });
    afterEach(function fnAfterEach() {
        matchMediaMock.clear();
    });

    it('should return the correct result', function fnIt() {
        const mediaQuery = `(prefers-color-scheme: ${AVAILABLE_COLOR_SCHEMES.LIGHT})`;
        matchMediaMock.useMediaQuery(mediaQuery);
        expect(
            matchMedia('prefers-color-scheme', AVAILABLE_COLOR_SCHEMES.LIGHT)
        ).toBeTruthy();
    });
    it('should return the correct result for not supported css', function fnIt() {
        expect(
            matchMedia('prefers-color-scheme', AVAILABLE_COLOR_SCHEMES.LIGHT)
        ).toBeFalsy();
    });
});

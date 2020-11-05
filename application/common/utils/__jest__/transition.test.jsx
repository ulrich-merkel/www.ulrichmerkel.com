/* eslint-disable func-names */
import { getSectionTransition } from '../transition';

describe('getSectionTransition', function () {
    it('should apply no transitionAppear if viewsAfterReload is 1', function () {
        expect(
            getSectionTransition({
                viewsAfterReload: 1
            })
        ).toMatchSnapshot();
    });
    it('should apply default transition if viewsAfterReload is greater than 1', function () {
        expect(
            getSectionTransition({
                viewsAfterReload: 2
            })
        ).toMatchSnapshot();
    });
});

import { getSectionTransition } from '../transition';

describe('getSectionTransition', function fnDescribe() {
    it('should apply no transitionAppear if viewsAfterReload is 1', function fnIt() {
        expect(
            getSectionTransition({
                viewsAfterReload: 1
            })
        ).toMatchSnapshot();
    });
    it('should apply default transition if viewsAfterReload is greater than 1', function fnIt() {
        expect(
            getSectionTransition({
                viewsAfterReload: 2
            })
        ).toMatchSnapshot();
    });
});

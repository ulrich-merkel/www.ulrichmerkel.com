import { getSectionTransition } from '../transition';

describe('getSectionTransition', function fnDescribe() {
    it('should apply no transitionAppear if pageViewsAfterReload is 1', function fnIt() {
        expect(
            getSectionTransition({
                pageViewsAfterReload: 1
            })
        ).toMatchSnapshot();
    });
    it('should apply default transition if pageViewsAfterReload is greater than 1', function fnIt() {
        expect(
            getSectionTransition({
                pageViewsAfterReload: 2
            })
        ).toMatchSnapshot();
    });
    it('should correct transitions for reducedMotionSelectedReduce', function fnIt() {
        expect(
            getSectionTransition({
                reducedMotionSelectedReduce: true
            })
        ).toMatchSnapshot();
    });
});

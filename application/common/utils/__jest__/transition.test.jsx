/* eslint-disable func-names */
import { getSectionTransition } from '../transition';
import configApplication from '../../config/application';

describe('getSectionTransition', function () {
    const { transition } = configApplication;

    it('should apply no transitionAppear if viewsAfterReload is 1', function () {
        expect(
            getSectionTransition({
                viewsAfterReload: 1
            })
        ).toEqual({
            ...transition,
            transitionAppear: false
        });
    });
    it('should apply default transition if viewsAfterReload is greater than 1', function () {
        expect(
            getSectionTransition({
                viewsAfterReload: 2
            })
        ).toEqual(transition);
    });
});

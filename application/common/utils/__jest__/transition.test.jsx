/* eslint-disable func-names */
import getSectionTransition from './../transition';
import configApplication from './../../config/application';

describe('transition', function () {

    const transition = configApplication.transition;

    it('should apply no transitionAppear if viewsAfterReload is 1', function () {
        expect(getSectionTransition({
            viewsAfterReload: 1
        })).toEqual(Object.assign(
            {},
            transition,
            {
                transitionAppear: false
            }
        ));
    });

    it('should apply default transition if viewsAfterReload is greater than 1', function () {
        expect(getSectionTransition({
            viewsAfterReload: 2
        })).toEqual(transition);
    });

});

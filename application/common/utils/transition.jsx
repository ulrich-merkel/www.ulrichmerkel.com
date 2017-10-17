/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires lodash
 * @requires common/config/application

 * @changelog
 * - 0.0.1 Basic function and structure
 */
import { get } from 'lodash';
import configApplication from '../config/application';

/**
 * Get transition config based on page view count.
 *
 * @function
 * @param {Object} page - The redux page state
 * @returns {Object} The ReactCSSTransitionGroup config
 */
function getSectionTransition(page) {

    const viewsAfterReload = get(page, 'viewsAfterReload', 1);
    const transition = configApplication.transition;

    if (viewsAfterReload === 1) {
        return Object.assign(
            {},
            transition,
            {
                transitionAppear: false
            }
        );
    }

    return transition;

}

export default getSectionTransition;

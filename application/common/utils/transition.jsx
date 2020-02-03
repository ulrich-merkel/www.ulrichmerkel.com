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
 * @param {object} page - The redux page state
 * @returns {object} The ReactCSSTransitionGroup config
 */
function getSectionTransition(page) {

    const viewsAfterReload = get(page, 'viewsAfterReload', 1);
    const { transition } = configApplication;

    if (viewsAfterReload === 1) {
        return {

            ...transition,
            transitionAppear: false
        };
    }

    return transition;

}

export default getSectionTransition;

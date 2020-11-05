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
import configApplication from '../config/application';

/**
 * Get transition config based on page view count.
 *
 * @param {number} pageViewsAfterReload - The redux page views state
 * @returns {object} The ReactCSSTransitionGroup config
 */
export function getSectionTransition(pageViewsAfterReload) {
    const { transition } = configApplication;

    if (pageViewsAfterReload === 1) {
        return {
            ...transition,
            in: false
        };
    }

    return transition;
}

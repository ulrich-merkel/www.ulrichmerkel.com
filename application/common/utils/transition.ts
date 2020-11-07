/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
interface Transition {
    appear: boolean;
    className: string;
    classNames: string;
    in: boolean;
    timeout: number;
}

const transition: Transition = {
    appear: true,
    className: 'l-main__transition',
    classNames: 'animate',
    in: true,
    timeout: 200
};

/**
 * Get transition config based on page view count.
 *
 * @param {number} pageViewsAfterReload - The redux page views state
 * @returns {object} The ReactCSSTransitionGroup transition config
 */
export function getSectionTransition(pageViewsAfterReload: number): Transition {
    if (pageViewsAfterReload === 1) {
        return {
            ...transition,
            in: false
        };
    }

    return transition;
}

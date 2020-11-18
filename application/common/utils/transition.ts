/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isBoolean, isNumber } from 'lodash';

interface Transition {
    appear: boolean;
    className: string;
    classNames: string;
    in: boolean;
    timeout: number;
}

interface GetSectionTransitionParams {
    pageViewsAfterReload?: number;
    reducedMotionSelectedReduce?: boolean;
}

const transition: Transition = {
    appear: true,
    className: 'l-main__transition',
    classNames: 'animate',
    in: true,
    timeout: 750
};

/**
 * Get transition config based on page view count.
 *
 * @param {object} params - All transition parameters
 * @param {number} [params.pageViewsAfterReload] - The redux page views state
 * @param {boolean} [params.reducedMotionSelectedReduce] - The redux state for reduced motion
 * @returns {object} The ReactCSSTransitionGroup transition config
 */
export function getSectionTransition(params: GetSectionTransitionParams): Transition {
    const { pageViewsAfterReload, reducedMotionSelectedReduce } = params;
    const timeout = isBoolean(reducedMotionSelectedReduce) && reducedMotionSelectedReduce ? 0 : transition.timeout;

    if (isNumber(pageViewsAfterReload) && pageViewsAfterReload <= 1) {
        return {
            ...transition,
            in: false,
            appear: false,
            timeout
        };
    }

    return {
        ...transition,
        timeout
    }
}

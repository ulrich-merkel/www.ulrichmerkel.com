
/**
 * Es6 module for React Component.
 * Section components combine modules and elements
 * to create a page section which could be easily
 * used in page components.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { getSectionTransition } from '../../../utils/transition';
import { selectStatePageViewsAfterReload } from '../../../state/page/selector';
import { selectStateReducedMotionSelectedReduce } from '../../../state/reduced-motion/selector';
import { GridSection } from '../../grid/section';
import { GridRow } from '../../grid/row';
import { GridCol } from '../../grid/col';

type Props = {
    children: ReactNode;
    pageViewsAfterReload: number;
    reducedMotionSelectedReduce: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {number} [props.pageViewsAfterReload] - The redux page state
 * @param {boolean} [props.reducedMotionSelectedReduce] - The redux reduced motion state
 * @returns {ReactElement} React component markup
 */
export const Grid: FunctionComponent<Props> = (props) => {
    const {
        children,
        pageViewsAfterReload,
        reducedMotionSelectedReduce
    } = props;

    return (
        <CSSTransition
            {...getSectionTransition({
                pageViewsAfterReload,
                reducedMotionSelectedReduce
            })}
        >
            <GridSection>
                <GridRow>
                    <GridCol>{children}</GridCol>
                </GridRow>
            </GridSection>
        </CSSTransition>
    );
}

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object.<*>} state - The redux store state
 * @returns {object}
 */
function mapStateToProps(state) {
    return {
        pageViewsAfterReload: selectStatePageViewsAfterReload(state),
        reducedMotionSelectedReduce: selectStateReducedMotionSelectedReduce(
            state
        )
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const SectionCommonGrid = connect(mapStateToProps)(Grid);

/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Section components combine modules and elements
 * to create a page section which could be easily
 * used in page components.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { getSectionTransition } from '../../../utils/transition';
import { selectStatePageViewsAfterReload } from '../../../state/page/selector';
import { GridSection, GridRow, GridCol } from '../../grid';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs (usally an array of components), if there is only a single child it's a string
 * @param {object} [props.pageViewsAfterReload] - The redux page state
 * @returns {ReactElement} React component markup
 */
function SectionCommonGrid(props) {
    const { children, pageViewsAfterReload } = props;

    return (
        <CSSTransition {...getSectionTransition(pageViewsAfterReload)}>
            <GridSection>
                <GridRow>
                    <GridCol>{children}</GridCol>
                </GridRow>
            </GridSection>
        </CSSTransition>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
SectionCommonGrid.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    pageViewsAfterReload: PropTypes.number
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
SectionCommonGrid.defaultProps = {
    pageViewsAfterReload: 0
};

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
        pageViewsAfterReload: selectStatePageViewsAfterReload(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const SectionCommonGridContainer = connect(mapStateToProps)(SectionCommonGrid);

export default SectionCommonGridContainer;

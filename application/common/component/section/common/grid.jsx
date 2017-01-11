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
 * @version 0.0.3
 *
 * @requires react
 * @requires react-addons-css-transition-group
 * @requires react-redux
 * @requires common/utils/transition
 * @requires common/state/selectors
 * @requires common/component/grid/section
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 *
 * @changelog
 + - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import getSectionTransition from './../../../utils/transition';
import { selectStatePage } from './../../../state/selectors';
import GridSection from './../../grid/section';
import GridRow from './../../grid/row';
import GridCol from './../../grid/col';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function SectionCommonGrid(props) {

    const {
        children,
        page
    } = props;

    return (
        <ReactCSSTransitionGroup {...getSectionTransition(page)}>
            <GridSection>
                <GridRow>
                    <GridCol>
                        {children}
                    </GridCol>
                </GridRow>
            </GridSection>
        </ReactCSSTransitionGroup>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [page] - The redux page state
 * @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
 */
SectionCommonGrid.propTypes = {
    page: PropTypes.object, // eslint-disable-line react/require-default-props
    children: PropTypes.node // eslint-disable-line react/require-default-props
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {Object.<*>} state - The redux store state
 * @returns {Object}
 */
function mapStateToProps(state) {
    return {
        page: selectStatePage(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const SectionCommonGridContainer = connect(
    mapStateToProps
)(SectionCommonGrid);

export default SectionCommonGridContainer;

/* eslint-disable immutable/no-mutation */
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
import * as React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { selectStatePageViewsAfterReload } from '../../../state/page/selector';
import { getSectionTransition } from '../../../utils/transition';
import { GridSection } from '../../grid/section';
import { GridSpaced } from '../../grid/spaced';
import { GridRow } from '../../grid/row';
import { GridCol } from '../../grid/col';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {object} [props.pageViewsAfterReload] - The redux page state
 * @returns {ReactElement} React component markup
 */
function Grid(props) {
    const { children, pageViewsAfterReload } = props;

    return (
        <CSSTransition {...getSectionTransition(pageViewsAfterReload)}>
            <GridSection>
                <GridSpaced>
                    <GridRow>
                        <GridCol>{children}</GridCol>
                    </GridRow>
                </GridSpaced>
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
Grid.propTypes = {
    pageViewsAfterReload: PropTypes.number,
    children: PropTypes.node // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Grid.defaultProps = {
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
const SectionCommonGridSpaced = connect(mapStateToProps)(Grid);

export { SectionCommonGridSpaced };

/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @TODO: Move flip part to own component
 *
 * @requires react
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 *
 * @changelog
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { get } from 'lodash';

import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import {
    selectStateIntlLocale,
    selectStateSearchTerm,
    selectStateConfig
} from './../../state/selectors';
import { findMatches } from './../../utils/search';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function LayoutSearch(props) {

    const {
        content,
        intlLocale,
        searchTerm,
        config
    } = props;

    const contentSection = getContentSection(content);
    findMatches(searchTerm, intlLocale, config)
    return null
    return (
        <dialog className='l-dialog--search' role='presentation'>
            <div className='l-dialog__content'>

            </div>
            <div className='l-dialog__background' />
        </dialog>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] - The component content config
 */
LayoutSearch.propTypes = {
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see LayoutLoader.propTypes
 */
LayoutSearch.defaultProps = {
};

function mapStateToProps (state, ownProps) {
    return {
        intlLocale: selectStateIntlLocale(state) || ownProps.intlLocale,
        searchTerm: selectStateSearchTerm(state) || ownProps.searchTerm,
        config: selectStateConfig(state) || get(ownProps, 'config')
    }
};

/**
* Connects a React component to a Redux store. It does not modify the
* component class passed to it. Instead, it returns a new, connected component class.
*/
const LayoutSearchContainer = connect(
    mapStateToProps
)(addContent('LayoutSearch')(LayoutSearch));

export default LayoutSearchContainer;

/* eslint-disable react/no-danger */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/headline
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import shortid from 'shortid';

import Headline from './../element/headline';
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
 * @returns {React.Element} React component markup
 */
function ModuleSearch(props) {

    const {
        componentType,
        className,
        itemType,
        content,
        children,
        intlLocale,
        searchTerm,
        config
    } = props;

    const ComponentType = componentType;
    const componentClassName = classnames(
        'm-list--broadcast',
        className
    );

    const contentSection = getContentSection(content);
    const matches = findMatches(searchTerm, intlLocale, config)
    console.log(matches)
    if (!matches || !matches.length) {
        return null
    }

    return (
        <ComponentType className={componentClassName} itemScope itemType={itemType} role='list'>
            {matches.map((entry) => {
                return <li>{entry}</li>
            })}
            {children}
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [componentType='ul'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {string} [itemType='http://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] - The component translation config
 */
ModuleSearch.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.object
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleList.propTypes
 */
ModuleSearch.defaultProps = {
    componentType: 'ul',
    itemType: 'http://schema.org/ItemList',
    content: {}
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
export default connect(
    mapStateToProps
)(ModuleSearch);

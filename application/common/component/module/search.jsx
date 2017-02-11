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
import { get } from 'lodash';

import addContent from './../decorator/add-content';
import {
    selectStateIntlLocale,
    selectStateSearchTerm,
    selectStateConfig
} from './../../state/selectors';
import {
    changeDialogVisibleSearch
} from './../../state/actions';
import { findMatches } from './../../utils/search';
import A from './../element/a';
import Headline from './../element/headline';

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
        config,
        handleChangeDialogVisibleSearch
    } = props;

    const ComponentType = componentType;
    const componentClassName = classnames(
        'm-list--search',
        className
    );

    const matches = findMatches(searchTerm, intlLocale, config);
    if (!matches || !matches.length) {
        return (
            <Headline htmlElement='h3'>Found 0 search results</Headline>
        );
    }

    return (
        <ComponentType className={componentClassName} itemScope itemType={itemType} role='list'>
            {matches.map((entry) => {
                return (
                    <li
                        key={shortid.generate()}
                        className='m-list__list-item'
                        itemProp='itemListElement'
                    >
                        <A
                            to={entry.url}
                            title={entry.title}
                            isMenu
                            className='m-list__item c-type--h4'
                            onClick={handleChangeDialogVisibleSearch}
                            itemScope
                            itemType='http://www.schema.org/SiteNavigationElement'
                        >
                            <span className='m-menu__label'>
                                {`${get(content, `${entry.label}.head.title`, '')}`}
                            </span>
                            <small className='m-menu__description'>
                                {`${get(content, `${entry.label}.head.meta[0].content`, '')}`}
                            </small>
                        </A>
                    </li>
                );
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
 * @property {string} [intlLocale]
 * @property {string} [itemType='http://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] - The component translation config
 */
ModuleSearch.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    componentType: PropTypes.string,
    config: PropTypes.object,
    intlLocale: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.object,
    searchTerm: PropTypes.string, // eslint-disable-line react/require-default-props,
    handleChangeDialogVisibleSearch: PropTypes.func
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
    config: {},
    itemType: 'http://schema.org/ItemList',
    content: {},
    handleChangeDialogVisibleSearch: Function.prototype
};

// @TODO
function mapStateToProps(state, ownProps) {
    return {
        intlLocale: selectStateIntlLocale(state) || ownProps.intlLocale,
        searchTerm: selectStateSearchTerm(state) || ownProps.searchTerm,
        config: selectStateConfig(state) || get(ownProps, 'config')
    };
}

/**
 * If an object is passed, each function inside it will be assumed to
 * be a Redux action creator. An object with the same function names,
 * but with every action creator wrapped into a dispatch call so they
 * may be invoked directly, will be merged into the component’s props.
 * If a function is passed, it will be given dispatch.
 *
 * @function
 * @param {Function} dispatch - The redux store dispatch function
 * @returns {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        handleChangeDialogVisibleSearch: () => {
            dispatch(changeDialogVisibleSearch(false));
        }
    };
}
/**
* Connects a React component to a Redux store. It does not modify the
* component class passed to it. Instead, it returns a new, connected component class.
*/
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(addContent('')(ModuleSearch));

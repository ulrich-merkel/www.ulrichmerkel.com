/* eslint-disable react/no-danger, immutable/no-mutation */
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
 * @requires prop-types
 * @requires react-redux
 * @requires classnames
 * @requires shortid
 * @requires lodash
 * @requires common/state/selectors
 * @requires common/state/actions
 * @requires common/utils/content
 * @requires common/utils/search
 * @requires common/component/decorator/add-content
 * @requires common/component/element/headline
 * @requires common/component/element/a
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import shortid from 'shortid';
import { get } from 'lodash';
import { selectStateIntlLocale } from '../../state/intl/selector';
import { selectStateSearchTerm } from '../../state/search/selector';
import { selectStateConfig } from '../../state/config/selector';
import { changeDialogVisibleSearch } from '../../state/actions';
import { getContentSection } from '../../utils/content';
import { findMatches } from '../../utils/search';
import addContent from '../decorator/add-content';
import A from '../element/a';
import Headline from '../element/headline';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleSearch(props) {
    const {
        children,
        className,
        config,
        content,
        handleChangeDialogVisibleSearch,
        htmlElement: HtmlElement,
        intlLocale,
        itemType,
        searchTerm
    } = props;

    const componentClassName = classnames('m-list--search', className);
    const contentSection = getContentSection(content);
    const matches = findMatches(searchTerm, intlLocale, config);
    if (!matches || !matches.length) {
        return (
            <Headline htmlElement="h3">
                {contentSection('PageSearch.section1.noResults')}
            </Headline>
        );
    }

    return (
        <HtmlElement
            className={componentClassName}
            itemScope
            itemType={itemType}
            role="list"
        >
            {matches.map((entry) => {
                return (
                    <li
                        key={shortid.generate()}
                        className="m-list__list-item"
                        itemProp="itemListElement"
                    >
                        <A
                            to={entry.url}
                            title={entry.title}
                            className="c-type--h4 m-list__item"
                            onClick={handleChangeDialogVisibleSearch}
                            itemScope
                            itemType="http://www.schema.org/SiteNavigationElement"
                        >
                            <span className="m-menu__label">
                                {`${get(
                                    content,
                                    `${entry.label}.head.title`,
                                    ''
                                )}`}
                            </span>
                            <small className="m-menu__description">
                                {`${get(
                                    content,
                                    `${entry.label}.head.meta[0].content`,
                                    ''
                                )}`}
                            </small>
                        </A>
                    </li>
                );
            })}
            {children}
        </HtmlElement>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {object} [config={}] - The application content configuration
 * @property {object} [content={}] - The component translation config
 * @property {Function} [handleChangeDialogVisibleSearch=Function.prototype] - Redux action handler
 * @property {string} [htmlElement='ul'] - The component element type used for React.createElement
 * @property {string} [intlLocale] - The current selected language
 * @property {string} [itemType='http://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {string} [searchTerm] - The current search term
 */
ModuleSearch.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    config: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    ),
    handleChangeDialogVisibleSearch: PropTypes.func,
    htmlElement: PropTypes.string,
    intlLocale: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    searchTerm: PropTypes.string // eslint-disable-line react/require-default-props,
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleSearch.propTypes
 */
ModuleSearch.defaultProps = {
    config: {},
    content: {},
    handleChangeDialogVisibleSearch: Function.prototype,
    htmlElement: 'ul',
    itemType: 'http://schema.org/ItemList'
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {object.<*>} state - The redux store state
 * @param {object.<*>} [ownProps] - The current component props
 * @returns {object}
 */
function mapStateToProps(state, ownProps) {
    return {
        config: selectStateConfig(state) || get(ownProps, 'config'),
        intlLocale: selectStateIntlLocale(state) || ownProps.intlLocale,
        searchTerm: selectStateSearchTerm(state) || ownProps.searchTerm
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
 * @private
 * @param {Function} dispatch - The redux store dispatch function
 * @returns {object}
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

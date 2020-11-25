/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import shortid from 'shortid';
import { get, noop } from 'lodash';

import { selectStateIntlLocale } from '../../state/intl/selector';
import { selectStateSearchTerm } from '../../state/search/selector';
import { selectStateConfig } from '../../state/config/selector';
import { changeDialogVisibleSearch } from '../../state/dialog/duck';
import { getContentSection } from '../../utils/content';
import { findMatches } from '../../utils/search';
import { addContent } from '../decorator/add-content';
import { A } from '../element/a';
import { Headline } from '../element/headline';
import { Locale } from '../../state/intl/types';

type Props = {
    children?: ReactNode;
    className?: string;
    config?: any;
    content?: {
        list: {
            headline: string;
            lead: string;
            percent: string | number;
        }[];
    };
    handleChangeDialogVisibleSearch: () => void;
    htmlElement?: keyof JSX.IntrinsicElements;
    intlLocale?: Locale;
    itemType?: string;
    searchTerm?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleSearch: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        config,
        content,
        handleChangeDialogVisibleSearch = noop,
        htmlElement: HtmlElement = 'ul',
        intlLocale,
        itemType = 'http://schema.org/ItemList',
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
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
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
export const ModuleSearchConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(addContent('')(ModuleSearch));
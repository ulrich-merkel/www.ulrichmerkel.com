/* eslint-disable import/no-named-as-default, immutable/no-mutation */
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
 * @version 0.0.4
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires react-router
 * @requires classnames
 * @requires lodash
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/state/selectors
 * @requires common/state/intl/actions
 * @requires common/state/intl/constants
 * @requires common/component/grid/container
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/module/menu
 * @requires common/component/element/nav
 *
 * @changelog
 * - 0.0.4 added withRouter to get correct rendering after hydrate
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import { get } from 'lodash';

import addContent from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import {
    selectStateIntlLocale,
    selectStateIntlAvailableLocales,
    selectStateScrollHeaderFixed,
    selectStateScrollHeaderVisible
} from '../../state/selectors';
import {
    changeLocale,
    changeDialogVisibleSearch,
    changeDialogVisibleTheme
} from '../../state/actions';
import {
    INTL_LOCALE_EN_EN,
    INTL_LOCALE_DE_DE
} from '../../state/constants';
import ModuleMenu from '../module/menu';
import {
    GridContainer,
    GridRow,
    GridCol
} from '../grid';
import {
    A,
    Button,
    Header,
    Icon,
    Nav,
    Progress
} from '../element';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} props - The current component props
 * @param {Function} props.handleIntlChangeLocale - Function handling language state changes
 * @param {Function} props.handleChangeDialogVisibleSearch - Function handling dialog state changes
 * @param {Array.<string>} props.intlAvailableLocales - All available locale strings
 * @param {string} props.intlLocale - The current locale string
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {Object} [props.content={}] - The component content config
 * @param {boolean} [props.headerFixed] - Whether the navigation bar is sticky/ficked or not
 * @param {boolean} [props.headerVisible] - Whether the navigation bar is visible or not (used for css3 animation)
 * @returns {ReactElement} React component markup
 */
function LayoutHeader(props) {
    const {
        className,
        content,
        handleChangeDialogVisibleSearch,
        handleChangeDialogVisibleTheme,
        handleIntlChangeLocale,
        headerFixed,
        headerVisible,
        intlAvailableLocales,
        intlLocale
    } = props;
    const contentSection = getContentSection(content);

    const componentClassName = classnames(
        'l-header',
        {
            'is-fixed': headerFixed,
            'is-visible': headerVisible
        },
        className
    );
    const buttonEnClassName = classnames('m-menu__item', 'm-menu__item--en', {
        'is-active': intlLocale === INTL_LOCALE_EN_EN,
        'is-hidden': intlAvailableLocales && intlAvailableLocales.length <= 1
    });
    const buttonDeClassName = classnames('m-menu__item', 'm-menu__item--de', {
        'is-active': intlLocale === INTL_LOCALE_DE_DE,
        'is-hidden': intlAvailableLocales && intlAvailableLocales.length <= 1
    });
    const menuAsideClassName = classnames(
        'm-menu--aside',
        'm-nav__toggle-target',
        'm-nav__aside'
    );

    return (
        <Header
            className={componentClassName}
            itemScope
            itemType='http://schema.org/WPHeader'
            role='banner'
        >
            <Progress />
            <Nav className='m-nav--main'>
                <GridContainer>
                    <GridRow>
                        <GridCol>
                            <input
                                aria-label={contentSection('button.toggle.label')}
                                className='m-nav__toggle c-font-icon--menu'
                                data-label={contentSection('button.toggle.label')}
                                type='checkbox'
                            />
                            <ModuleMenu
                                className='m-nav__toggle-target'
                                content={contentSection('menu.main')}
                            />

                            {/* @TODO: should be separated into own component, extend component menu, map available locales */}
                            <ul
                                className={menuAsideClassName}
                                role='menu'
                                itemScope
                                itemType='http://schema.org/ItemList'
                            >
                                <li
                                    className='m-menu__list-item'
                                    itemProp='itemListElement'
                                    itemScope
                                    itemType='http://www.schema.org/SiteNavigationElement'
                                >
                                    <Button
                                        className={buttonEnClassName}
                                        data-locale={INTL_LOCALE_EN_EN}
                                        title={contentSection('menu.language.list[0].title')}
                                        onClick={handleIntlChangeLocale}
                                        isSmall
                                        isClear
                                    >
                                        {contentSection('menu.language.list[0].label')}
                                    </Button>
                                </li>
                                <li
                                    className='m-menu__list-item'
                                    itemProp='itemListElement'
                                    itemScope
                                    itemType='http://www.schema.org/SiteNavigationElement'
                                >
                                    <Button
                                        className={buttonDeClassName}
                                        data-locale={INTL_LOCALE_DE_DE}
                                        title={contentSection('menu.language.list[1].title')}
                                        onClick={handleIntlChangeLocale}
                                        isSmall
                                        isClear
                                    >
                                        {contentSection('menu.language.list[1].label')}
                                    </Button>
                                </li>
                                <li
                                    className='m-menu__list-item--search always-float'
                                    itemProp='itemListElement'
                                    itemScope
                                    itemType='http://www.schema.org/SiteNavigationElement'
                                >
                                    <A
                                        className='m-menu__item--search c-btn--small c-btn--clear'
                                        to='/search'
                                        onClick={handleChangeDialogVisibleSearch}
                                        title={'Search'}
                                    >
                                        <span className='c-btn__label'>
                                            <Icon className='c-btn__icon' icon='search' />
                                        </span>
                                    </A>
                                </li>
                                <li
                                    className='m-menu__list-item--theme always-float'
                                    itemProp='itemListElement'
                                    itemScope
                                    itemType='http://www.schema.org/SiteNavigationElement'
                                >
                                    <A
                                        className='m-menu__item--theme c-btn--small c-btn--clear'
                                        to='/theme'
                                        onClick={handleChangeDialogVisibleTheme}
                                        title={''}
                                    >
                                        <span className='c-btn__label'>
                                            <Icon className='c-btn__icon' icon='paint-format' />
                                        </span>
                                    </A>
                                </li>
                            </ul>
                        </GridCol>
                    </GridRow>
                </GridContainer>
            </Nav>
        </Header>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
LayoutHeader.propTypes = {
    handleIntlChangeLocale: PropTypes.func.isRequired,
    handleChangeDialogVisibleSearch: PropTypes.func.isRequired,
    handleChangeDialogVisibleTheme: PropTypes.func.isRequired,
    intlLocale: PropTypes.string.isRequired,
    intlAvailableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
    headerFixed: PropTypes.bool, // eslint-disable-line react/require-default-props
    headerVisible: PropTypes.bool, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    content: PropTypes.shape({
        menu: PropTypes.object // eslint-disable-line react/no-unused-prop-types
    })
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
LayoutHeader.defaultProps = {
    content: {}
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {Object.<*>} state - The redux store state
 * @param {Object.<*>} [ownProps] - The current component props
 * @returns {Object}
 */
function mapStateToProps(state, ownProps) {
    return {
        headerFixed: selectStateScrollHeaderFixed(state) || ownProps.headerFixed,
        headerVisible: selectStateScrollHeaderVisible(state) || ownProps.headerVisible,
        intlAvailableLocales: selectStateIntlAvailableLocales(state) || ownProps.intlAvailableLocales,
        intlLocale: selectStateIntlLocale(state) || ownProps.intlLocale
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
        handleIntlChangeLocale: (e) => {
            e.preventDefault();
            dispatch(changeLocale(get(e, 'target.dataset.locale')));
        },
        handleChangeDialogVisibleSearch: (e) => {
            e.preventDefault();
            dispatch(changeDialogVisibleSearch(true));
        },
        handleChangeDialogVisibleTheme: (e) => {
            e.preventDefault();
            dispatch(changeDialogVisibleTheme(true));
        }
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const LayoutHeaderConnected = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(addContent('LayoutHeader')(LayoutHeader)));

export default LayoutHeaderConnected;
export {
    LayoutHeader
};

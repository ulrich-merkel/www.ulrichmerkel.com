/* eslint-disable import/no-named-as-default, immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import { get } from 'lodash';

import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { eventPreventDefault } from '../../utils/event';
import {
    selectStateIntlLocale,
    selectStateIntlAvailableLocales
} from '../../state/intl/selector';
import {
    selectStateScrollIsHeaderFixed,
    selectStateScrollIsHeaderVisible
} from '../../state/scroll/selector';
import {
    changeIntlLocale,
    INTL_LOCALE_EN_EN,
    INTL_LOCALE_DE_DE
} from '../../state/intl/duck';
import {
    changeDialogVisibleSearch,
    changeDialogVisibleTheme
} from '../../state/dialog/duck';
import { ModuleMenu } from '../module/menu';
import { GridContainer, GridRow, GridCol } from '../grid';
import { A } from '../element/a';
import { Button } from '../element/button';
import { Header } from '../element/header';
import { Icon } from '../element/icon';
import { Nav } from '../element/nav';
import { Progress } from '../element/progress';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} props - The current component props
 * @param {Function} props.handleIntlChangeLocale - Function handling language state changes
 * @param {Function} props.handleChangeDialogVisibleSearch - Function handling dialog state changes
 * @param {Array.<string>} props.intlAvailableLocales - All available locale strings
 * @param {string} props.intlLocale - The current locale string
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {object} [props.content={}] - The component content config
 * @param {boolean} [props.headerFixed] - Whether the navigation bar is sticky/ficked or not
 * @param {boolean} [props.headerVisible] - Whether the navigation bar is visible or not (used for css3 animation)
 * @returns {ReactElement} React component markup
 */
export function LayoutHeader(props) {
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
            itemType="http://schema.org/WPHeader"
            role="banner"
        >
            <Progress />
            <Nav className="m-nav--main">
                <GridContainer>
                    <GridRow>
                        <GridCol>
                            <input
                                aria-label={contentSection(
                                    'button.toggle.label'
                                )}
                                className="m-nav__toggle c-font-icon--menu"
                                data-label={contentSection(
                                    'button.toggle.label'
                                )}
                                type="checkbox"
                            />
                            <ModuleMenu
                                className="m-nav__toggle-target"
                                content={contentSection('menu.main')}
                            />

                            {/* @TODO should be separated into own component, extend component menu, map available locales */}
                            <ul
                                className={menuAsideClassName}
                                role="menu"
                                itemScope
                                itemType="http://schema.org/ItemList"
                            >
                                <li
                                    className="m-menu__list-item"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="http://www.schema.org/SiteNavigationElement"
                                >
                                    <Button
                                        className={buttonEnClassName}
                                        data-locale={INTL_LOCALE_EN_EN}
                                        title={contentSection(
                                            'menu.language.list[0].title'
                                        )}
                                        onClick={handleIntlChangeLocale}
                                        isSmall
                                        isClear
                                    >
                                        {contentSection(
                                            'menu.language.list[0].label'
                                        )}
                                    </Button>
                                </li>
                                <li
                                    className="m-menu__list-item"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="http://www.schema.org/SiteNavigationElement"
                                >
                                    <Button
                                        className={buttonDeClassName}
                                        data-locale={INTL_LOCALE_DE_DE}
                                        title={contentSection(
                                            'menu.language.list[1].title'
                                        )}
                                        onClick={handleIntlChangeLocale}
                                        isSmall
                                        isClear
                                    >
                                        {contentSection(
                                            'menu.language.list[1].label'
                                        )}
                                    </Button>
                                </li>
                                <li
                                    className="m-menu__list-item--search always-float"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="http://www.schema.org/SiteNavigationElement"
                                >
                                    <A
                                        className="m-menu__item--search c-btn--small c-btn--clear"
                                        to="/search"
                                        onClick={
                                            handleChangeDialogVisibleSearch
                                        }
                                        title={'Search'}
                                    >
                                        <span className="c-btn__label">
                                            <Icon
                                                className="c-btn__icon"
                                                icon="search"
                                            />
                                        </span>
                                    </A>
                                </li>
                                <li
                                    className="m-menu__list-item--theme always-float"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="http://www.schema.org/SiteNavigationElement"
                                >
                                    <A
                                        className="m-menu__item--theme c-btn--small c-btn--clear"
                                        to="/theme"
                                        onClick={handleChangeDialogVisibleTheme}
                                        title={''}
                                    >
                                        <span className="c-btn__label">
                                            <Icon
                                                className="c-btn__icon"
                                                icon="paint-format"
                                            />
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
 * @type {object}
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
 * @type {object}
 */
LayoutHeader.defaultProps = {
    content: {}
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
        headerFixed:
            selectStateScrollIsHeaderFixed(state) || ownProps.headerFixed,
        headerVisible:
            selectStateScrollIsHeaderVisible(state) || ownProps.headerVisible,
        intlAvailableLocales:
            selectStateIntlAvailableLocales(state) ||
            ownProps.intlAvailableLocales,
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
 * @param {Function} dispatch - The redux store dispatch function
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
    return {
        handleIntlChangeLocale(event) {
            eventPreventDefault(event);
            dispatch(changeIntlLocale(get(event, 'target.dataset.locale')));
        },
        handleChangeDialogVisibleSearch(event) {
            eventPreventDefault(event);
            dispatch(changeDialogVisibleSearch(true));
        },
        handleChangeDialogVisibleTheme(event) {
            eventPreventDefault(event);
            dispatch(changeDialogVisibleTheme(true));
        }
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const LayoutHeaderConnected = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(addContent('LayoutHeader')(LayoutHeader))
);

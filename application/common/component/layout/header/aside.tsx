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
import { default as React, FunctionComponent, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import { get, noop } from 'lodash';

import { url } from '../../../config/application';
import { addContent } from '../../decorator/add-content';
import { getContentSection } from '../../../utils/content';
import { Event, eventPreventDefault } from '../../../utils/event';
import {
    selectStateIntlLocale,
    selectStateIntlAvailableLocales
} from '../../../state/intl/selector';
import {
    changeIntlLocale,
    INTL_LOCALE_EN_EN,
    INTL_LOCALE_DE_DE
} from '../../../state/intl/duck';
import { Locale, Locales } from '../../../state/intl/types';
import {
    changeDialogVisibleSearch,
    changeDialogVisibleTheme
} from '../../../state/dialog/duck';
import { A } from '../../element/a';
import { Button } from '../../element/button';
import { Icon } from '../../element/icon';
import { isValidArray } from '../../../utils/array';

type Props = {
    className?: string;
    content?: {
        menu?: Record<string, unknown>;
    };
    intlAvailableLocales: Locales;
    intlLocale: Locale;
    onChangeDialogVisibleSearch?: (visible: boolean) => void;
    onChangeDialogVisibleTheme?: (visible: boolean) => void;
    onChangeIntlLocale?: (locale: string) => void;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} props - The current component props
 * @param {Function} props.handleIntlChangeLocale - Function handling language state changes
 * @param {Function} props.onChangeDialogVisibleSearch - Function handling dialog state changes
 * @param {Array.<string>} props.intlAvailableLocales - All available locale strings
 * @param {string} props.intlLocale - The current locale string
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {object} [props.content={}] - The component content config
 * @returns {ReactElement} React component markup
 */
export const LayoutHeaderAside: FunctionComponent<Props> = (props) => {
    const {
        className,
        content,
        intlAvailableLocales,
        intlLocale,
        onChangeDialogVisibleSearch = noop,
        onChangeDialogVisibleTheme = noop,
        onChangeIntlLocale = noop
    } = props;

    const contentSection = getContentSection(content);
    const buttonEnClassName = classnames('m-menu__item', 'm-menu__item--en', {
        'is-active': intlLocale === INTL_LOCALE_EN_EN,
        'is-hidden':
            !isValidArray(intlAvailableLocales) ||
            intlAvailableLocales.length < 2
    });
    const buttonDeClassName = classnames('m-menu__item', 'm-menu__item--de', {
        'is-active': intlLocale === INTL_LOCALE_DE_DE,
        'is-hidden':
            !isValidArray(intlAvailableLocales) ||
            intlAvailableLocales.length < 2
    });
    const componentClassName = classnames(
        'm-menu--aside',
        'm-nav__toggle-target',
        'm-nav__aside',
        className
    );

    const handleChangeDialogVisibleSearch = useCallback(function fnCallback(
        event: Event
    ) {
        eventPreventDefault(event);
        onChangeDialogVisibleSearch(true);
    },
    []);

    const handleChangeDialogVisibleTheme = useCallback(function fnCallback(
        event: Event
    ) {
        eventPreventDefault(event);
        onChangeDialogVisibleTheme(true);
    },
    []);

    const handleIntlChangeLocale = useCallback(function fnCallback(
        event: Event
    ) {
        eventPreventDefault(event);
        const locale = get(event, 'target.dataset.locale');
        onChangeIntlLocale(locale);
    },
    []);

    return (
        <ul
            className={componentClassName}
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
                    testId="button-language-en"
                    title={contentSection('menu.language.list[0].title')}
                    onClick={handleIntlChangeLocale}
                    isSmall
                    isClear
                >
                    {contentSection('menu.language.list[0].label')}
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
                    testId="button-language-de"
                    title={contentSection('menu.language.list[1].title')}
                    onClick={handleIntlChangeLocale}
                    isSmall
                    isClear
                >
                    {contentSection('menu.language.list[1].label')}
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
                    onClick={handleChangeDialogVisibleSearch}
                    testId="button-search"
                    title="Search"
                    to={url.search}
                >
                    <span className="c-btn__label">
                        <Icon className="c-btn__icon" icon="search" />
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
                    onClick={handleChangeDialogVisibleTheme}
                    testId="button-settings"
                    title="Settings"
                    to={url.settings}
                >
                    <span className="c-btn__label">
                        <Icon className="c-btn__icon" icon="cog" />
                    </span>
                </A>
            </li>
        </ul>
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
 * @private
 * @type {object<string, Function>}
 */
const mapDispatchToProps = {
    onChangeIntlLocale: changeIntlLocale,
    onChangeDialogVisibleSearch: changeDialogVisibleSearch,
    onChangeDialogVisibleTheme: changeDialogVisibleTheme
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutHeaderAsideConnected = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(addContent('LayoutHeaderAside')(LayoutHeaderAside))
);
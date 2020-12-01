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
import { List } from '../../element/list';
import { ModuleMenuListItem } from '../../module/menu/list-item';
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
 * Get language button class names.
 *
 * @private
 * @param {string} intlLocale - The current selected locale
 * @param {string} buttonLocale - The buttons locale
 * @param {Array<string>} intlAvailableLocales - All available locales
 * @returns {string} The combined button class names
 */
function getIntlButtonClassNames(
    intlLocale: Locale,
    buttonLocale: Locale,
    intlAvailableLocales: Locales
): string {
    return classnames('m-menu__item', 'm-menu__item--en', {
        'is-active': intlLocale === buttonLocale,
        'is-hidden':
            !isValidArray(intlAvailableLocales) ||
            intlAvailableLocales.length < 2
    });
}

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
    const buttonEnClassName = getIntlButtonClassNames(
        intlLocale,
        INTL_LOCALE_EN_EN,
        intlAvailableLocales
    );
    const buttonDeClassName = getIntlButtonClassNames(
        intlLocale,
        INTL_LOCALE_DE_DE,
        intlAvailableLocales
    );
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
        <List
            className={componentClassName}
            itemType="http://schema.org/ItemList"
            role="menu"
        >
            <ModuleMenuListItem>
                <Button
                    className={buttonEnClassName}
                    dataLocale={INTL_LOCALE_EN_EN}
                    isClear
                    isSmall
                    onClick={handleIntlChangeLocale}
                    role="menuitem"
                    testId="button-language-en"
                    title={contentSection('menu.language.list[0].title')}
                >
                    {contentSection('menu.language.list[0].label')}
                </Button>
            </ModuleMenuListItem>
            <ModuleMenuListItem>
                <Button
                    className={buttonDeClassName}
                    dataLocale={INTL_LOCALE_DE_DE}
                    isClear
                    isSmall
                    onClick={handleIntlChangeLocale}
                    role="menuitem"
                    testId="button-language-de"
                    title={contentSection('menu.language.list[1].title')}
                >
                    {contentSection('menu.language.list[1].label')}
                </Button>
            </ModuleMenuListItem>
            <ModuleMenuListItem className="m-menu__list-item--search always-float">
                <A
                    className="m-menu__item--search c-btn--small c-btn--clear"
                    onClick={handleChangeDialogVisibleSearch}
                    role="menuitem"
                    testId="button-search"
                    title="Search"
                    to={url.search}
                >
                    <span className="c-btn__label">
                        <Icon className="c-btn__icon" icon="search" />
                    </span>
                </A>
            </ModuleMenuListItem>
            <ModuleMenuListItem className="m-menu__list-item--theme always-float">
                <A
                    className="m-menu__item--theme c-btn--small c-btn--clear"
                    onClick={handleChangeDialogVisibleTheme}
                    role="menuitem"
                    testId="button-settings"
                    title="Settings"
                    to={url.settings}
                >
                    <span className="c-btn__label">
                        <Icon className="c-btn__icon" icon="cog" />
                    </span>
                </A>
            </ModuleMenuListItem>
        </List>
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

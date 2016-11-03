/* eslint-disable import/no-named-as-default */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires react-redux
 * @requires classnames
 * @requires lodash
 * @requires component/decorator/add-content
 * @requires utils/content
 * @requires state/intl/actions
 * @requires state/intl/constants
 * @requires component/grid/container
 * @requires component/grid/row
 * @requires component/grid/col
 * @requires component/module/menu
 * @requires component/element/nav
 *
 * @changelog
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { get } from 'lodash';

import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import { changeLocale } from './../../state/intl/actions';
import { INTL_LOCALE_EN_EN, INTL_LOCALE_DE_DE } from './../../state/intl/constants';
import GridContainer from './../grid/container';
import GridRow from './../grid/row';
import GridCol from './../grid/col';
import ModuleMenu from './../module/menu';
import Nav from './../element/nav';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function LayoutHeader(props) {

    const {
        className,
        content,
        handleIntlChangeLocale,
        intlLocale,
        intlAvailableLocales,
        headerFixed,
        headerVisible
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
    const buttonEnClassName = classnames('m-menu__item', {
        'is-active': intlLocale === INTL_LOCALE_EN_EN
    });
    const buttonDeClassName = classnames('m-menu__item', {
        'is-active': intlLocale === INTL_LOCALE_DE_DE
    });
    const menuLanguageClassName = classnames('m-menu--language', 'm-nav__toggle-target', {
        'is-hidden': intlAvailableLocales.length <= 1
    });

    return (
        <header className={componentClassName} itemScope itemType='http://schema.org/WPHeader' role='banner'>
            <progress className='m-progress' id='m-progress' max='100' value='0'>
                <div className='m-progress__fallback' id='m-progress__fallback' />
            </progress>
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
                            <ul className={menuLanguageClassName} role='menu' itemScope itemType='http://schema.org/ItemList' >
                                <li className='m-menu__list-item' itemProp='itemListElement' itemScope itemType='http://www.schema.org/SiteNavigationElement'>
                                    <button
                                        className={buttonEnClassName}
                                        role='button'
                                        data-locale={INTL_LOCALE_EN_EN}
                                        title={contentSection('menu.language.list[0].title')}
                                        onClick={handleIntlChangeLocale}
                                    >
                                        {contentSection('menu.language.list[0].label')}
                                    </button>
                                </li>
                                <li className='m-menu__list-item' itemProp='itemListElement' itemScope itemType='http://www.schema.org/SiteNavigationElement'>
                                    <button
                                        className={buttonDeClassName}
                                        role='button'
                                        data-locale={INTL_LOCALE_DE_DE}
                                        title={contentSection('menu.language.list[1].title')}
                                        onClick={handleIntlChangeLocale}
                                    >
                                        {contentSection('menu.language.list[1].label')}
                                    </button>
                                </li>
                            </ul>
                        </GridCol>
                    </GridRow>
                </GridContainer>
            </Nav>
        </header>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} intlLocale The current locale string
 * @property {Array.<string>} intlAvailableLocales All available locale strings
 * @property {boolean} headerFixed Whether the navigation bar is sticky/ficked or not
 * @property {boolean} headerVisible Whether the navigation bar is visible or not (used for css3 animation)
 * @property {Function} handleIntlChangeLocale Function handling language changes
 * @property {string} [className] The component css class names - will be merged into component default classNames
 * @property {Object} [content={}] The component content config
 */
LayoutHeader.propTypes = {
    intlLocale: PropTypes.string.isRequired,
    intlAvailableLocales: PropTypes.array.isRequired,
    headerFixed: PropTypes.bool, // @TODO: check why headerFixed is sometimes missing
    headerVisible: PropTypes.bool, // @TODO: check why headerVisible is sometimes missing
    handleIntlChangeLocale: PropTypes.func.isRequired,
    className: PropTypes.string,
    content: PropTypes.shape({
        menu: PropTypes.object // eslint-disable-line react/no-unused-prop-types
    })
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see LayoutHeader.propTypes
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
 * @param {Object.<*>} state The redux store state
 * @param {Object.<*>} [ownProps] The current component props
 * @returns {Object}
 */
function mapStateToProps(state, ownProps) {
    return {
        intlLocale: get(state, 'intl.locale') || ownProps.intlLocale,
        intlAvailableLocales: get(state, 'intl.availableLocales') || ownProps.intlAvailableLocales,
        headerFixed: get(state, 'scroll.headerFixed') || ownProps.headerFixed,
        headerVisible: get(state, 'scroll.headerVisible') || ownProps.headerVisible
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
 * @param {Function} dispatch The redux store dispatch function
 * @param {Object.<*>} [ownProps] The current component props
 * @returns {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        handleIntlChangeLocale: (e) => {
            dispatch(changeLocale(get(e, 'target.dataset.locale')));
        }
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const LayoutHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(addContent('LayoutHeader')(LayoutHeader));

export default LayoutHeaderContainer;

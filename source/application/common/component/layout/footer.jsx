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
* @requires classnames
* @requires component/decorator/add-content
* @requires utils/content
* @requires component/grid/container
* @requires component/grid/spaced
* @requires component/grid/row
* @requires component/grid/col
* @requires component/module/menu
* @requires component/element/nav
* @requires component/element/button
*
* @changelog
* - 0.0.3 moved to stateless function
* - 0.0.2 rewritten for es2015
* - 0.0.1 basic functions and structure
*/
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import GridContainer from './../grid/container';
import GridSpaced from './../grid/spaced';
import GridRow from './../grid/row';
import GridCol from './../grid/col';
import ModuleMenu from './../module/menu';
import Nav from './../element/nav';
import Button from './../element/button';
import Small from './../element/small';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function LayoutFooter(props) {

    const {
        className,
        content,
        handleScrollTop
    } = props;

    const contentSection = getContentSection(content);
    const componentClassName = classnames('l-footer', className);

    return (
        <footer className={componentClassName} itemScope itemType='http://schema.org/WPFooter' role='contentinfo'>

            <Button
                className='l-footer__button--up c-font-icon--chevron-up'
                classNameLabel='is-visually-hidden'
                onClick={handleScrollTop}
                title={contentSection('btnTitle')}
                type='button'
                role='button'
            >
                {contentSection('btnLabel')}
            </Button>

            <Nav>
                <GridContainer>
                    <GridSpaced>
                        <GridRow>
                            <GridCol>
                                <ModuleMenu content={contentSection('menu.imprint')} />
                            </GridCol>
                        </GridRow>
                        <GridRow>
                            <GridCol>
                                <ModuleMenu content={contentSection('menu.social')} />
                            </GridCol>
                        </GridRow>
                        <GridRow>
                            <GridCol>
                                <Small>
                                    &copy; <strong>{contentSection('copy.name')}</strong> {contentSection('copy.date')}
                                </Small>
                            </GridCol>
                        </GridRow>
                    </GridSpaced>
                </GridContainer>
            </Nav>

        </footer>
    );
}

/**
* Validate props via React.PropTypes helpers.
*
* @static
* @type {Object}
* @property {string} [className] The component css class names - will be merged into component default classNames
* @property {Function} [handleSearchChange=Function.prototype] Function handling to top scrolling
* @property {Object} [content={}] The component content config
*/
LayoutFooter.propTypes = {
    className: PropTypes.string,
    handleScrollTop: PropTypes.func,
    content: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {Object}
* @see LayoutFooter.propTypes
*/
LayoutFooter.defaultProps = {
    handleScrollTop: Function.prototype,
    content: {}
};

export default addContent('LayoutFooter')(LayoutFooter);

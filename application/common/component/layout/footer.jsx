/* eslint-disable immutable/no-mutation */
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
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires react-router
 * @requires classnames
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/component/grid/container
 * @requires common/component/grid/spaced
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/module/menu
 * @requires common/component/element/nav
 * @requires common/component/element/button
 * @requires common/component/element/small
 *
 * @changelog
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import addContent from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import GridContainer from '../grid/container';
import GridSpaced from '../grid/spaced';
import GridRow from '../grid/row';
import GridCol from '../grid/col';
import ModuleMenu from '../module/menu';
import Nav from '../element/nav';
import Button from '../element/button';
import Small from '../element/small';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {object} [props.content={}] - The component content config
 * @param {Function} [props.handleSearchChange=Function.prototype] - Function handling to top scrolling
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
                                    &copy;
                                    {' '}
                                    <strong>
                                        {contentSection('copy.name')}
                                    </strong>
                                    {' '}
                                    {contentSection('copy.date')}
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
 * @type {object}
 */
LayoutFooter.propTypes = {
    className: PropTypes.string, // eslint-disable-line  react/require-default-props
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ])),
    handleScrollTop: PropTypes.func
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
LayoutFooter.defaultProps = {
    content: {},
    handleScrollTop: Function.prototype
};

export default withRouter(addContent('LayoutFooter')(LayoutFooter));

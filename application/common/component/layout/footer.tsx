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
import { default as React, FunctionComponent } from 'react';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import { noop } from 'lodash';

import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { GridContainer } from '../grid/container';
import { GridSpaced } from '../grid/spaced';
import { GridRow } from '../grid/row';
import { GridCol } from '../grid/col';
import { ModuleMenu } from '../module/menu';
import { Nav } from '../element/nav';
import { Button } from '../element/button';
import { Small } from '../element/small';

type Props = {
    className: string;
    content: any;
    handleScrollTop: (event) => void;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {object} [props.content={}] - The component content config
 * @param {Function} [props.handleSearchChange=Function.prototype] - Function handling to top scrolling
 * @returns {ReactElement} React component markup
 */
export const LayoutFooter: FunctionComponent<Props> = (props) => {
    const { className, content, handleScrollTop = noop } = props;

    const contentSection = getContentSection(content);
    const componentClassName = classnames('l-footer', className);

    return (
        <footer
            className={componentClassName}
            itemScope
            itemType="http://schema.org/WPFooter"
            role="contentinfo"
        >
            <Button
                className="l-footer__button--up c-font-icon--chevron-up"
                classNameLabel="is-visually-hidden"
                onClick={handleScrollTop}
                title={contentSection('btnTitle')}
                type="button"
                role="button"
            >
                {contentSection('btnLabel')}
            </Button>

            <Nav>
                <GridContainer>
                    <GridSpaced>
                        <GridRow>
                            <GridCol>
                                <ModuleMenu
                                    content={contentSection('menu.imprint')}
                                />
                            </GridCol>
                        </GridRow>
                        <GridRow>
                            <GridCol>
                                <ModuleMenu
                                    content={contentSection('menu.social')}
                                />
                            </GridCol>
                        </GridRow>
                        <GridRow>
                            <GridCol>
                                <Small>
                                    &copy;{' '}
                                    <strong>
                                        {contentSection('copy.name')}
                                    </strong>{' '}
                                    {contentSection('copy.date')}
                                </Small>
                            </GridCol>
                        </GridRow>
                    </GridSpaced>
                </GridContainer>
            </Nav>
        </footer>
    );
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutFooterConnected = withRouter(
    addContent('LayoutFooter')(LayoutFooter)
);

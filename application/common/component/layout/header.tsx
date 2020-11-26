/**
 * Es6 module for splitting stuff from header.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import {
    selectStateScrollIsHeaderFixed,
    selectStateScrollIsHeaderVisible
} from '../../state/scroll/selector';
import { ModuleMenu } from '../module/menu';
import { GridContainer } from '../grid/container';
import { GridRow } from '../grid/row';
import { GridCol } from '../grid/col';
import { Header } from '../element/header';
import { Nav } from '../element/nav';
import { Progress } from '../element/progress';
import { LayoutHeaderAsideConnected } from './header/aside';

type Props = {
    className?: string;
    content?: {
        menu?: any;
    };
    headerFixed?: boolean;
    headerVisible?: boolean;
};

/**
 * Function representing an aside menu for the header.
 *
 * @function
 * @param {object} props - The current component props
 * @param {string} [props.className] - The component css class names - will be merged into component default classNames
 * @param {object} [props.content={}] - The component content config
 * @param {boolean} [props.headerFixed] - Whether the navigation bar is sticky/ficked or not
 * @param {boolean} [props.headerVisible] - Whether the navigation bar is visible or not (used for css3 animation)
 * @returns {ReactElement} React component markup
 */
export const LayoutHeader: FunctionComponent<Props> = (props) => {
    const { className, content, headerFixed, headerVisible } = props;

    const contentSection = getContentSection(content);
    const componentClassName = classnames(
        'l-header',
        {
            'is-fixed': headerFixed,
            'is-visible': headerVisible
        },
        className
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
                                id="menu-toggle"
                                name="menu-toggle"
                                type="checkbox"
                            />
                            <ModuleMenu
                                className="m-nav__toggle-target"
                                content={contentSection('menu.main')}
                            />
                            <LayoutHeaderAsideConnected />
                        </GridCol>
                    </GridRow>
                </GridContainer>
            </Nav>
        </Header>
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
        headerFixed:
            selectStateScrollIsHeaderFixed(state) || ownProps.headerFixed,
        headerVisible:
            selectStateScrollIsHeaderVisible(state) || ownProps.headerVisible
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutHeaderConnected = withRouter(
    connect(mapStateToProps)(addContent('LayoutHeader')(LayoutHeader))
);

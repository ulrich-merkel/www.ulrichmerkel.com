/** global picturefill */
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
import { default as React, PureComponent, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { selectStateReducedMotionSelectedReduce } from '../../state/reduced-motion/selector';
import { pictureFill } from '../decorator/picturefill';
import { scroller } from '../decorator/scroller';
import { addContent } from '../decorator/add-content';
import { getPageOffset, scrollTo } from '../../utils/scroll-to';
import { eventPreventDefault } from '../../utils/event';
import {
    DIALOG_CONTENT_BROADCAST,
    DIALOG_CONTENT_SEARCH,
    DIALOG_CONTENT_THEME
} from '../../state/dialog/duck';
import { LayoutHeaderConnected } from './header';
import { LayoutFooterConnected } from './footer';
import { LayoutSettingsConnected } from './settings';
import { LayoutLoaderConnected } from './loader';
import { LayoutDialogConnected } from './dialog';
import { PageBroadcast } from '../page/broadcast';
import { PageSearch } from '../page/search';
import { PageSettings } from '../page/settings';

type Props = {
    children?: ReactNode;
    content?: any;
    reducedMotionSelectedReduce?: boolean;
};

/**
 * Class representing a component.
 *
 * @augments React.Component
 * @property {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {object} [props.content={}] - The component content config
 */
export class LayoutBody extends PureComponent<Props> {
    /**
     * Scroll to top animation helper.
     *
     * @param {object} event - The synthetic react event
     * @returns {void}
     */
    handleScrollTop = (event) => {
        const { reducedMotionSelectedReduce = false } = this.props;

        eventPreventDefault(event);
        if (getPageOffset()) {
            scrollTo({
                duration: reducedMotionSelectedReduce ? 0 : 300,
                top: 0
            });
        }
    };

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const { children, content } = this.props;

        return (
            <LayoutSettingsConnected>
                <Helmet {...content} />
                <LayoutLoaderConnected />
                <LayoutHeaderConnected />
                {children}
                <LayoutFooterConnected handleScrollTop={this.handleScrollTop} />
                <LayoutDialogConnected
                    className="l-dialog--search"
                    page={DIALOG_CONTENT_SEARCH}
                >
                    <PageSearch isDialog />
                </LayoutDialogConnected>
                <LayoutDialogConnected
                    className="l-dialog--broadcast"
                    page={DIALOG_CONTENT_BROADCAST}
                >
                    <PageBroadcast isDialog />
                </LayoutDialogConnected>
                <LayoutDialogConnected
                    className="l-dialog--theme"
                    page={DIALOG_CONTENT_THEME}
                >
                    <PageSettings isDialog />
                </LayoutDialogConnected>
            </LayoutSettingsConnected>
        );
    }
}

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object<string, *>} state - The current redux store state
 * @returns {object<string, *>} The mapped state properties
 */
function mapStateToProps(state) {
    return {
        reducedMotionSelectedReduce: selectStateReducedMotionSelectedReduce(
            state
        )
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutBodyConnected = scroller(
    pictureFill(addContent('Head')(connect(mapStateToProps)(LayoutBody)))
);

/** global picturefill */
/* eslint-disable immutable/no-mutation, immutable/no-this */
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
import { default as React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

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
import { LayoutThemeConnected } from './theme';
import { LayoutLoaderConnected } from './loader';
import { LayoutDialogConnected } from './dialog';
import { PageBroadcast } from '../page/broadcast';
import { PageSearch } from '../page/search';
import { PageTheme } from '../page/theme';

/**
 * Scroll to top animation helper.
 *
 * @private
 * @param {object} event - The synthetic react event
 * @returns {void}
 */
function handleScrollTop(event) {
    // eslint-disable-line class-methods-use-this
    eventPreventDefault(event);
    if (getPageOffset()) {
        scrollTo({
            top: 0
        });
    }
}

/**
 * Class representing a component.
 *
 * @augments React.Component
 * @property {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {object} [props.content={}] - The component content config
 */
export class LayoutBody extends PureComponent {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const { children, content } = this.props;

        return (
            <LayoutThemeConnected>
                <Helmet {...content} />
                <LayoutLoaderConnected />
                <LayoutHeaderConnected />
                {children}
                <LayoutFooterConnected handleScrollTop={handleScrollTop} />
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
                    <PageTheme isDialog />
                </LayoutDialogConnected>
            </LayoutThemeConnected>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
LayoutBody.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    )
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
LayoutBody.defaultProps = {
    content: {}
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutBodyConnected = scroller(
    pictureFill(addContent('Head')(LayoutBody))
);

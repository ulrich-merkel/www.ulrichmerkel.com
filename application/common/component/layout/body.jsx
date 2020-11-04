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
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires react
 * @requires prop-types
 * @requires react-helmet
 * @requires common/component/decorator/picturefill
 * @requires common/component/decorator/scroller
 * @requires common/component/decorator/add-content
 * @requires common/utils/event
 * @requires common/utils/scroll-to
 * @requires common/state/constants
 * @requires common/component/layout/header
 * @requires common/component/layout/footer
 * @requires common/component/layout/loader
 * @requires common/component/layout/dialog
 * @requires common/component/page/broadcast
 * @requires common/component/page/search
 * @requires common/component/page/theme
 *
 * @changelog
 * - 0.0.4 Add theming
 * - 0.0.3 Remove connect and state handling, improve dialog handling
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import pictureFill from '../decorator/picturefill';
import scroller from '../decorator/scroller';
import addContent from '../decorator/add-content';
import scrollTo, { getPageOffset } from '../../utils/scroll-to';
import { eventPreventDefault } from '../../utils/event';
import {
    STATE_DIALOG_PAGE_BROADCAST,
    STATE_DIALOG_PAGE_SEARCH,
    STATE_DIALOG_PAGE_THEME
} from '../../state/constants';
import LayoutHeaderConnected from './header';
import LayoutFooter from './footer';
import LayoutTheme from './theme';
import LayoutLoader from './loader';
import LayoutDialogConnected from './dialog';
import PageBroadcast from '../page/broadcast';
import PageSearch from '../page/search';
import PageTheme from '../page/theme';

/**
 * Scroll to top animation helper.
 *
 * @private
 * @param {object} event - The synthetic react event
 * @returns {void}
 */
function handleScrollTop(event) { // eslint-disable-line class-methods-use-this
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
 * @class
 * @augments React.Component
 * @property {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {object} [props.content={}] - The component content config
 */
class LayoutBody extends Component {
    /**
     * ShouldComponentUpdate is triggered before the re-rendering process starts,
     * giving the developer the ability to short circuit this process.
     *
     * @param {object} nextProps - The news props to be rendered
     * @returns {boolean} Whether to force component update or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            children,
            content
        } = this.props;

        return (
            <LayoutTheme>
                <Helmet {...content} />
                <LayoutLoader />
                <LayoutHeaderConnected />
                {children}
                <LayoutFooter
                    handleScrollTop={handleScrollTop}
                />
                <LayoutDialogConnected
                    className='l-dialog--search'
                    page={STATE_DIALOG_PAGE_SEARCH}
                >
                    <PageSearch isDialog />
                </LayoutDialogConnected>
                <LayoutDialogConnected
                    className='l-dialog--broadcast'
                    page={STATE_DIALOG_PAGE_BROADCAST}
                >
                    <PageBroadcast isDialog />
                </LayoutDialogConnected>
                <LayoutDialogConnected
                    className='l-dialog--theme'
                    page={STATE_DIALOG_PAGE_THEME}
                >
                    <PageTheme isDialog />
                </LayoutDialogConnected>
            </LayoutTheme>
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
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ]))
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
const LayoutBodyContainer = scroller(
    pictureFill(addContent('Head')(LayoutBody))
);

export default LayoutBodyContainer;
export {
    LayoutBody
};

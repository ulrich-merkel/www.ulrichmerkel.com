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
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires react-helmet
 * @requires classnames
 * @requires common/component/decorator/picturefill
 * @requires common/component/decorator/scroller
 * @requires common/component/decorator/add-content
 * @requires common/utils/scroll-to
 * @requires common/state/constants
 * @requires common/component/layout/header
 * @requires common/component/layout/footer
 * @requires common/component/layout/loader
 * @requires common/component/layout/dialog
 * @requires common/component/page/broadcast
 * @requires common/component/page/search
 *
 * @changelog
 * - 0.0.3 Remove connect and state handling, improve dialog handling
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import {
    pictureFill,
    scroller,
    addContent
} from '../decorator/';
import scrollTo, { getPageOffset } from '../../utils/scroll-to';
import {
    STATE_DIALOG_PAGE_BROADCAST,
    STATE_DIALOG_PAGE_SEARCH
} from '../../state/constants';
import {
    LayoutHeader,
    LayoutFooter,
    LayoutLoader,
    LayoutDialog
} from './index';
import PageBroadcast from '../page/broadcast';
import PageSearch from '../page/search';

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
 * @property {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [props.content={}] - The component content config
 */
class LayoutBody extends Component {

    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {Object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        /**
         * Bind manually because React class components don't auto-bind.
         *
         * A bind call or arrow function in a JSX prop will create a brand new
         * function on every single render. This is bad for performance, as it
         * will result in the garbage collector being invoked way more than is necessary.
         *
         * Unfortunately React ES6 classes do not autobind their methods like components created
         * with the older React.createClass syntax. There are several approaches to binding methods
         * for ES6 classes. A basic approach is to just manually bind the methods in the constructor.
         *
         * @see {@link http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding}
         * @see {@link http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js/24679479#24679479}
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
         */
        this.handleScrollTop = this.handleScrollTop.bind(this);
    }

    /**
     * ShouldComponentUpdate is triggered before the re-rendering process starts,
     * giving the developer the ability to short circuit this process.
     *
     * @function
     * @param {Object} nextProps - The news props to be rendered
     * @returns {boolean} Whether to force component update or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    /**
     * Scroll to top animation helper.
     *
     * @function
     * @param {Object} e - The synthetic react event
     * @returns {void}
     */
    handleScrollTop(e) { // eslint-disable-line class-methods-use-this
        e.preventDefault();
        if (getPageOffset()) {
            scrollTo({
                top: 0
            });
        }
    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {
        const {
            children,
            content
        } = this.props;

        const componentClassName = classnames('l-react__body');

        return (
            <div className={componentClassName}>
                <Helmet {...content} />
                <LayoutLoader />
                <LayoutHeader />
                {children}
                <LayoutFooter
                    handleScrollTop={this.handleScrollTop}
                />
                <LayoutDialog
                    page={STATE_DIALOG_PAGE_SEARCH}
                    isSearch
                >
                    <PageSearch isDialog />
                </LayoutDialog>
                <LayoutDialog
                    page={STATE_DIALOG_PAGE_BROADCAST}
                    isBroadcast
                >
                    <PageBroadcast isDialog />
                </LayoutDialog>
            </div>
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
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
 * @type {Object}
 */
LayoutBody.defaultProps = {
    content: {}
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {React.Element}
 */
const LayoutBodyContainer = scroller(pictureFill(addContent('Head')(LayoutBody)));

export default LayoutBodyContainer;
export {
    LayoutBody
};

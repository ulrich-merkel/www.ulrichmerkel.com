/* global picturefill */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires react
 * @requires react-helmet
 * @requires classnames
 * @requires common/component/decorator/picturefill
 * @requires common/component/decorator/scroller
 * @requires common/component/decorator/add-content
 * @requires common/utils/scroll-to
 * @requires common/component/layout/header
 * @requires common/component/layout/footer
 * @requires common/component/layout/loader
 * @requires common/component/layout/dialog
 *
 * @changelog
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import { get } from 'lodash';

import picturefill from './../decorator/picturefill';
import scroller from './../decorator/scroller';
import addContent from './../decorator/add-content';
import scrollTo, { getPageOffset } from './../../utils/scroll-to';
import { selectStateDialogVisible, selectStateDialogPage, selectStateSearchTerm } from './../../state/selectors';
import { STATE_DIALOG_PAGE_BROADCAST, STATE_DIALOG_PAGE_SEARCH } from './../../state/constants';
import { changeDialogVisibleSearch } from './../../state/dialog/actions';

import LayoutHeader from './header'; // eslint-disable-line import/no-named-as-default
import LayoutFooter from './footer';
import LayoutLoader from './loader';
import LayoutDialog from './dialog'; // eslint-disable-line import/no-named-as-default
import LayoutSearch from './search';
import PageBroadcast from './../page/broadcast';
import PageSearch from './../page/search';

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
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
     * @returns {ReactElement} React component markup
     */
    render() {

        const {
            dialogVisible,
            dialogPage,
            children,
            content,
            ...otherProps
        } = this.props;

        const componentClassName = classnames('l-react__body');

        return (
            <div className={componentClassName}>
                <Helmet {...content} />
                <LayoutHeader {...otherProps} />
                {children}
                <LayoutFooter
                    handleScrollTop={this.handleScrollTop}
                    {...otherProps}
                />
                <LayoutLoader {...otherProps} />
                <LayoutDialog {...otherProps} page={STATE_DIALOG_PAGE_SEARCH}>
                    <PageSearch isDialog {...otherProps} />
                </LayoutDialog>
                <LayoutDialog {...otherProps} page={STATE_DIALOG_PAGE_BROADCAST}>
                    <PageBroadcast isDialog {...otherProps} />
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
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] - The component content config
 */
LayoutBody.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see LayoutBody.propTypes
 */
LayoutBody.defaultProps = {
    content: {}
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {Object.<*>} state - The redux store state
 * @param {Object.<*>} [ownProps] - The current component props
 * @returns {Object}
 */
function mapStateToProps(state, ownProps) {
    return {
        searchTerm: selectStateSearchTerm(state) || ownProps.searchTerm
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {React.Element}
 */
const LayoutBodyContainer = connect(
    mapStateToProps,
    {
        handleChangeDialogVisibleSearch: changeDialogVisibleSearch
    }
)(scroller(picturefill(addContent('Head')(LayoutBody))));

export default LayoutBodyContainer;
export {
    LayoutBody
};

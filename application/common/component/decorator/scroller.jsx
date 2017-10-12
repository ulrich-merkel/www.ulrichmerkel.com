/* eslint-disable immutable/no-this, immutable/no-mutation */
/* global window, document */
/**
 * Es6 module for handling browser scrolling actions.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires react-router
 * @requires lodash
 * @requires common/state/scroll/actions
 * @requires common/utils/environment
 * @requires common/utils/scroll-to
 *
 * @changelog
 * - 0.0.3 Added scrollTop after change to react-router@4
 * - 0.0.2 Improved scroll handling
 * - 0.0.1 Basic functions and structure
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { throttle } from 'lodash';

import { changeHeaderFixed, changeHeaderVisible } from '../../state/scroll/actions';
import { isBrowser } from '../../utils/environment';
import scrollTo, { getPageOffset } from '../../utils/scroll-to';

// @TODO: Should be computed from actual css declaration
const HEADER_HEIGHT = 61;

/**
 * The scroller higher order function handling window scrolling.
 *
 * @function
 * @param {ReactElement} SourceComponent - The react component to be decorated
 * @returns {ReactElement}
 */
function scroller(SourceComponent) {

    /**
     * Class representing a component.
     *
     * @class
     * @extends React.Component
     * @property {Function} props.handleScrollChangeHeaderFixed - Callback action for updating redux
     * @property {Function} props.handleScrollChangeHeaderVisible - Callback action for updating redux
     * @property {Object} props.location - Current router location properties
     */
    class Scroller extends Component {

        /**
         * The actual class constructor.
         *
         * This is usally unnecessary if we don't perform any actions here,
         * because a default constructor will call super(props) for us.
         * We do this just because of completeness.
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
             * We also throttle the scroll function here to avoid unnecessary function calls while scrolling.
             *
             * @see {@link http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding}
             * @see {@link http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js/24679479#24679479}
             * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
             */
            this.onScroll = throttle(this.onScroll.bind(this), 100);

            this.previousScrollY = 0;
            this.headerFixed = true;
            this.headerVisible = true;
        }

        /**
         * Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @returns {void}
         */
        componentDidMount() {
            isBrowser() && window.addEventListener('scroll', this.onScroll);
            this.onScroll();
            this.scrollTop();
        }

        /**
         * Invoked before a mounted component receives new props. React only calls
         * this method if some of component's props may update.
         *
         * @param {Object} [nextProps] - The new class properties
         * @returns {void}
         */
        componentWillReceiveProps (nextProps) {
            if (this.props.location !== nextProps.location) {
                this.scrollTop();
            }
        }

        /**
         * Invoked immediately after the component's updates are flushed to
         * the DOM. This method is not called for the initial render.
         *
         * @returns {void}
         */
        componentDidUpdate() {
            this.onScroll();
        }

        /**
         * Invoked immediately before a component is unmounted from the DOM.
         *
         * @returns {void}
         */
        componentWillUnmount() {
            isBrowser() && window.removeEventListener('scroll', this.onScroll);
        }

        /**
         * Handle window scrolling to calculate header offset.
         *
         * @returns {void}
         */
        onScroll() {
            const {
                handleScrollChangeHeaderFixed,
                handleScrollChangeHeaderVisible
            } = this.props;
            const currentScrollY = getPageOffset();

            handleScrollChangeHeaderFixed(this.headerFixed);

            /**
             * User is scrolling up, so show header.
             * Also checking if initial scroll position is used.
             */
            if (
                (this.previousScrollY > currentScrollY && !this.headerVisible) ||
                (this.previousScrollY === 0 && currentScrollY === 0)
            ) {
                this.headerVisible = true;
                handleScrollChangeHeaderVisible(this.headerVisible);
            }

            /**
             * User is scrolling down, so hide header.
             */
            if (this.previousScrollY < currentScrollY && this.headerVisible && HEADER_HEIGHT < currentScrollY) {
                this.headerVisible = false;
                handleScrollChangeHeaderVisible(this.headerVisible);
            }

            this.previousScrollY = currentScrollY;
        }

        /**
         * Scroll to top, make sure the page is already scrolled.
         *
         * @see {@link https://developer.mozilla.org/de/docs/Web/API/Window/scrollY}
         *
         * @returns {void}
         */
        scrollTop() {
            if (getPageOffset()) {
                scrollTo({
                    top: 0
                });
            }
        }

        /**
         * The required render function to return a single react child element.
         *
         * @returns {ReactElement} React component markup
         */
        render() {
            return <SourceComponent {...this.props} />;
        }
    }

    /**
     * Validate props via React.PropTypes helpers.
     *
     * @static
     * @type {Object}
     */
    Scroller.propTypes = {
        handleScrollChangeHeaderFixed: PropTypes.func.isRequired,
        handleScrollChangeHeaderVisible: PropTypes.func.isRequired,
        location: PropTypes.shape({
            hash: PropTypes.string,
            key: PropTypes.string,
            pathname: PropTypes.string,
            search: PropTypes.string,
            state: PropTypes.object
        }).isRequired
    };

    /**
     * Connects a React component to a Redux store. It does not modify the
     * component class passed to it. Instead, it returns a new, connected component class.
     * We also use the shorthand notation for mapDispatchToProps here to save
     * some bytes.
     */
    const ScrollerContainer = connect(
        null,
        {
            handleScrollChangeHeaderFixed: changeHeaderFixed,
            handleScrollChangeHeaderVisible: changeHeaderVisible
        }
    )(withRouter(Scroller));

    return ScrollerContainer;

}

export default scroller;

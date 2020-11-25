/**
 * Es6 module for handling browser scrolling actions.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { throttle } from 'lodash';

import { hasPassiveEventListeners } from '../../../client/feature-detect/has-passive-event-listeners';
import {
    changeScrollHeaderFixed,
    changeScrollHeaderVisible
} from '../../state/scroll/duck';
import { selectStateReducedMotionSelectedReduce } from '../../state/reduced-motion/selector';
import { isBrowser } from '../../utils/environment';
import { getPageOffset, scrollTo } from '../../utils/scroll-to';

const supportsPassiveEventListeners = hasPassiveEventListeners();

// @TODO Should be computed from actual css declaration
const HEADER_HEIGHT = 61;

type Props = {
    handleChangeScrollHeaderFixed: (headerFixed: boolean) => void;
    handleChangeScrollHeaderVisible: (headerVisible: boolean) => void;
    location: {
        hash: string;
        key: string;
        pathname: string;
        search: string;
        state: any;
    };
    reducedMotionSelected: boolean;
};

/**
 * The scroller higher order function handling window scrolling.
 *
 * @param {ReactElement} SourceComponent - The react component to be decorated
 * @returns {ReactElement}
 */
export function scroller(SourceComponent: ComponentType): ComponentType {
    /**
     * Class representing a component.
     *
     * @class
     * @augments React.Component
     * @property {Function} props.handleChangeScrollHeaderFixed - Callback action for updating redux
     * @property {Function} props.handleChangeScrollHeaderVisible - Callback action for updating redux
     * @property {object} props.location - Current router location properties
     */
    class Scroller extends Component<Props> {
        previousScrollY: number = 0;
        headerFixed: boolean = true;
        headerVisible: boolean = true;

        /**
         * The actual class constructor.
         *
         * This is usally unnecessary if we don't perform any actions here,
         * because a default constructor will call super(props) for us.
         * We do this just because of completeness.
         *
         * @constructs
         * @param {object} [props] - The initial class properties
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
        }

        /**
         * Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @returns {void}
         */
        componentDidMount() {
            if (isBrowser()) {
                // Use our detect's results. passive applied if supported, capture will be false either way.
                window.addEventListener(
                    'scroll',
                    this.onScroll,
                    supportsPassiveEventListeners ? { passive: true } : false
                );
            }
            this.onScroll();
        }

        /**
         * Invoked immediately after the component's updates are flushed to
         * the DOM. This method is not called for the initial render.
         *
         * @param {object} [prevProps] - The previous class properties
         * @returns {void}
         */
        componentDidUpdate(prevProps) {
            const { location } = this.props;

            this.onScroll();
            if (location !== prevProps.location) {
                this.scrollTop();
            }
        }

        /**
         * Invoked immediately before a component is unmounted from the DOM.
         *
         * @returns {void}
         */
        componentWillUnmount() {
            if (isBrowser()) {
                window.removeEventListener('scroll', this.onScroll);
            }
        }

        /**
         * Handle window scrolling to calculate header offset.
         *
         * @returns {void}
         */
        onScroll() {
            const {
                handleChangeScrollHeaderFixed,
                handleChangeScrollHeaderVisible
            } = this.props;
            const currentScrollY = getPageOffset();

            handleChangeScrollHeaderFixed(this.headerFixed);

            /**
             * User is scrolling up, so show header.
             * Also checking if initial scroll position is used.
             */
            if (
                (this.previousScrollY > currentScrollY &&
                    !this.headerVisible) ||
                (this.previousScrollY === 0 && currentScrollY === 0)
            ) {
                this.headerVisible = true;
                handleChangeScrollHeaderVisible(this.headerVisible);
            }

            /**
             * User is scrolling down, so hide header.
             */
            if (
                this.previousScrollY < currentScrollY &&
                this.headerVisible &&
                HEADER_HEIGHT < currentScrollY
            ) {
                this.headerVisible = false;
                handleChangeScrollHeaderVisible(this.headerVisible);
            }

            this.previousScrollY = currentScrollY;
        }

        /**
         * Scroll to top, make sure the page is already scrolled.
         *
         * @see {@link https://developer.mozilla.org/de/docs/Web/API/Window/scrollY}
         *
         * @private
         * @returns {void}
         */
        scrollTop = () => {
            const { reducedMotionSelected = false } = this.props;

            if (getPageOffset()) {
                scrollTo({
                    duration: reducedMotionSelected ? 0 : 300,
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <SourceComponent {...this.props} />;
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
            reducedMotionSelected: selectStateReducedMotionSelectedReduce(state)
        };
    }

    /**
     * If an object is passed, each function inside it will be assumed to
     * be a Redux action creator. An object with the same function names,
     * but with every action creator wrapped into a dispatch call so they
     * may be invoked directly, will be merged into the component’s props.
     * If a function is passed, it will be given dispatch.
     *
     * @private
     * @type {object<string, Function>}
     */
    const mapDispatchToProps = {
        handleChangeScrollHeaderFixed: changeScrollHeaderFixed,
        handleChangeScrollHeaderVisible: changeScrollHeaderVisible
    };

    /**
     * Connects a React component to a Redux store. It does not modify the
     * component class passed to it. Instead, it returns a new, connected component class.
     * We also use the shorthand notation for mapDispatchToProps here to save
     * some bytes.
     */
    const ScrollerContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(Scroller));

    return ScrollerContainer;
}

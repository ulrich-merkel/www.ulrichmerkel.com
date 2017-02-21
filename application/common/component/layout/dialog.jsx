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
 * @requires react-redux
 * @requires classnames
 * @requires lodash
 * @requires common/state/selectors
 * @requires common/state/dialog/actions
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/utils/environment
 * @requires common/component/module/article
 * @requires common/component/module/list
 * @requires common/component/grid/spaced
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/element/button
 *
 * @changelog
 * - 0.0.4 Add isBroadcast and isSearch to props
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { throttle, isEqual, get } from 'lodash';

import { selectStateDialogVisible, selectStateDialogPage } from './../../state/selectors';
import { changeDialogVisible } from './../../state/actions';
import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import { isBrowser } from './../../utils/environment';

import GridSpaced from './../grid/spaced';
import GridRow from './../grid/row';
import GridCol from './../grid/col';
import Button from './../element/button';

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
 */
class LayoutDialog extends Component {

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
         * A bind call or arrow function in a JSX prop will create a brand new
         * function on every single render. This is bad for performance, as it
         * will result in the garbage collector being invoked way more than is necessary.
         *
         * Unfortunately React ES6 classes do not autobind their methods like components created
         * with the older React.createClass syntax. There are several approaches to binding methods
         * for ES6 classes. A basic approach is to just manually bind the methods in the constructor
         *
         * We also throttle the scroll function here to avoid unnecessary function calls while scrolling.
         *
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
         */
        this.onClose = this.onClose.bind(this);
        this.onKeyDown = throttle(this.onKeyDown.bind(this), 100);
    }

    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @function
     * @returns {void}
     */
    componentDidMount() {
        if (isBrowser()) {
            window.addEventListener('keydown', this.onKeyDown, false);
        }
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
        return !isEqual(this.props, nextProps);
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @function
     * @returns {void}
     */
    componentWillUnmount() {
        if (isBrowser()) {
            window.removeEventListener('keydown', this.onKeyDown, false);
        }
    }

    /**
     * Esc key press.
     *
     * @function
     * @private
     * @param {Object} event - Synthetic react event
     * @returns {void}
     */
    onKeyDown(event) {
        if (event && event.keyCode === 27) {
            this.onClose();
        }
    }

    /**
     * Handle button click.
     *
     * @function
     * @private
     * @param {Object} event - Synthetic react event
     * @returns {void}
     */
    onClose(event) {
        event && event.preventDefault(); // eslint-disable-line no-unused-expressions
        this.props.handleChangeDialogVisible(false);
    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {
        const {
            dialogVisible,
            dialogPage,
            isBroadcast,
            isSearch,
            content,
            page,
            className,
            children
        } = this.props;

        if (!dialogVisible || !page || dialogPage !== page) {
            return null;
        }

        const contentSection = getContentSection(content);
        const contentSectionNav = contentSection('nav') || {};
        const composedClassName = classnames('l-dialog', className, {
            'l-dialog--broadcast': isBroadcast,
            'l-dialog--search': isSearch
        });

        return (
            <dialog className={composedClassName} role='presentation'>
                <div className='l-dialog__content'>

                    {children}

                    <GridSpaced>
                        <GridRow>
                            <GridCol>
                                <Button
                                    title={contentSectionNav.btnCloseTitle}
                                    onClick={this.onClose}
                                >
                                    {contentSectionNav.btnCloseLabel}
                                </Button>
                            </GridCol>
                        </GridRow>
                    </GridSpaced>

                    <Button
                        className='l-dialog__button--close c-font-icon--close'
                        classNameLabel='is-visually-hidden'
                        title={contentSectionNav.btnCloseTitle}
                        onClick={this.onClose}
                        isSmall
                    >
                        {contentSectionNav.btnCloseLabel}
                    </Button>

                </div>

                <div className='l-dialog__background' role='presentation' />

            </dialog>
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Function} [handleChangeDialogVisible=Function.prototype] - Redux action callback to control dialog visibility
 * @property {boolean} [dialogVisible=false] - Redux state whether this dialog is visible or not
 * @property {Object} [content={}] - The component content config
 */
LayoutDialog.propTypes = {
    handleChangeDialogVisible: PropTypes.func,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    dialogPage: PropTypes.string,
    dialogVisible: PropTypes.bool,
    isBroadcast: PropTypes.bool,
    isSearch: PropTypes.bool,
    content: PropTypes.object,  // eslint-disable-line react/forbid-prop-types
    page: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see LayoutDialog.propTypes
 */
LayoutDialog.defaultProps = {
    handleChangeDialogVisible: Function.prototype,
    dialogPage: '',
    dialogVisible: false,
    isBroadcast: false,
    isSearch: false,
    content: {},
    page: ''
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
        dialogVisible: selectStateDialogVisible(state) || get(ownProps, 'dialogVisible'),
        dialogPage: selectStateDialogPage(state) || get(ownProps, 'dialogPage')
    };
}

const LayoutDialogContainer = connect(
    mapStateToProps,
    {
        handleChangeDialogVisible: changeDialogVisible
    }
)(addContent('LayoutDialog')(LayoutDialog));

export default LayoutDialogContainer;
export {
    LayoutDialog
};

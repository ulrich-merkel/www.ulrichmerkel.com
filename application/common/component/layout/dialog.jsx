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
 * @requires react-redux
 * @requires classnames
 * @requires lodash
 * @requires common/state/selectors
 * @requires common/state/dialog/actions
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/utils/environment
 * @requires common/utils/event
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { throttle, isEqual, get } from 'lodash';

import { selectStateDialogVisible, selectStateDialogPage } from '../../state/selectors';
import { changeDialogVisible } from '../../state/actions';
import addContent from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { eventPreventDefault } from '../../utils/event';
import { isBrowser } from '../../utils/environment';

import GridSpaced from '../grid/spaced';
import GridRow from '../grid/row';
import GridCol from '../grid/col';
import Button from '../element/button';

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 * @property {Function} [props.onClose=Function.prototype] - Redux action callback to control dialog visibility
 * @property {boolean} [props.dialogVisible=false] - Redux state whether this dialog is visible or not
 * @property {object} [props.content={}] - The component content config
 */
class LayoutDialog extends Component {

    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        this.onKeyDown = throttle(this.onKeyDown.bind(this), 100);
    }

    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
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
     * @param {object} nextProps - The news props to be rendered
     * @returns {boolean} Whether to force component update or not
     */
    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
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
     * @private
     * @param {object} event - Synthetic react event
     * @returns {void}
     */
    onKeyDown(event) {
        const { onClose } = this.props;

        if (event && event.keyCode === 27) {
            onClose();
        }
    }

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            children,
            className,
            content,
            dialogPage,
            dialogVisible,
            onClose,
            page
        } = this.props;

        if (!dialogVisible || !page || dialogPage !== page) {
            return null;
        }

        const contentSection = getContentSection(content);
        const contentSectionNav = contentSection('nav') || {};
        const composedClassName = classnames('l-dialog', className);

        return (
            <dialog className={composedClassName} role='presentation'>
                <div className='l-dialog__content'>

                    {children}

                    <GridSpaced>
                        <GridRow>
                            <GridCol>
                                <Button
                                    title={contentSectionNav.btnCloseTitle}
                                    onClick={onClose}
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
                        onClick={onClose}
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
 * @type {object}
 */
LayoutDialog.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    dialogPage: PropTypes.string,
    dialogVisible: PropTypes.bool,
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ])),
    page: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
LayoutDialog.defaultProps = {
    onClose: Function.prototype,
    dialogPage: '',
    dialogVisible: false,
    content: {},
    page: ''
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
        dialogVisible: selectStateDialogVisible(state) || get(ownProps, 'dialogVisible'),
        dialogPage: selectStateDialogPage(state) || get(ownProps, 'dialogPage')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClose(event) {
            eventPreventDefault(event);
            dispatch(changeDialogVisible(false));
        }
    };
}
const LayoutDialogConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(addContent('LayoutDialog')(LayoutDialog));

export default LayoutDialogConnected;
export {
    LayoutDialog
};

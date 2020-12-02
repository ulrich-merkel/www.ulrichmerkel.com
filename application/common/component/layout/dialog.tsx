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
import { default as React, Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { throttle, get, noop } from 'lodash';

import {
    selectStateDialogContent,
    selectStateDialogVisible
} from '../../state/dialog/selector';
import { changeDialogVisible } from '../../state/dialog/duck';
import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';
import { Event, eventPreventDefault } from '../../utils/event';
import { isBrowser } from '../../utils/environment';
import { closeDialog, showDialog } from '../../../client/utils/dialog';

import { GridSpaced } from '../grid/spaced';
import { GridRow } from '../grid/row';
import { GridCol } from '../grid/col';
import { Button } from '../element/button';
import { View } from '../element/view';

type Props = {
    onChangeDialogVisible?: () => void;
    children?: ReactNode;
    className?: string;
    dialogPage?: string;
    dialogVisible?: boolean;
    content?: Record<string, unknown>;
    page?: string;
};

/**
 * Class representing a component.
 *
 * @augments React.Component
 */
export class LayoutDialog extends Component<Props> {
    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props: Props) {
        super(props);

        this.onKeyDown = throttle(this.onKeyDown.bind(this), 100);
    }

    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @returns {void}
     */
    componentDidMount(): void {
        if (isBrowser()) {
            window.addEventListener('keydown', this.onKeyDown, false);
        }
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @returns {void}
     */
    componentWillUnmount(): void {
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
    onKeyDown(event: KeyboardEvent): void {
        const { onChangeDialogVisible = noop } = this.props;

        if (event && event.keyCode === 27) {
            onChangeDialogVisible(false);
        }
    }

    /**
     * Handle button close.
     *
     * @private
     * @param {object} event - Synthetic react event
     * @returns {void}
     */
    onClose = (event: Event): void => {
        const { onChangeDialogVisible = noop } = this.props;

        eventPreventDefault(event);
        onChangeDialogVisible(false);
    };

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render(): ReactNode {
        const {
            children,
            className,
            content,
            dialogPage = '',
            dialogVisible = false,
            page = ''
        } = this.props;

        if (!dialogVisible || !page || dialogPage !== page) {
            closeDialog();
            return null;
        }

        showDialog();

        const contentSection = getContentSection(content);
        const contentSectionNav = contentSection('nav') || {};
        const composedClassName = classnames('l-dialog', className);

        return (
            <dialog className={composedClassName} role="presentation">
                <View className="l-dialog__content">
                    {children}

                    <GridSpaced>
                        <GridRow>
                            <GridCol>
                                <Button
                                    testId="button-close"
                                    title={contentSectionNav.btnCloseTitle}
                                    onClick={this.onClose}
                                >
                                    {contentSectionNav.btnCloseLabel}
                                </Button>
                            </GridCol>
                        </GridRow>
                    </GridSpaced>

                    <Button
                        className="l-dialog__button--close c-font-icon--close"
                        classNameLabel="is-visually-hidden"
                        testId="button-x"
                        title={contentSectionNav.btnCloseTitle}
                        onClick={this.onClose}
                    >
                        {contentSectionNav.btnCloseLabel}
                    </Button>
                </View>
            </dialog>
        );
    }
}

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
        dialogVisible:
            selectStateDialogVisible(state) || get(ownProps, 'dialogVisible'),
        dialogPage:
            selectStateDialogContent(state) || get(ownProps, 'dialogPage')
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
 * @type {object<string, Function}
 */
const mapDispatchToProps = {
    onChangeDialogVisible: changeDialogVisible
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutDialogConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(addContent('LayoutDialog')(LayoutDialog));

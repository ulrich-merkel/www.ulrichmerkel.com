/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { noop } from 'lodash';

import { changeDialogVisibleBroadcast } from '../../state/dialog/duck';
import { isBrowser } from '../../utils/environment';
import { eventPreventDefault } from '../../utils/event';
import { ModuleTextHeadline } from './text/headline';
import { ModuleTextContent } from './text/content';
import { ModuleTextPerson } from './text/person';
import { ModuleTextTime } from './text/time';
import { ModuleTextLink } from './text/link';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        text: {
            headline?: string;
            content?: string[];
            person?: string[];
            small?: string[];
        }[];
        datePublished: string;
        author: string;
        timeStart: string;
        linkTo: string;
        linkLabel: string;
        linkTitle: string;
        btnTo: string;
        btnTitle: string;
        btnLabel: string;
    };
    handleChangeDialogVisible?: () => void;
    hasColumns2?: boolean;
    htmlElement?: keyof JSX.IntrinsicElements;
    isCentered?: boolean;
    itemType?: string;
}

/**
 * Class representing a component.
 *
 * @augments React.Component
 * @property {Function} [props.handleChangeDialogVisible=Function.prototype] - The redux action for handling the dialog
 * @property {string} [props.htmlElement='div'] - The component element type used for React.createElement
 * @property {string} [props.className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @property {boolean} [props.hasColumns2=true] - Whether the component text should be clusted in columns via css or not
 * @property {string} [props.itemType=''] - The schema.org itemtype url attribute
 * @property {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {object} [props.content={}] - The component translation config
 */
export class ModuleText extends Component<Props> {
    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @returns {void}
     */
    componentDidMount() {
        this.bindDialogOpen();
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * @returns {void}
     */
    componentDidUpdate() {
        this.unbindDialogOpen();
        this.bindDialogOpen();
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @returns {void}
     */
    componentWillUnmount() {
        this.unbindDialogOpen();
    }

    /**
     * Open broadcast dialog.
     *
     * @private
     * @param {object} event - Synthetic react event
     * @returns {void}
     */
    openDialog = (event) => {
        const { handleChangeDialogVisible = noop } = this.props;

        eventPreventDefault(event);
        handleChangeDialogVisible(true);
    };

    /**
     * Bind click event handlers to links in text content.
     *
     * @private
     * @returns {void}
     */
    bindDialogOpen() {
        if (!isBrowser()) {
            return;
        }

        const showDialogNodes = document.getElementsByClassName(
            'js-show-broadcast'
        );
        if (showDialogNodes) {
            Array.prototype.forEach.call(showDialogNodes, (showDialogNode) => {
                showDialogNode.addEventListener('click', this.openDialog);
            });
        }
    }

    /**
     * Remove event listeners from text links.
     *
     * @private
     * @returns {void}
     */
    unbindDialogOpen() {
        if (!isBrowser()) {
            return;
        }

        const showDialogNodes = document.getElementsByClassName(
            'js-show-broadcast'
        );
        if (showDialogNodes) {
            Array.prototype.forEach.call(showDialogNodes, (showDialogNode) => {
                showDialogNode.removeEventListener('click', this.openDialog);
            });
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
            htmlElement: HtmlElement = 'div',
            content,
            hasColumns2 = true,
            isCentered = false,
            itemType
        } = this.props;

        if (!content.text || !content.text.length) {
            return null;
        }

        const componentClassName = classnames('m-text', className);
        const componentTextBlockClassName = classnames('m-text__block');
        const componentSchema = itemType ? { itemScope: true, itemType } : null;

        return (
            <HtmlElement className={componentClassName} {...componentSchema}>
                {content.text.map((value) => {
                    return (
                        <div
                            key={shortid.generate()}
                            className={componentTextBlockClassName}
                        >
                            <ModuleTextHeadline text={value.headline} />
                            <ModuleTextContent
                                content={value.content}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                            <ModuleTextPerson
                                content={value.person}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                            <ModuleTextContent
                                content={value.small}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                        </div>
                    );
                })}
                <ModuleTextTime content={content} />
                <ModuleTextLink content={content} />
                {children}
            </HtmlElement>
        );
    }
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const ModuleTextConnected = connect(null, {
    handleChangeDialogVisible: changeDialogVisibleBroadcast
})(ModuleText);

/**
 * Es6 module for a text module.
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
import { Event, eventPreventDefault } from '../../utils/event';
import { isValidArray } from '../../utils/array';
import { View } from '../element/view';
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
    isCentered?: boolean;
    itemType?: string;
};

/**
 * Class representing a a text module.
 *
 * @augments React.Component
 */
export class ModuleText extends Component<Props> {
    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @returns {void}
     */
    componentDidMount(): void {
        this.bindDialogOpen();
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * @returns {void}
     */
    componentDidUpdate(): void {
        this.unbindDialogOpen();
        this.bindDialogOpen();
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @returns {void}
     */
    componentWillUnmount(): void {
        this.unbindDialogOpen();
    }

    /**
     * Open broadcast dialog.
     *
     * @private
     * @param {object} event - Synthetic react event
     * @returns {void}
     */
    openDialog = (event: Event): void => {
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
    bindDialogOpen(): void {
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
    unbindDialogOpen(): void {
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
    render(): ReactNode {
        const {
            children,
            className,
            content,
            hasColumns2 = true,
            isCentered = false,
            itemType
        } = this.props;

        if (!isValidArray(content?.text)) {
            return null;
        }

        const componentClassName = classnames('m-text', className);
        const componentTextBlockClassName = classnames('m-text__block');

        return (
            <View className={componentClassName} {...{ itemType }}>
                {content.text.map((value) => {
                    const {
                        content: valueContent,
                        headline,
                        person,
                        small
                    } = value;

                    return (
                        <View
                            key={shortid.generate()}
                            className={componentTextBlockClassName}
                        >
                            <ModuleTextHeadline text={headline} />
                            <ModuleTextContent
                                content={valueContent}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                            <ModuleTextPerson
                                content={person}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                            <ModuleTextContent
                                content={small}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                        </View>
                    );
                })}
                <ModuleTextTime content={content} />
                <ModuleTextLink content={content} />
                {children}
            </View>
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

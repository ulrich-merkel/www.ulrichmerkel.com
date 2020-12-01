/* eslint-disable react/prefer-stateless-function */
/**
 * Rendering a form html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';
import { getItemTypeAttributes } from '../utils/micro-data';

type Props = {
    acceptCharset?: string;
    action: string;
    children?: ReactNode;
    className?: string;
    id?: string;
    itemProp?: string;
    itemType?: string;
    method?: string;
    noValidate?: boolean;
    onReset?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    role?: string;
};

/**
 * Class representing a html form element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
 * @property {string} props.action - The form action attribute
 * @property {string} props.id - The form id attribute
 * @property {string} [props.acceptCharset='utf-8'] - The form action attribute
 * @property {string} [props.className] - The form css class names, will be merged into component default classNames
 * @property {string} [props.itemProp='potentialAction'] - The form itemProp attribute
 * @property {string} [props.itemType='http://schema.org/CommunicateAction'] - The form itemType attribute
 * @property {string} [props.method='post'] - The form method attribute
 * @property {string} [props.role='form'] - The form role attribute
 * @property {Function} [props.onReset=Function.prototype] - The form reset handler function
 * @property {Function} [props.onSubmit=Function.prototype] - The form submit handler function
 */
export class Form extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render(): ReactNode {
        const {
            acceptCharset = 'utf-8',
            action,
            children,
            className,
            id,
            itemProp = 'potentialAction',
            itemType = 'http://schema.org/CommunicateAction',
            method = 'post',
            noValidate = true,
            onReset = noop,
            onSubmit = noop,
            role = 'form'
        } = this.props;

        const composedClassName = classnames('m-form', className);
        const itemTypeAttributes = getItemTypeAttributes(itemType);

        return (
            <form
                className={composedClassName}
                {...itemTypeAttributes}
                {...{
                    acceptCharset,
                    action,
                    id,
                    itemProp,
                    method,
                    noValidate,
                    onReset,
                    onSubmit,
                    role
                }}
            >
                {children}
            </form>
        );
    }
}

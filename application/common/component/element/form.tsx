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

type Props = {
    acceptCharset?: string;
    action: string;
    children?: ReactNode;
    className?:string;
    id: string;
    itemProp?: string;
    itemType?: string;
    method?: string;
    onReset?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    role?: string;
};

/**
 * Class representing a component to return a single react child element.
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
    render() {
        const {
            acceptCharset = 'utf-8',
            action,
            className,
            id,
            itemProp = 'potentialAction',
            itemType = 'http://schema.org/CommunicateAction',
            method = 'post',
            onReset = noop,
            onSubmit = noop,
            role = 'form',
            ...otherProps
        } = this.props;

        const composedClassName = classnames('m-form', className);

        return (
            <form
                className={composedClassName}
                noValidate
                itemScope
                {...{
                    acceptCharset,
                    action,
                    id,
                    itemProp,
                    itemType,
                    method,
                    role,
                    onSubmit,
                    onReset
                }}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            />
        );
    }
}

/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
/**
 * Rendering a form html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Class representing a component to return a single react child element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
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
class ElementForm extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            acceptCharset,
            action,
            className,
            id,
            itemProp,
            itemType,
            method,
            role,
            onSubmit,
            onReset,
            ...otherProps
        } = this.props;

        const composedClassName = classnames(
            'm-form',
            className
        );

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

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ElementForm.propTypes = {
    action: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    acceptCharset: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemProp: PropTypes.string,
    itemType: PropTypes.string,
    method: PropTypes.string,
    onReset: PropTypes.func,
    onSubmit: PropTypes.func,
    role: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ElementForm.defaultProps = {
    acceptCharset: 'utf-8',
    itemProp: 'potentialAction',
    itemType: 'http://schema.org/CommunicateAction',
    method: 'post',
    onReset: Function.prototype,
    onSubmit: Function.prototype,
    role: 'form'
};

export default ElementForm;

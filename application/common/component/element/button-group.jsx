/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
/**
 * Rendering a button component with a wrapper to be used within a form.
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
 * @requires common/component/element/button
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from './button';

/**
 * Class representing a component to return a single react child element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
 * @extends React.Component
 * @property {string} props.id - The button id attribute
 * @property {string} props.name - The button name attribute
 * @property {string} [props.btnClassName] - The button css class names - will be merged into button default classNames
 * @property {string} [props.className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [props.isDisabled=false] - Whether the button is disabled displayed or not
 * @property {boolean} [props.isPending=false] - Whether the button is pending displayed (form is processing) or not
 * @property {boolean} [props.isPrimary=false] - Whether the button is primary displayed or not
 * @property {boolean} [props.isSecondary=false] - Whether the button is secondary displayed or not
 * @property {string} [props.label=''] - The button label attribute
 * @property {string} [props.title=''] - The button title attribute
 * @property {string} [props.type='button'] - The button type attribute
 */
class ElementButtonGroup extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            btnClassName,
            className,
            id,
            isDisabled,
            isPending,
            isPrimary,
            isSecondary,
            label,
            name,
            title,
            type,
            ...otherProps
        } = this.props;

        const composedGroupClassName = classnames(
            'm-form__group',
            className
        );

        const composedButtonClassName = classnames({
            'is-pending': isPending
        }, 'm-form__btn', btnClassName);

        const isButtonPrimary = isPrimary ? { isPrimary: true } : null;
        const isButtonSecondary = isSecondary ? { isSecondary: true } : null;
        const isButtonDisabled = isDisabled ? { isDisabled: true } : null;

        return (
            <div className={composedGroupClassName} {...otherProps}>
                <Button
                    {...isButtonPrimary}
                    {...isButtonSecondary}
                    {...isButtonDisabled}
                    {...{ id, type, name, title }}
                    className={composedButtonClassName}
                >
                    {label}
                </Button>
            </div>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ElementButtonGroup.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    btnClassName: PropTypes.string, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isDisabled: PropTypes.bool,
    isPending: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    label: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
ElementButtonGroup.defaultProps = {
    isDisabled: false,
    isPending: false,
    isPrimary: false,
    isSecondary: false,
    label: '',
    title: '',
    type: 'button'
};

export default ElementButtonGroup;

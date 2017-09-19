/* eslint-disable react/prefer-stateless-function, immutable/no-mutation, immutable/no-this */
/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
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
 */
class ElementButtonGroup extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {

        const {
            id,
            name,
            label,
            type,
            title,
            className,
            btnClassName,
            isPrimary,
            isSecondary,
            isDisabled,
            isPending,
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
 * @property {string} id - The button id attribute
 * @property {string} name - The button name attribute
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {string} [type='button'] - The button type attribute
 * @property {string} [label=''] - The button label attribute
 * @property {string} [title=''] - The button title attribute
 * @property {string} [btnClassName] - The button css class names - will be merged into button default classNames
 * @property {boolean} [isPrimary=false] - Whether the button is primary displayed or not
 * @property {boolean} [isSecondary=false] - Whether the button is secondary displayed or not
 * @property {boolean} [isDisabled=false] - Whether the button is disabled displayed or not
 * @property {boolean} [isPending=false] - Whether the button is pending displayed (form is processing) or not
 */
ElementButtonGroup.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    type: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    btnClassName: PropTypes.string, // eslint-disable-line react/require-default-props
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isPending: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementButtonGroup.propTypes
 */
ElementButtonGroup.defaultProps = {
    type: 'button',
    label: '',
    title: '',
    isPrimary: false,
    isSecondary: false,
    isDisabled: false,
    isPending: false
};

export default ElementButtonGroup;

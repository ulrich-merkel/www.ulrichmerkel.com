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
 * @version 0.0.2
 *
 * @requires react
 * @requires react-router
 * @requires classnames
 *
 * @changelog
 * - 0.0.2 improved api
 * - 0.0.1 basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 * import Button from './button';
 *
 * <Button className='additional-css' to='contact' title='Lorem ipsum' isPrimary isLarge>
 *     Show Contact Page
 * </Button>
 *
 * // <a type="button" class="c-btn c-btn--primary c-btn--large additional-css" title="Lorem ipsum" href="contact">
 * //     <span class="c-btn__label">Show Contact Page</span>
 * // </a>
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function ElementButton(props) {

    const {
        componentType,
        className,
        classNameLabel,
        to,
        type,
        title,
        role,
        isPrimary,
        isSecondary,
        isLarge,
        isSmall,
        isDisabled,
        isLabelHidden,
        children,
        ...otherProps
    } = props;

    const componentLabelClassName = classnames(
        'c-btn__label',
        classNameLabel,
        {
            'is-visually-hidden': isLabelHidden
        }
    );

    const componentClassName = classnames(
        'c-btn',
        className,
        {
            'c-btn--primary': isPrimary,
            'c-btn--secondary': isSecondary,
            'c-btn--large': isLarge,
            'c-btn--small': isSmall,
            'is-disabled': isDisabled
        }
    );

    let ComponentType = componentType;

    if (to) {
        ComponentType = Link;
    }

    const disabledAttr = isDisabled ? { disabled: 'disabled' } : null;

    return (
        <ComponentType
            className={componentClassName}
            {...{ role, type, title, to }}
            {...disabledAttr}
            {...otherProps}
        >
            <span className={componentLabelClassName}>
                {children}
            </span>
        </ComponentType>
    );

}


/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [componentType='button'] The component element type used for React.createElement
 * @property {string} [className] The component css class names - will be merged into component default classNames
 * @property {string} [classNameLabel] The component label child css class names - will be merged into component default classNames
 * @property {string} [to] The react-router url target
 * @property {string} [type='button'] The element type attribute
 * @property {string} [title=''] The element title attribute
 * @property {string} [role='button'] The element role attribute
 * @property {boolean} [isPrimary] Whether the button is primary styled or not
 * @property {boolean} [isSecondary] Whether the button is secondary styled or not
 * @property {boolean} [isLarge] Whether the button is large styled or not
 * @property {boolean} [isSmall] Whether the button is small styled or not
 * @property {boolean} [isDisabled] Whether the button has disabled classed and attributes or not
 * @property {boolean} [isLabelHidden] Whether the label text is visually hidden or not
 * @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
 */
ElementButton.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    classNameLabel: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    role: PropTypes.string,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isLarge: PropTypes.bool,
    isSmall: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLabelHidden: PropTypes.bool,
    children: PropTypes.node
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementButton.propTypes
 */
ElementButton.defaultProps = {
    componentType: 'button',
    type: 'button',
    title: '',
    role: 'button'
};

export default ElementButton;

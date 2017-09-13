/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires react-router
 * @requires classnames
 *
 * @changelog
 * - 0.0.3 Improved propTypes ordering, renamed componentType to htmlElement
 * - 0.0.2 Improved api
 * - 0.0.1 Basic functions and structure
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
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ElementButton(props) {
    const {
        htmlElement,
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
        isClear,
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
            'c-btn--clear': isClear,
            'is-disabled': isDisabled
        }
    );

    const HtmlElement = to ? Link : htmlElement;
    const htmlElementType = !to ? type : null;
    const disabledAttr = isDisabled ? { disabled: 'disabled' } : null;

    return (
        <HtmlElement
            className={componentClassName}
            type={htmlElementType}
            {...{ role, title, to }}
            {...disabledAttr}
            {...otherProps}
        >
            <span className={componentLabelClassName}>
                {children}
            </span>
        </HtmlElement>
    );
}


/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 * @property {string} [classNameLabel] - The component label child css class names, will be merged into component default classNames
 * @property {string} [htmlElement='button'] - The component element type used for React.createElement
 * @property {boolean} [isClear=false] - Clear all basic stylings or not
 * @property {boolean} [isDisabled=false] - Whether the button has disabled classed and attributes or not
 * @property {boolean} [isLabelHidden=false] - Whether the label text is visually hidden or not
 * @property {boolean} [isLarge=false] - Whether the button is large styled or not
 * @property {boolean} [isPrimary=false] - Whether the button is primary styled or not
 * @property {boolean} [isSecondary=false] - Whether the button is secondary styled or not
 * @property {boolean} [isSmall=false] - Whether the button is small styled or not
 * @property {string} [role='button'] - The element role attribute
 * @property {string} [title=''] - The element title attribute
 * @property {string} [to=''] - The react-router url target
 * @property {string} [type='button'] - The element type attribute
 */
ElementButton.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    classNameLabel: PropTypes.string, // eslint-disable-line react/require-default-props
    htmlElement: PropTypes.string,
    isClear: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isLabelHidden: PropTypes.bool,
    isLarge: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSmall: PropTypes.bool,
    role: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string, // eslint-disable-line react/require-default-props
    type: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementButton.propTypes
 */
ElementButton.defaultProps = {
    htmlElement: 'button',
    isClear: false,
    isDisabled: false,
    isLabelHidden: false,
    isLarge: false,
    isPrimary: false,
    isSmall: false,
    isSecondary: false,
    role: 'button',
    title: '',
    type: 'button'
};

export default ElementButton;

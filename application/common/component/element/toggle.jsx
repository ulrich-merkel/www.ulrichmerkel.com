/* eslint-disable immutable/no-mutation */
/**
 * Rendering a small html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {string} [props.className=''] - The component css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='nav'] - The component element type used for React.createElement
 * @returns {ReactElement} React component markup
 */
export function Toggle(props) {
    const {
        htmlElement: ComponentType,
        checked,
        className,
        id,
        label,
        onChange,
        ...otherProps
    } = props;

    const composedClassName = classnames('c-toggle', className);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ComponentType className={composedClassName} {...otherProps}>
            <input
                className="c-toggle__input"
                type="checkbox"
                id={id}
                {...{ checked, onChange }}
            />
            <label className="c-toggle__label" htmlFor={id}>
                <span className="c-toggle__text">{label}</span>
            </label>
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
Toggle.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    htmlElement: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
Toggle.defaultProps = {
    checked: false,
    className: '',
    htmlElement: 'div',
    id: 'toggle',
    label: '',
    onChange: Function.prototype
};

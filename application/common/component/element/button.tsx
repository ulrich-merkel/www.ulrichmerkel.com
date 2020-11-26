/**
 * Rendering a html button or react-router navlink.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @example <caption>Example usage (jsx)</caption>
 * import { Button } from './button';
 *
 * <Button className='additional-css' to='contact' title='Lorem ipsum' isPrimary isLarge>
 *     Show Contact Page
 * </Button>
 *
 * // <a type="button" class="c-btn c-btn--primary c-btn--large additional-css" title="Lorem ipsum" href="contact">
 * //     <span class="c-btn__label">Show Contact Page</span>
 * // </a>
 */
import {
    default as React,
    FunctionComponent,
    MouseEvent,
    ReactNode
} from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { noop } from 'lodash';

import { getTestIdAttributes } from '../utils/test-id';

type Props = {
    children?: ReactNode;
    className?: string;
    classNameLabel?: string;
    htmlElement?: string;
    isClear?: boolean;
    isDisabled?: boolean;
    isLabelHidden?: boolean;
    isLarge?: boolean;
    isPrimary?: boolean;
    isSecondary?: boolean;
    isSmall?: boolean;
    onClick?: (
        event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => void;
    role?: string;
    testId?: string;
    title?: string;
    to?: string;
    type?: string;
};

/**
 * Function representing a html button element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.classNameLabel] - The component label child css class names, will be merged into component default classNames
 * @param {string} [props.htmlElement='button'] - The component element type used for React.createElement
 * @param {boolean} [props.isClear=false] - Clear all basic stylings or not
 * @param {boolean} [props.isDisabled=false] - Whether the button has disabled classed and attributes or not
 * @param {boolean} [props.isLabelHidden=false] - Whether the label text is visually hidden or not
 * @param {boolean} [props.isLarge=false] - Whether the button is large styled or not
 * @param {boolean} [props.isPrimary=false] - Whether the button is primary styled or not
 * @param {boolean} [props.isSecondary=false] - Whether the button is secondary styled or not
 * @param {boolean} [props.isSmall=false] - Whether the button is small styled or not
 * @param {string} [props.role='button'] - The element role attribute
 * @param {string} [props.testId] - Id for test queries
 * @param {string} [props.title=''] - The element title attribute
 * @param {string} [props.to=''] - The react-router url target
 * @param {string} [props.type='button'] - The element type attribute
 * @returns {ReactElement} React component markup
 */
export const Button: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        classNameLabel,
        htmlElement = 'button',
        isClear = false,
        isDisabled = false,
        isLabelHidden = false,
        isLarge = false,
        isPrimary = false,
        isSecondary = false,
        isSmall = false,
        onClick = noop,
        role = 'button',
        testId,
        title = '',
        to,
        type = 'button',
        ...otherProps
    } = props;

    const componentLabelClassName = classnames('c-btn__label', classNameLabel, {
        'is-visually-hidden': isLabelHidden
    });
    const componentClassName = classnames('c-btn', className, {
        'c-btn--primary': isPrimary,
        'c-btn--secondary': isSecondary,
        'c-btn--large': isLarge,
        'c-btn--small': isSmall,
        'c-btn--clear': isClear,
        'is-disabled': isDisabled
    });

    const HtmlElement = to ? NavLink : htmlElement;
    const htmlElementType = !to ? type : null;
    const disabledAttributes = isDisabled ? { disabled: 'disabled' } : null;
    const testIdAttributes = getTestIdAttributes(testId);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement
            className={componentClassName}
            type={htmlElementType}
            {...{ onClick, role, title, to }}
            {...disabledAttributes}
            {...testIdAttributes}
            {...otherProps}
        >
            <span className={componentLabelClassName}>{children}</span>
        </HtmlElement>
    );
};

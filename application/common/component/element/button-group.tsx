/* eslint-disable react/prefer-stateless-function */
/**
 * Rendering a button component with a wrapper to be used within a form.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component } from 'react';
import classnames from 'classnames';

import { Button } from './button';

type Props = {
    btnClassName?: string;
    className?: string;
    id: string;
    isDisabled?: boolean;
    isPending?: boolean;
    isPrimary?: boolean;
    isSecondary?: boolean;
    label?: string;
    name: string;
    title?: string;
    type?: string;
};

/**
 * Class representing a form button group.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
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
export class ButtonGroup extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            btnClassName,
            className,
            id,
            isDisabled = false,
            isPending = false,
            isPrimary = false,
            isSecondary = false,
            label = '',
            name,
            title = '',
            type = 'button',
            ...otherProps
        } = this.props;

        const composedGroupClassName = classnames('m-form__group', className);
        const composedButtonClassName = classnames(
            {
                'is-pending': isPending
            },
            'm-form__btn',
            btnClassName
        );

        const isButtonPrimary = isPrimary ? { isPrimary: true } : null;
        const isButtonSecondary = isSecondary ? { isSecondary: true } : null;
        const isButtonDisabled = isDisabled ? { isDisabled: true } : null;

        return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div className={composedGroupClassName} {...otherProps}>
                <Button
                    {...isButtonPrimary}
                    {...isButtonSecondary}
                    {...isButtonDisabled}
                    {...{
                        id,
                        type,
                        name,
                        title
                    }}
                    className={composedButtonClassName}
                >
                    {label}
                </Button>
            </div>
        );
    }
}

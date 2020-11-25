/**
 * Rendering a small html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';

import { Input } from './input';
import { Label } from './label';
import { isValidString } from '../../utils/string';

type Props = {
    checked?: boolean;
    className?: string;
    htmlElement?: keyof JSX.IntrinsicElements;
    id?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    testId?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const Toggle: FunctionComponent<Props> = (props) => {
    const {
        checked = false,
        className,
        htmlElement: HtmlElement = 'div',
        id = 'toggle',
        label = '',
        onChange = noop,
        testId,
        ...otherProps
    } = props;

    const composedClassName = classnames('c-toggle', className);
    const testIdAttr = isValidString(testId)
        ? {
              'data-testid': testId
          }
        : null;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HtmlElement className={composedClassName} {...otherProps}>
            <Input
                className="c-toggle__input"
                id={id}
                name={id}
                type="checkbox"
                {...{ checked, onChange }}
                {...testIdAttr}
            />
            <Label className="c-toggle__label" htmlFor={id}>
                <span className="c-toggle__text">{label}</span>
            </Label>
        </HtmlElement>
    );
};

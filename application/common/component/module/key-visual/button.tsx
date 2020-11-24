/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';
import { noop } from 'lodash';

import { Button } from '../../element/button';

type Props = {
    label?: string;
    onClick?: () => void;
    title?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleKeyVisualButton: FunctionComponent<Props> = (props) => {
    const { onClick = noop, label, title } = props;

    if (!label || !title) {
        return null;
    }

    const componentButtonClassName = classnames(
        'm-key-visual__button--down',
        'c-font-icon--chevron-down'
    );

    return (
        <Button
            className={componentButtonClassName}
            onClick={onClick}
            title={title}
            isLabelHidden
        >
            {label}
        </Button>
    );
}

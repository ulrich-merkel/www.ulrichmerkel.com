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

import { P } from '../../element/paragraph';

type Props = {
    className?: string;
    text?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleArticleLead: FunctionComponent<Props> = (props) => {
    const { text = '', className } = props;

    if (!text) {
        return null;
    }

    const composedClassName = classnames(className);

    return (
        <P
            className={composedClassName}
            isCentered
            itemProp="alternativeHeadline"
        >
            <strong>{text}</strong>
        </P>
    );
};

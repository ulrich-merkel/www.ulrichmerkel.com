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

import { Headline } from '../../element/headline';

type Props = {
    text?: string;
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.text=''] - The headline text
 * @returns {ReactElement} React component markup
 */
export const ModuleTextHeadline: FunctionComponent<Props> = (props) => {
    const { text = '' } = props;

    if (!text) {
        return null;
    }

    return (
        <Headline className="m-text__headline" htmlElement="h3">
            {text}
        </Headline>
    );
}

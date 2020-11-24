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

import { Headline } from '../../element/headline';

type Props = {
    text?: string;
    isMain?: boolean;
    className?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleArticleHeadline: FunctionComponent<Props> = (props) => {
    const { text = '', isMain = false, className } = props;

    if (!text) {
        return null;
    }

    const composedClassName = classnames(className);
    const htmlElement = isMain ? 'h1' : 'h2';

    return (
        <Headline
            className={composedClassName}
            itemProp="headline"
            htmlElement={htmlElement}
        >
            {text}
        </Headline>
    );
};

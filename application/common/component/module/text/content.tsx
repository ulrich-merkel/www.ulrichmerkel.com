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
import shortid from 'shortid';

import { P } from '../../element/paragraph';

type Props = {
    content?: string[];
    hasColumns2?: boolean;
    isCentered?: boolean;
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array<string>} [props.content] - The content's text
 * @param {boolean} [props.hasColumns2=false] - Whether the component text should be clusted in columns via css or not
 * @param {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @returns {ReactElement|null} React component markup
 */
export const ModuleTextContent: FunctionComponent<Props> = (props) => {
    const { content, hasColumns2 = false, isCentered = false } = props;

    if (!Array.isArray(content) || !content.length) {
        return null;
    }

    const componentTextContentClassName = classnames(
        {
            'has-columns--2': hasColumns2,
            'is-centered': isCentered
        },
        'm-text__content'
    );

    return (
        <div className={componentTextContentClassName}>
            {content.map(function mapContent(html) {
                return (
                    <P
                        key={shortid.generate()}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                );
            })}
        </div>
    );
}

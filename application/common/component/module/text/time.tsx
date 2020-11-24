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

type Props = {
    content?: {
        timeStart?: string;
        timeEnd?: string;
    };
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The time content's text
 * @returns {ReactElement|null} React component markup
 */
export const ModuleTextTime: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (!content || (!content.timeStart && !content.timeEnd)) {
        return null;
    }

    const { timeStart, timeEnd } = content;

    const componentTextContentClassName = classnames(
        'm-text__time',
        'is-centered'
    );

    return (
        <div className={componentTextContentClassName}>
            {timeStart && <time className="c-time">{timeStart}</time>}
            {timeStart && timeEnd && (
                <span className="c-time--separator">-</span>
            )}
            {timeEnd && <time className="c-time">{timeEnd}</time>}
        </div>
    );
};

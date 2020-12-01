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

import { Time } from '../../element/time';
import { View } from '../../element/view';

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
        <View className={componentTextContentClassName}>
            {timeStart && <Time itemProp="startDate">{timeStart}</Time>}
            {timeStart && timeEnd && (
                <span className="c-time--separator">-</span>
            )}
            {timeEnd && <Time itemProp="endDate">{timeEnd}</Time>}
        </View>
    );
};

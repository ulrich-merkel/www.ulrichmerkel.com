/* eslint-disable immutable/no-mutation */
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
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The time content's text
 * @returns {ReactElement|null} React component markup
 */
export function ModuleTextTime(props) {
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
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ModuleTextTime.propTypes = {
    content: PropTypes.shape({
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string
    })
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ModuleTextTime.defaultProps = {
    content: {}
};

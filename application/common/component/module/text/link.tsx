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

import { A } from '../../element/a';

type Props = {
    content?: {
        linkTo: string;
        linkLabel: string;
        linkTitle: string;
    };
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The link content's text
 * @returns {ReactElement|null} React component markup
 */
export const ModuleTextLink: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (!content) {
        return null;
    }

    const { linkTo, linkLabel, linkTitle } = content;

    if (!linkTo || !linkLabel) {
        return null;
    }

    const componentTextContentClassName = classnames(
        'm-text__link',
        'is-centered'
    );

    return (
        <div className={componentTextContentClassName}>
            <A to={linkTo} title={linkTitle}>
                <i aria-hidden="true" className="c-font-icon--earth" />
                {linkLabel}
            </A>
        </div>
    );
};

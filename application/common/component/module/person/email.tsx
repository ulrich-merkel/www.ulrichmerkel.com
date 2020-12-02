/**
 * Es6 module for person's email.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';

import { isValidString } from '../../../utils/string';
import { P } from '../../element/paragraph';

type Props = {
    content?: {
        email?: string;
    };
};

/**
 * Function representing a email entry for person.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModulePersonEmail: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (!isValidString(content?.email)) {
        return null;
    }

    return (
        <P className="m-person__email">
            <abbr title="E-Mail address">E.</abbr>{' '}
            <a href={`mailto:${content.email}`} itemProp="email">
                {content.email}
            </a>
        </P>
    );
};

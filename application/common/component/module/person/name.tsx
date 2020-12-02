/**
 * Es6 module for person's name.
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
        name?: string;
    };
};

/**
 * Function representing a name entry for person.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModulePersonName: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (!isValidString(content?.name)) {
        return null;
    }

    return (
        <P className="m-person__name">
            <strong>{content.name}</strong>
        </P>
    );
};

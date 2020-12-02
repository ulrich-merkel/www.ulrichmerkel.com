/**
 * Es6 module for person website.
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
        website?: string;
    };
};

/**
 * Function representing a website entry for person.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModulePersonWebsite: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (!isValidString(content?.website)) {
        return null;
    }

    return (
        <P className="m-person__website">
            <abbr title="Website">W.</abbr>{' '}
            <a href={`${content.website}`}>{content.website}</a>
        </P>
    );
};

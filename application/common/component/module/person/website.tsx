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
import { A } from '../../element/a';
import { Abbr } from '../../element/abbr';
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
            <Abbr title="Website">W.</Abbr>{' '}
            <A href={content.website} title="Open website in new tab">
                {content.website}
            </A>
        </P>
    );
};

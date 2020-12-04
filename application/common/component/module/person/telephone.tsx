/**
 * Es6 module for person's telephone.
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
        phone?: string;
        phoneNumbers?: string;
    };
};

/**
 * Function representing a telephone entry for person.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModulePersonTelephone: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (
        !isValidString(content?.phone) ||
        !isValidString(content?.phoneNumbers)
    ) {
        return null;
    }

    return (
        <P className="m-person__phone">
            <Abbr title="Phonenumber">P.</Abbr>{' '}
            <A to={`tel:${content.phoneNumbers}`} itemProp="telephone">
                {content.phone}
            </A>
        </P>
    );
};

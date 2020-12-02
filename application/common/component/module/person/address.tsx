/**
 * Es6 module for person's address.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';

import { isValidString } from '../../../utils/string';

type Props = {
    content?: {
        streetAddress?: string;
        postalCode?: string;
        locality?: string;
    };
};

/**
 * Function representing an address entry for person.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModulePersonAddress: FunctionComponent<Props> = (props) => {
    const { content } = props;

    if (
        !isValidString(content?.streetAddress) ||
        !isValidString(content?.postalCode) ||
        !isValidString(content?.locality)
    ) {
        return null;
    }

    return (
        <address
            className="m-person__address c-type--address"
            itemProp="address"
            itemScope
            itemType="http://schema.org/Address"
        >
            <span
                className="m-person__street-address"
                itemProp="street-address"
            >
                {content.streetAddress}
            </span>
            <span className="m-person__postal-code" itemProp="postal-code">
                {content.postalCode}
            </span>
            <span className="m-person__locality" itemProp="locality">
                {content.locality}
            </span>
        </address>
    );
};

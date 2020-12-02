/**
 * Es6 module for a cornerstone headline.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';

import { isValidString } from '../../../utils/string';
import { ListItem } from '../../element/list-item';
import { Headline } from '../../element/headline';

type Props = {
    headline?: string;
};

/**
 * Function representing a cornerstone headline.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleCornerstoneHeadline: FunctionComponent<Props> = (props) => {
    const { headline } = props;

    if (!isValidString(headline)) {
        return null;
    }

    return (
        <ListItem className="m-cornerstone__item--center">
            <Headline className="m-cornerstone__headline" htmlElement="h3">
                {headline}
            </Headline>
        </ListItem>
    );
};

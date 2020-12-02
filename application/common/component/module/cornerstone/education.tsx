/**
 * Es6 module for a cornerstone education block.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import shortid from 'shortid';

import { isValidArray } from '../../../utils/array';
import { ModuleCornerstoneItemEducation } from './item-education';

type Props = {
    list?: {
        description?: string[];
        headline?: string;
        lead?: string;
        offset?: string;
        place?: {
            name?: string;
            streetAddress?: string;
            addressLocality?: string;
            sameAs?: string;
        };
        timeEnd?: string;
        timeStart?: string;
    }[];
};

/**
 * Function representing a cornerstone education block.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {Array<ReactElement>} React component markup
 */
export const ModuleCornerstoneEducation: FunctionComponent<Props> = (props) => {
    const { list } = props;

    if (!isValidArray(list)) {
        return null;
    }

    return list.map(function fnMap(value, index) {
        const {
            description,
            headline,
            lead,
            offset,
            place,
            timeEnd,
            timeStart
        } = value;

        return (
            <ModuleCornerstoneItemEducation
                key={shortid.generate()}
                cssModifier={index % 2 === 0 ? 'left' : 'right'}
                {...{
                    description,
                    headline,
                    lead,
                    offset,
                    place,
                    timeEnd,
                    timeStart
                }}
            />
        );
    });
};

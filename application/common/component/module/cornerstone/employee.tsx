/**
 * Es6 module for a cornerstone employee block.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import shortid from 'shortid';

import { isValidArray } from '../../../utils/array';
import { ModuleCornerstoneItemEmployee } from './item-employee';

type Props = {
    list?: {
        description?: string[];
        headline?: string;
        lead?: string;
        offset?: string;
        timeEnd?: string;
        timeStart?: string;
    }[];
};

/**
 * Function representing a cornerstone employee block.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {Array<ReactElement>} React component markup
 */
export const ModuleCornerstoneEmployee: FunctionComponent<Props> = (props) => {
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
            timeEnd,
            timeStart
        } = value;

        return (
            <ModuleCornerstoneItemEmployee
                key={shortid.generate()}
                cssModifier={index % 2 === 0 ? 'left' : 'right'}
                {...{
                    description,
                    headline,
                    lead,
                    offset,
                    timeEnd,
                    timeStart
                }}
            />
        );
    });
};

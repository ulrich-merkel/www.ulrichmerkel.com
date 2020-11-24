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

import { Headline } from '../../element/headline';
import { P } from '../../element/paragraph';
import { Small } from '../../element/small';

type Props = {
    headline?: string;
    lead?: string;
    creator?: string;
    publisher?: string;
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleReadingItem: FunctionComponent<Props> = (props) => {
    const { headline = '', lead = '', creator = '', publisher = '' } = props;

    return (
        <li
            className="m-list__item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Book"
        >
            <div className="c-reading">
                <Headline
                    className="c-reading__name"
                    itemProp="name"
                    htmlElement="h3"
                >
                    {headline}
                </Headline>
                <P className="c-reading__description" itemProp="alternateName">
                    {lead}
                </P>
                <Small className="c-reading__source" itemProp="creator">
                    <span className="c-reading__source-creator">{creator}</span>
                    <em className="c-reading__source-publisher">{publisher}</em>
                </Small>
            </div>
        </li>
    );
}

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
import classnames from 'classnames';
import shortid from 'shortid';

import { Headline } from '../../element/headline';
import { P } from '../../element/paragraph';
import { Meta } from '../../element/meta';
import { isValidArray } from '../../../utils/array';
import { getItemTypeAttributes } from '../../utils/micro-data';

type Props = {
    cssModifier?: string;
    description?: string[];
    headline?: string;
    lead?: string;
    offset?: string;
    place?: Record<string, unknown>;
    timeEnd?: string;
    timeStart?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleCornerstoneItemEducation: FunctionComponent<Props> = (
    props
) => {
    const {
        cssModifier,
        description,
        headline,
        lead,
        offset,
        place,
        timeEnd,
        timeStart,
        ...otherProps
    } = props;

    const composedListItemClassName = classnames(
        cssModifier
            ? `m-cornerstone__item--${cssModifier}`
            : 'm-cornerstone__item',
        offset ? `has-offset--${offset}` : ''
    );

    return (
        <li
            className={composedListItemClassName}
            itemProp="itemListElement"
            {...getItemTypeAttributes('https://schema.org/EducationEvent')}
            {...otherProps}
        >
            <div className="m-cornerstone__description">
                <div className="m-cornerstone__description-content">
                    <Headline
                        className="m-cornerstone__headline"
                        itemProp="name"
                        htmlElement="h4"
                    >
                        {headline}
                    </Headline>
                    <P
                        className="m-cornerstone__company"
                        itemProp="alternateName"
                    >
                        <strong>{lead}</strong>
                    </P>
                    <P className="m-cornerstone__time">
                        (
                        <time className="c-time" itemProp="startDate">
                            {timeStart}
                        </time>{' '}
                        -{' '}
                        <time className="c-time" itemProp="endDate">
                            {timeEnd}
                        </time>
                        )
                    </P>
                    {isValidArray(description) &&
                        description.map(function fnMap(text) {
                            /**
                             * DangerouslySetInnerHTML due to reacts double escaping. Otherwise html elements
                             * are not possible to be set via translation strings.
                             *
                             * @see {@link https://facebook.github.io/react/tips/dangerously-set-inner-html.html}
                             */
                            return (
                                <P
                                    key={shortid.generate()}
                                    className="m-cornerstone__text"
                                    itemProp="description"
                                    dangerouslySetInnerHTML={{ __html: text }}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="m-cornerstone__bubble" />
            <div
                hidden
                itemProp="location"
                {...getItemTypeAttributes('https://schema.org/Place')}
            >
                <Meta itemProp="name" content={place.name} />
                <div
                    itemProp="address"
                    {...getItemTypeAttributes(
                        'https://schema.org/PostalAddress'
                    )}
                >
                    <Meta
                        itemProp="streetAddress"
                        content={place.streetAddress}
                    />
                    <Meta
                        itemProp="addressLocality"
                        content={place.addressLocality}
                    />
                    <Meta itemProp="sameAs" content={place.sameAs} />
                </div>
            </div>
        </li>
    );
};

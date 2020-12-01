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
import { ListItem } from '../../element/list-item';
import { P } from '../../element/paragraph';
import { Meta } from '../../element/meta';
import { View } from '../../element/view';
import { isValidArray } from '../../../utils/array';

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
        timeStart
    } = props;

    const composedListItemClassName = classnames(
        cssModifier
            ? `m-cornerstone__item--${cssModifier}`
            : 'm-cornerstone__item',
        offset ? `has-offset--${offset}` : ''
    );

    return (
        <ListItem
            className={composedListItemClassName}
            itemProp="itemListElement"
            itemType="https://schema.org/EducationEvent"
        >
            <View className="m-cornerstone__description">
                <View className="m-cornerstone__description-content">
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
                </View>
            </View>
            <View className="m-cornerstone__bubble" />
            <View
                hidden
                itemProp="location"
                itemType="https://schema.org/Place"
            >
                <Meta itemProp="name" content={place.name} />
                <View
                    itemProp="address"
                    itemType="https://schema.org/PostalAddress"
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
                </View>
            </View>
        </ListItem>
    );
};

/* eslint-disable immutable/no-mutation, react/jsx-indent */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/headline
 * @requires common/component/element/paragraph
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import Headline from '../../element/headline';
import P from '../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleCornerstoneItemEducation(props) {
    const {
        cssModifier,
        offset,
        headline,
        lead,
        timeStart,
        timeEnd,
        description,
        place,
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
            itemScope
            itemType="https://schema.org/EducationEvent"
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
                    {description.map((text) => {
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
                itemScope
                itemType="https://schema.org/Place"
            >
                <meta itemProp="name" content={place.name} />
                <div
                    itemProp="address"
                    itemScope
                    itemType="http://schema.org/PostalAddress"
                >
                    <meta
                        itemProp="streetAddress"
                        content={place.streetAddress}
                    />
                    <meta
                        itemProp="addressLocality"
                        content={place.addressLocality}
                    />
                    <meta itemProp="sameAs" content={place.sameAs} />
                </div>
            </div>
        </li>
    );
}

/**
 * Valiate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {string} [headline] - The item headline
 * @property {string} [lead] - The item subline
 * @property {string} [timeStart] - The item start time
 * @property {string} [timeEnd] - The item end time
 * @property {Array} [description=[]] - The items description
 * @property {object} [place={}] - The items place description
 * @property {string} [cssModifier] - The bem css modifier
 * @property {string} [offset] - The css top offset to display items nice
 */
ModuleCornerstoneItemEducation.propTypes = {
    headline: PropTypes.string, // eslint-disable-line react/require-default-props
    lead: PropTypes.string, // eslint-disable-line react/require-default-props
    timeStart: PropTypes.string, // eslint-disable-line react/require-default-props
    timeEnd: PropTypes.string, // eslint-disable-line react/require-default-props
    description: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    place: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    cssModifier: PropTypes.string, // eslint-disable-line react/require-default-props
    offset: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleCornerstoneItemEducation.propTypes
 */
ModuleCornerstoneItemEducation.defaultProps = {
    description: [],
    place: {}
};

export default ModuleCornerstoneItemEducation;

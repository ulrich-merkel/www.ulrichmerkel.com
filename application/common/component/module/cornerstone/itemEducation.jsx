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
 * @requires React
 * @requires classnames
 * @requires component/element/headline
 * @requires component/element/paragraph
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Headline from './../../element/headline';
import P from './../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] The current component props
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
        cssModifier ? `m-cornerstone__item--${cssModifier}` : 'm-cornerstone__item',
        offset ? `has-offset--${offset}` : ''
    );

    return (
        <li className={composedListItemClassName} itemProp='itemListElement' itemScope itemType='https://schema.org/EducationEvent' {...otherProps}>
            <div className='m-cornerstone__description'>
                <div className='m-cornerstone__description-content'>
                    <Headline className='m-cornerstone__headline' itemProp='name' htmlElement='h4'>
                        {headline}
                    </Headline>
                    <P className='m-cornerstone__company' itemProp='alternateName'>
                        <strong>{lead}</strong>
                    </P>
                    <P className='m-cornerstone__time'>
                        (<time className='c-time' itemProp='startDate'>{timeStart}</time> - <time className='c-time' itemProp='endDate'>{timeEnd}</time>)
                    </P>
                    {description.map((text, index) => {
                        /*
                         * DangerouslySetInnerHTML due to reacts double escaping. Otherwise html elements
                         * are not possible to be set via translation strings.
                         *
                         * @see {@link https://facebook.github.io/react/tips/dangerously-set-inner-html.html}
                         */
                        return (
                            <P
                                key={index}
                                className='m-cornerstone__text'
                                itemProp='description'
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='m-cornerstone__bubble' />
            <div hidden itemProp='location' itemScope itemType='https://schema.org/Place'>
                <meta itemProp='name' content={place.name} />
                <div itemProp='address' itemScope itemType='http://schema.org/PostalAddress'>
                    <meta itemProp='streetAddress' content={place.streetAddress} />
                    <meta itemProp='addressLocality' content={place.addressLocality} />
                    <meta itemProp='sameAs' content={place.sameAs} />
                </div>
            </div>
        </li>
    );

}

/**
 * Valiate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [headline] The item headline
 * @property {string} [lead] The item subline
 * @property {string} [timeStart] The item start time
 * @property {string} [timeEnd] The item end time
 * @property {Array} [description=[]] The items description
 * @property {Object='{}'} [place] The items place description
 * @property {string} [cssModifier] The bem css modifier
 * @property {string} [offset] The css top offset to display items nice
 */
ModuleCornerstoneItemEducation.propTypes = {
    headline: PropTypes.string,
    lead: PropTypes.string,
    timeStart: PropTypes.string,
    timeEnd: PropTypes.string,
    description: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    place: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])),
    cssModifier: PropTypes.string,
    offset: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleCornerstoneItemEducation.propTypes
 */
ModuleCornerstoneItemEducation.defaultProps = {
    description: [],
    place: {}
};

export default ModuleCornerstoneItemEducation;

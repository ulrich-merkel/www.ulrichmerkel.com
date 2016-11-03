/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires React
 * @requires classnames
 * @requires component/element/headline
 * @requires component/element/paragraph
 * @requires component/element/small
 *
 * @changelog
 * - 0.0.4 excluded headline/lead into separate component
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';

import Headline from './../../element/headline';
import P from './../../element/paragraph';
import Small from './../../element/small';

/**
 * Function representing a component to return a single react child element.
 *
 * This React component is defined as a plain JavaScript function.
 * In an ideal world, most of the components would be stateless functions,
 * because in the future we’ll also be able to make performance optimizations
 * specific to these components by avoiding unnecessary checks and memory allocations.
 * This is the recommended pattern, when possible.
 *
 * @constructor
 * @private
 * @param {Object} [props] The current component props
 * @returns {React.Element} React component markup
 */
function ComponentModuleReadingItem(props) {

    const {
        headline,
        lead,
        creator,
        publisher
    } = props;

    return (
        <li className='m-list__item' itemProp='itemListElement' itemScope itemType='https://schema.org/Book'>
            <div className='c-reading'>
                <Headline className='c-reading__name' itemProp='name' htmlElement='h3'>
                    {headline}
                </Headline>
                <P className='c-reading__description' itemProp='alternateName'>
                    {lead}
                </P>
                <Small className='c-reading__source' itemProp='creator'>
                    <span className='c-reading__source-creator'>{creator}</span>
                    <em className='c-reading__source-publisher'>{publisher}</em>
                </Small>
            </div>
        </li>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {React.Component.PropTypes}
 * @property {string} [headline] The component element headline text
 * @property {string} [lead] The component element lead text
 * @property {string} [creator] The component element author name
 */
ComponentModuleReadingItem.propTypes = {
    headline: PropTypes.string,
    lead: PropTypes.string,
    creator: PropTypes.string,
    publisher: PropTypes.string
};

export default ComponentModuleReadingItem;

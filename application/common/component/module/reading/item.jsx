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
 * @version 0.0.4
 *
 * @requires react
 * @requires common/component/element/headline
 * @requires common/component/element/paragraph
 * @requires common/component/element/small
 *
 * @changelog
 * - 0.0.4 Excluded headline/lead into separate component
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';

import Headline from './../../element/headline';
import P from './../../element/paragraph';
import Small from './../../element/small';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleReadingItem(props) {

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
 * @type {Object}
 * @property {string} [headline=''] - The component element headline text
 * @property {string} [lead=''] - The component element lead text
 * @property {string} [creator=''] - The component element author name
 * @property {string} [publisher=''] - The component element publisher name
 */
ModuleReadingItem.propTypes = {
    headline: PropTypes.string,
    lead: PropTypes.string,
    creator: PropTypes.string,
    publisher: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleReadingItem.propTypes
 */
ModuleReadingItem.defaultProps = {
    headline: '',
    lead: '',
    creator: '',
    publisher: ''
};

export default ModuleReadingItem;

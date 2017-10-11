/* eslint-disable immutable/no-mutation */
/**
* Es6 module for React Component.
* Component module React classes combine elements to
* bigger parts of the page.
*
* @file
* @module
*
* @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
* @version 0.0.3
*
* @TODO: Find better mapping solution to prevent unnecessary rendering
*
* @requires react
@requires prop-types
* @requires classnames
* @requires common/component/element/paragraph
*
* @changelog
* - 0.0.4 Excluded headline/lead into separate component
* - 0.0.3 Moved to stateless function
* - 0.0.2 rewritten for es2015
* - 0.0.1 Basic functions and structure
*
* @example <caption>Example usage (jsx)</caption>
*/
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import P from '../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModulePerson(props) {
    const {
        componentType,
        className,
        itemType,
        isCentered,
        content,
        children
    } = props;

    if (!content) {
        return null;
    }

    const ComponentType = componentType;
    const componentClassName = classnames(
        {
            'is-centered': isCentered
        },
        'm-person',
        className
    );
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <ComponentType
            className={componentClassName}
            {...componentSchema}
        >
            {content.name &&
            <P className='m-person__name'>
                <strong>{content.name}</strong>
            </P>}
            {content.streetAddress && content.postalCode && content.locality &&
            <address className='m-person__address c-type--address' itemProp='address' itemScope itemType='http://schema.org/Address'>
                <span className='m-person__street-address' itemProp='street-address'>
                    {content.streetAddress}
                </span>
                <span className='m-person__postal-code' itemProp='postal-code'>
                    {content.postalCode}
                </span>
                <span className='m-person__locality' itemProp='locality'>
                    {content.locality}
                </span>
            </address>
            }
            {content.email &&
            <P className='m-person__email'>
                <abbr title='E-Mail address'>E.</abbr> <a href={`mailto:${content.email}`} itemProp='email'>{content.email}</a>
            </P>}
            {content.phoneNumbers && content.phone &&
            <P className='m-person__phone'>
                <abbr title='Phonenumber'>P.</abbr> <a href={`tel:${content.phoneNumbers}`} itemProp='telephone'>{content.phone}</a>
            </P>}
            {content.website &&
            <P className='m-person__website'>
                <abbr title='Website'>W.</abbr> <a href={`${content.website}`}>{content.website}</a>
            </P>}
            {children}
        </ComponentType>
    );
}

/**
* Validate props via React.PropTypes helpers.
*
* @static
* @type {Object}
* @property {string} [componentType='div'] - The component element type used for React.createElement
* @property {string} [className] - The component css class names - will be merged into component default classNames
* @property {boolean} [isCentered=true] - Whether the component text should be centered via css or not
* @property {string} [itemType='http://schema.org/Person'] - The schema.org itemtype url attribute
* @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
* @property {Object} [content={}] - The component translation config
*/
ModulePerson.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    isCentered: PropTypes.bool,
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    /* eslint-disable react/no-unused-prop-types, react/require-default-props */
    content: PropTypes.shape({
        name: PropTypes.string,
        streetAddress: PropTypes.string,
        postalCode: PropTypes.string,
        locality: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        phoneNumber: PropTypes.string,
        website: PropTypes.string
    })
    /* eslint-enable react/no-unused-prop-types, react/require-default-props */
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModulePerson.propTypes
 */
ModulePerson.defaultProps = {
    componentType: 'div',
    itemType: 'http://schema.org/Person',
    isCentered: true
};

export default ModulePerson;

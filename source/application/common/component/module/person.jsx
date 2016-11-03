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
* @requires React
* @requires classnames
* @requires component/element/h3
* @requires component/element/paragraph
*
* @changelog
* - 0.0.4 excluded headline/lead into separate component
* - 0.0.3 moved to stateless function
* - 0.0.2 rewritten for es2015
* - 0.0.1 basic functions and structure
*
* @example <caption>Example usage (jsx)</caption>
*/
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import P from './../element/paragraph';

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
 * @param {Object} [props] The current component props
 * @returns {React.Element} React component markup
 */
class ModulePerson extends Component {

    render() {
        const {
            componentType,
            className,
            itemType,
            isCentered,
            content
        } = this.props;

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
        let componentSchema = {};

        if (itemType) {
            componentSchema = {
                itemScope: true,
                itemType: itemType
            };
        }
        return (
            <ComponentType
                className={componentClassName}
                {...componentSchema}
            >
                <P className='m-person__name'>
                    <strong>{content.name}</strong>
                </P>
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
                <P className='m-person__email'>
                    <abbr title='E-Mail address'>E.</abbr> <a href={`malto:${content.email}`} itemProp='email'>{content.email}</a>
                </P>
                <P className='m-person__phone'>
                    <abbr title='Phonenumber'>P.</abbr> <a href={`tel:${content.phoneNumbers}`} itemProp='telephone'>{content.phone}</a>
                </P>
                <P className='m-person__website'>
                    <abbr title='Website'>W.</abbr> <a href={`${content.website}`}>{content.website}</a>
                </P>
            </ComponentType>
        );
    }
}

/**
* Validate props via React.PropTypes helpers.
*
* @static
* @type {React.Component.PropTypes}
* @property {string} [componentType] The component element type used for React.createElement
* @property {string} [className] The component css class names - will be merged into component default classNames
* @property {boolean} [isCentered] Whether the component text should be centered via css or not
* @property {boolean} [hasColumns2] Whether the component text should be clusted in columns via css or not
* @property {string} [itemType] The schema.org itemtype url attribute
* @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
* @property {Object} [i18n] The component translation config
* @property {string} [i18n.headline] Translation input
* @property {string} [i18n.lead] Translation input
* @property {Array.<Object>} [i18n.text] Translation input
* @property {string} [i18n.datePublished] Translation input
* @property {string} [i18n.author] Translation input
*/
ModulePerson.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    isCentered: PropTypes.bool,
    itemType: PropTypes.string,
    /* eslint-disable react/no-unused-prop-types */
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
    /* eslint-enable react/no-unused-prop-types */
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {React.Component.DefaultProps}
* @property {string} componentType='article' The component element type used for React.createElement
* @property {boolean} isCentered=false Whether the component text should be centered via css or not
* @property {boolean} hasColumns2=true Whether the component text should be clusted in columns via css or not
* @property {Object} i18n The component translation config
*/
ModulePerson.defaultProps = {
    componentType: 'div',
    itemType: 'http://schema.org/Person',
    isCentered: true,
    content: {}
};

export default ModulePerson;

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
 * @requires react-Router
 * @requires classnames
 * @requires common/component/element/image
 *
 * @see {@link http://stackoverflow.com/questions/30115324/pass-props-in-link-react-router}
 *
 * @changelog
 * - 0.0.4 Excluded headline/lead into separate component
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import Picture from './../../element/picture';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleFeaturedItem(props) {

    const {
        path,
        headline,
        img,
        children
    } = props;

    const componentListItemClassName = classnames('m-featured__item');

    return (
        <Link
            to={`work/${path}`}
            className={componentListItemClassName}
            title={headline}
            itemProp='itemListElement'
            itemScope
            itemType='http://schema.org/SiteNavigationElement'
        >
            <span className='m-featured__hover'>
                <span className='m-featured__text'>
                    <span aria-level='3' className='m-featured__headline' role='heading'>
                        {headline}
                    </span>
                    <span aria-hidden='true' className='m-featured__icon c-font-icon--plus' />
                </span>
            </span>

            <Picture
                name={img.name}
                ext={img.ext}
                path={img.path}
                alt={img.alt}
                sizes={img.sizes}
                className={'m-featured__image'}
            />

            {children}

            <meta itemProp='name' content={headline} />
        </Link>
    );

}

/**
 * Valiate props via React.PropTypes helpers.

 * @static
 * @type {Object}
 * @property {string} [path] - The react-router link
 * @property {string} [headline] - The items title content
 * @property {Object} [img={}] - The items image config
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 */
ModuleFeaturedItem.propTypes = {
    path: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    children: PropTypes.node
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {Object}
* @see ModuleFeaturedItem.propTypes
*/
ModuleFeaturedItem.defaultProps = {
    img: {}
};

export default ModuleFeaturedItem;

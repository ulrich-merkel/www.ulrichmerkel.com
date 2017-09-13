/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 *
 * @changelog
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';

import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function LayoutLoader(props) {

    const {
        content
    } = props;

    const contentSection = getContentSection(content);

    return (
        <dialog className='l-dialog--loading'>
            <div className='l-dialog__content'>
                <div className='c-flip'>
                    <div className='c-flip__front'>{contentSection('headline')}</div>
                    <div className='c-flip__back'>{contentSection('lead')}</div>
                </div>
            </div>
            <div className='l-dialog__background' />
        </dialog>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] - The component content config
 */
LayoutLoader.propTypes = {
    content: PropTypes.shape({
        headline: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
        lead: PropTypes.string // eslint-disable-line react/no-unused-prop-types
    })

};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see LayoutLoader.propTypes
 */
LayoutLoader.defaultProps = {
    content: {}
};

export default addContent('LayoutLoader')(LayoutLoader);

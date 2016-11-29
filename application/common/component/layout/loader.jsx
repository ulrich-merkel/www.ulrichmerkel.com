/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @TODO: Move flip part to own component
 *
 * @requires react
 * @requires component/decorator/add-content
 * @requires utils/content
 *
 * @changelog
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function LayoutLoader(props) {

    const {
        content
    } = props;

    const contentSection = getContentSection(content);

    return (
        <dialog className='l-dialog--loading' role='presentation'>
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
 * @property {Object} [content={}] The component content config
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

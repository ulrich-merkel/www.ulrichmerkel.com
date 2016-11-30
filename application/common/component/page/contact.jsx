/**
 * Es6 module for React Component.
 * Page components combine section components to the
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
 * @requires react-helmet
 * @requires component/decorator/add-page-tracking
 * @requires component/decorator/add-content
 * @requires utils/content
 * @requires component/layout/main
 * @requires component/section/form
 * @requires component/module/form/contact
 *
 * @changelog
 + - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import addPageTracking from './../decorator/add-page-tracking';
import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import LayoutMain from './../layout/main';
import SectionForm from './../section/form';
import ModuleFormContact from './../module/form/contact';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function PageContact(props) {

    const { content, params } = props;
    const contentSection = getContentSection(content);
    const routerState = params && params.state;

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionForm content={contentSection('section1')} isMain>
                <ModuleFormContact content={contentSection('formContact')} {...{ routerState }} />
            </SectionForm>
        </LayoutMain>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] The component translation config
 * @property {Object} [params] The the router params config
 */
PageContact.propTypes = {
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ])),
    params: PropTypes.object
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see PageContact.propTypes
 */
PageContact.defaultProps = {
    content: {}
};

export default addPageTracking(addContent('PageContact')(PageContact));

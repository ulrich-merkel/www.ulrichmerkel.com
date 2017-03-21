/* eslint-disable immutable/no-mutation */
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
 * @requires common/component/decorator/add-page-tracking
 * @requires common/component/decorator/add-content
 * @requires common/utils/content
 * @requires common/component/layout/main
 * @requires common/component/section/form
 * @requires common/component/module/form/contact
 *
 * @changelog
 + - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import addPageTracking from './../decorator/add-page-tracking';
import addContent from './../decorator/add-content';
import { getContentSection } from './../../utils/content';
import LayoutMain from './../layout/main';
import SectionContact from './../section/contact';
import ModuleFormContact from './../module/form/contact'; // eslint-disable-line import/no-named-as-default

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function PageContact(props) {

    const { content, params } = props;
    const contentSection = getContentSection(content);
    const routerState = params && params.state;

    return (
        <LayoutMain>
            <Helmet {...contentSection('head')} />
            <SectionContact content={contentSection('section1')} isMain>
                <ModuleFormContact content={contentSection('formContact')} {...{ routerState }} />
            </SectionContact>
        </LayoutMain>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} [content={}] - The component translation config
 * @property {Object} [params={}] - The the router params config
 */
PageContact.propTypes = {
    content: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ])),
    params: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.object
    ]))
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see PageContact.propTypes
 */
PageContact.defaultProps = {
    content: {},
    params: {}
};

export default addPageTracking(addContent('PageContact')(PageContact));

/* eslint-disable react/no-danger */
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
 * @see {@link http://www.html5rocks.com/en/tutorials/security/content-security-policy/}
 *
 * @requires react
 * @requires react-redux
 * @requires react-helmet
 * @requires lodash
 * @requires serialize-javascript
 * @requires config/application
 * @requires utils/csp
 *
 * @changelog
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { get, omit } from 'lodash';
import serialize from 'serialize-javascript';

import configApplication, { url, csp } from './../../config/application';
import { getNonceConfig, getCspRules } from './../../utils/csp';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function LayoutHtml(props) {

    const { locale, store, cssBase, scriptBootstrap } = props;
    const manifest = configApplication.applicationCache.use
        ? { manifest: url.cacheManifest }
        : {};
    const nonceConfig = getNonceConfig();
    const preloadedState = omit(store.getState(), [
        'contact',
        'dialog',
        'page',
        'scroll',
        'search'
    ]);

    /**
     * Rewind Helmet for access to its data.
     * Read about why rewinding is necessary on the server:
     * @see {@link https://github.com/nfl/react-helmet#server-usage}
     *
     * Note: Helmet will update your page's `<head`> on the client
     * side, but you must construct `<head>` manually on the server.
     */
    const helmet = Helmet.rewind();

    return (
        <html className='no-js' dir='ltr' lang={locale} {...manifest}>
            <head>
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
                <meta name='viewport' content='width=device-width' />
                {csp.use && <meta httpEquiv='Content-Security-Policy' content={getCspRules(nonceConfig)} />}
                <link rel='preload' href='/css/app.css' as='style' />
                <link rel='preload' href='/js/client.bundle.js' as='script' />
                {helmet.meta.toComponent()}
                {helmet.title.toComponent()}
                {helmet.link.toComponent()}
                <style
                    nonce={get(nonceConfig, 'style.base')}
                    dangerouslySetInnerHTML={{ __html: cssBase }}
                />
                {helmet.style.toComponent()}
                <noscript>
                    <link rel='stylesheet' href='/css/app.css' type='text/css' media='all' />
                </noscript>
            </head>
            <body itemScope itemType='http://schema.org/WebPage'>
                <div id='l-react'>
                    {props.children}
                </div>
                <script
                    nonce={get(nonceConfig, 'script.bootstrap')}
                    dangerouslySetInnerHTML={{
                        __html: scriptBootstrap
                    }}
                />
                {store && <script
                    nonce={get(nonceConfig, 'script.config')}
                    dangerouslySetInnerHTML={{
                        __html: `__PRELOADED_STATE__=${serialize(preloadedState)};`
                    }}
                />}
                {helmet.script.toComponent()}
            </body>
        </html>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {Object} store Critical redux initial config
 * @property {Array|string} [children] The component react children
 * @property {string} [locale] The current locale string
 * @property {Object} [cssBase] File contents of base css file
 * @property {Object} [scriptBootstrap] File contents of loader javascript file
 */
LayoutHtml.propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.node,
    locale: PropTypes.string,
    cssBase: PropTypes.string,
    scriptBootstrap: PropTypes.string
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {Object.<*>} state The redux store state
 * @param {Object.<*>} [ownProps] The current component props
 * @returns {Object}
 */
function mapStateToProps(state, ownProps) {
    return {
        locale: get(state, 'intl.locale') || get(ownProps, 'locale')
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const LayoutHtmlContainer = connect(
    mapStateToProps
)(LayoutHtml);

export default LayoutHtmlContainer;

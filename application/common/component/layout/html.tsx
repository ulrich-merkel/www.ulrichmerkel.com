/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://www.html5rocks.com/en/tutorials/security/content-security-policy/}
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import { isEmpty, isString, get, omit } from 'lodash';
import { Store } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

import { selectStateIntlLocale } from '../../state/intl/selector';
import { configApplication, url, csp } from '../../config/application';
import { getNonceConfig, getCspRules } from '../../utils/csp';

type Props = {
    locale: string;
    store: Store;
    children?: ReactNode;
    cssBase?: string;
    scriptBootstrap?: string;
};

/**
 * Function representing the base html layout.
 *
 * @function
 * @param {object} props - The current component props
 * @param {string} props.locale - The current locale string
 * @param {object} props.store - Critical redux initial config
 * @param {Array|string} [props.children] - The component react children
 * @param {object} [props.cssBase=''] - File contents of base css file
 * @param {object} [props.scriptBootstrap=''] - File contents of loader javascript file
 * @returns {ReactElement} React component markup
 */
export const LayoutHtml: FunctionComponent<Props> = (props) => {
    const {
        children,
        locale,
        store,
        cssBase = '',
        scriptBootstrap = ''
    } = props;
    const manifest = configApplication.applicationCache.use
        ? url.cacheManifest
        : null;
    const nonceConfig = getNonceConfig();

    /**
     * To fix XSS vulnerability we will use serialize-javascript
     * instead of the simple JSON.stringify when rendering the
     * store object into the html markup. We remove "user state"
     * here and just add the previously fetched state.
     *
     * @see {@link https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0#.wxwoxhj7c}
     */
    const preloadedState = !isEmpty(store)
        ? omit(store.getState(), [
              'contact',
              'dialog',
              'page',
              'scroll',
              'search'
          ])
        : {};

    /**
     * Rewind Helmet for access to its data. Read about why rewinding
     * is necessary on the server:
     *
     * @see {@link https://github.com/nfl/react-helmet#server-usage}
     *
     * Note: Helmet will update your page's `<head`> on the client
     * side, but you must construct `<head>` manually on the server.
     */
    const helmet = Helmet.rewind();

    /**
     * The golden rule when creating language tags is to keep the tag as
     * short as possible. Avoid region, script or other subtags except
     * where they add useful distinguishing information.
     */
    const lang = isString(locale) ? locale.split('-')[0] : '';

    return (
        <html
            className="no-js"
            dir="ltr"
            id="doc-root"
            lang={lang}
            manifest={manifest}
        >
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width" />
                {csp.use && (
                    <meta
                        httpEquiv="Content-Security-Policy"
                        content={getCspRules(nonceConfig)}
                    />
                )}
                <link rel="preload" href="/css/app.css" as="style" />
                <link rel="preload" href="/js/client.bundle.js" as="script" />
                {helmet.meta.toComponent()}
                {helmet.title.toComponent()}
                {helmet.link.toComponent()}
                <style
                    nonce={get(nonceConfig, 'style.base')}
                    dangerouslySetInnerHTML={{ __html: cssBase }}
                />
                {helmet.style.toComponent()}
                <noscript>
                    <link
                        rel="stylesheet"
                        href="/css/app.css"
                        type="text/css"
                        media="all"
                    />
                </noscript>
            </head>
            <body itemScope itemType="http://schema.org/WebPage">
                <div id="l-react" className="l-react">
                    {children}
                </div>
                <script
                    nonce={get(nonceConfig, 'script.bootstrap')}
                    dangerouslySetInnerHTML={{
                        __html: scriptBootstrap
                    }}
                />
                {!isEmpty(preloadedState) && (
                    <script
                        nonce={get(nonceConfig, 'script.config')}
                        dangerouslySetInnerHTML={{
                            __html: `__PRELOADED_STATE__=${serialize(
                                preloadedState,
                                { isJSON: true }
                            )};`
                        }}
                    />
                )}
                {helmet.script.toComponent()}
            </body>
        </html>
    );
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object.<*>} state - The redux store state
 * @returns {object}
 */
function mapStateToProps(state) {
    return {
        locale: selectStateIntlLocale(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutHtmlConnected = connect(mapStateToProps)(LayoutHtml);

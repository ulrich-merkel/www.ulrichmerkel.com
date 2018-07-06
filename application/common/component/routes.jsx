/**
 * Configure react-router routes as components.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires react-router-dom
 * @requires common/config/application
 * @requires common/component/layout
 * @requires common/component/page
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { url } from '../config/application';
import { LayoutBody } from '../component/layout';
import {
    PageBroadcast,
    PageContact,
    PageDisclaimer,
    PageHome,
    PageImprint,
    PageNotFound,
    PagePersona,
    PagePrivacy,
    PageSearch,
    PageTheme,
    PageWork
} from '../component/page/';

/**
 * Handling routes and wrap content in a layout.
 *
 * @function
 * @returns {ReactElement} React component markup
 */
function Routes() {
    return (
        <LayoutBody>
            <Switch>
                <Route exact path={url.home} component={PageHome} />
                <Route path={`${url.work}/:work`} component={PageWork} />
                <Route path={url.persona} component={PagePersona} />
                <Route path={url.contact} component={PageContact} />
                <Route path={url.disclaimer} component={PageDisclaimer} />
                <Route path={url.privacy} component={PagePrivacy} />
                <Route path={url.imprint} component={PageImprint} />
                <Route path={url.broadcast} component={PageBroadcast} />
                <Route path={url.search} component={PageSearch} />
                <Route path={url.theme} component={PageTheme} />
                <Route component={PageNotFound} />
            </Switch>
        </LayoutBody>
    );
}

export default Routes;

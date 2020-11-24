/**
 * Configure react-router routes as components.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { url } from '../config/application';
import { LayoutBodyConnected } from './layout/body';
import { PageBroadcast } from './page/broadcast';
import { PageContact } from './page/contact';
import { PageDisclaimer } from './page/disclaimer';
import { PageHome } from './page/home';
import { PageImprint } from './page/imprint';
import { PageNotFound } from './page/not-found';
import { PagePersona } from './page/persona';
import { PagePrivacy } from './page/privacy';
import { PageSearch } from './page/search';
import { PageSettings } from './page/settings';
import { PageWork } from './page/work';

/**
 * Handling routes and wrap content in a layout.
 *
 * @function
 * @returns {ReactElement} React component markup
 */
export const Routes: FunctionComponent = () => {
    return (
        <LayoutBodyConnected>
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
                <Route path={url.settings} component={PageSettings} />
                <Route component={PageNotFound} />
            </Switch>
        </LayoutBodyConnected>
    );
};

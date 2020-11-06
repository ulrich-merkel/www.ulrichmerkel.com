/**
 * Configure react-router routes as components.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { url } from '../config/application';
import { LayoutBody } from './layout';
import { PageBroadcast } from './page/broadcast';
import { PageContact } from './page/contact';
import { PageDisclaimer } from './page/disclaimer';
import { PageHome } from './page/home';
import { PageImprint } from './page/imprint';
import { PageNotFound } from './page/not-found';
import { PagePersona } from './page/persona';
import { PagePrivacy } from './page/privacy';
import { PageSearch } from './page/search';
import { PageTheme } from './page/theme';
import { PageWork } from './page/work';

/**
 * Handling routes and wrap content in a layout.
 *
 * @returns {ReactElement} React component markup
 */
export function Routes() {
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

/* eslint-disable immutable/no-mutation */
/**
 * Es6 module as the root component for the react application.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires react-redux
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { url } from '../config/application';
import { LayoutBody } from '../component/layout';
import {
    PageHome,
    PageWork,
    PagePersona,
    PageContact,
    PageDisclaimer,
    PagePrivacy,
    PageImprint,
    PageBroadcast,
    PageSearch,
    PageNotFound
} from '../component/page/';

function Routes() {
    return (
        <LayoutBody>
            <Switch>
                <Route exact path={url.home} component={PageHome} />
                <Route path={`${url.work}/:work`} component={PageWork} />
                <Route path={url.persona} component={PagePersona} />
                <Route path={`${url.contact}/:state`} component={PageContact} />
                <Route path={url.disclaimer} component={PageDisclaimer} />
                <Route path={url.privacy} component={PagePrivacy} />
                <Route path={url.imprint} component={PageImprint} />
                <Route path={url.broadcast} component={PageBroadcast} />
                <Route path={url.search} component={PageSearch} />
                <Route component={PageNotFound} />
            </Switch>
        </LayoutBody>
    );
}

export default Routes;

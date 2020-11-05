/**
 * Setup react router config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @see {@link https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/routes.js}
 * @see {@link https://github.com/reactjs/react-router/blob/1.0.x/docs/guides/basics/RouteMatching.md}
 *
 * @requires common/config/application
 * @requires common/component/layout/body
 * @requires common/component/layout/body
 * @requires common/component/page/index
 * @requires common/component/page/work
 * @requires common/component/page/persona
 * @requires common/component/page/contact
 * @requires common/component/page/disclaimer
 * @requires common/component/page/privacy
 * @requires common/component/page/imprint
 * @requires common/component/page/not-found
 *
 * @changelog
 * - 0.0.4 Added locale based routing
 * - 0.0.3 Using static object config instead of jsx configuration
 * - 0.0.2 Switched to new router version 2.x and es6 syntax
 * - 0.0.1 Basic functions and structure
 */
import { url } from './application';
import LayoutBody from '../component/layout/body'; // eslint-disable-line import/no-named-as-default
import { PageBroadcast } from '../component/page/broadcast';
import { PageContact } from '../component/page/contact';
import { PageDisclaimer } from '../component/page/disclaimer';
import { PageHome } from '../component/page/home';
import { PageWork } from '../component/page/work';
import { PagePersona } from '../component/page/persona';
import { PagePrivacy } from '../component/page/privacy';
import { PageImprint } from '../component/page/imprint';
import { PageSearch } from '../component/page/search';
import { PageNotFound } from '../component/page/not-found';

const childRoutes = [
    {
        path: `${url.work.substr(1)}(/:work)`,
        component: PageWork
    },
    {
        path: url.persona.substr(1),
        component: PagePersona
    },
    {
        path: `${url.contact.substr(1)}(/:state)`,
        component: PageContact
    },
    {
        path: url.disclaimer.substr(1),
        component: PageDisclaimer
    },
    {
        path: url.privacy.substr(1),
        component: PagePrivacy
    },
    {
        path: url.imprint.substr(1),
        component: PageImprint
    },
    {
        path: url.broadcast.substr(1),
        component: PageBroadcast
    },
    {
        path: url.search.substr(1),
        component: PageSearch
    }
];

/**
 * We use this type of notation to allow locale based routing (e.g. contact/ and
 * de/contact/) ro improve SEO, so a new locale could be easily added here.
 *
 * @type {object}
 */
const configRoutes = {
    path: `${url.home}`,
    component: LayoutBody,
    indexRoute: {
        component: PageHome
    },
    childRoutes: [
        ...childRoutes,
        {
            path: '*',
            component: PageNotFound,
            status: 404
        }
    ]
};

export default configRoutes;

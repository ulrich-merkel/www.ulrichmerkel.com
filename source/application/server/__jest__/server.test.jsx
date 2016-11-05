/* eslint-disable import/no-extraneous-dependencies, func-names*/
// /* global describe, it, expect */
import http from 'http';

import './../server';
import configApplication, { host, port, url } from './../../common/config/application';

const rootUrl = `http://${host}:${port}`;

describe.only('server', function () {
    const servedUrlsToBeTested = [
        `${rootUrl}`,
        `${rootUrl}${url.persona}`,
        `${rootUrl}${url.contact}`,
        `${rootUrl}${url.broadcast}`,
        `${rootUrl}${url.imprint}`,
        `${rootUrl}${url.disclaimer}`,
        `${rootUrl}${url.privacy}`,
        `${rootUrl}${url.api}${url.apiConfigContent}`,
        `${rootUrl}${url.api}${url.apiConfigEnEn}`,
        `${rootUrl}${url.api}${url.apiConfigDeDe}`,
        `${rootUrl}/browserconfig.xml`,
        `${rootUrl}/humans.txt`,
        `${rootUrl}/manifest.json`,
        `${rootUrl}/robots.txt`,
        `${rootUrl}/sitemap.xml`,
        `${rootUrl}/js/client.js`,
        `${rootUrl}/js/app.css`,
        configApplication.applicationCache.use ? `${rootUrl}/cache.manifest` : `${rootUrl}`
    ];

    for (let i = 0; i < servedUrlsToBeTested.length; i = i + 1) {
        it(`should return 200 for ${servedUrlsToBeTested[i]}`, function (done) {
            return http.get(servedUrlsToBeTested[i], function (res) {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    }
});

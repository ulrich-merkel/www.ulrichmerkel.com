/* eslint-disable import/no-extraneous-dependencies, func-names*/
/* global describe, it, expect, jasmine */
import http from 'http';

import './../server';
import configApplication, { host, port, url } from './../../common/config/application';

const rootUrl = `http://${host}:${port}`;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000; // 20 second timeout

describe.only('server', function () {
    const servedUrlsToBeTested = [
        `${rootUrl}`,
        `${rootUrl}${url.work}${url.workOptikLudewig}`,
        `${rootUrl}${url.work}${url.workSummerInspiration}`,
        `${rootUrl}${url.work}${url.workMomentariness}`,
        `${rootUrl}${url.work}${url.workLebensweltSchule}`,
        `${rootUrl}${url.work}${url.workOptikLudewig}`,
        `${rootUrl}${url.work}${url.workRevolution}`,
        `${rootUrl}${url.work}${url.workVerlegeserviceBunge}`,
        `${rootUrl}${url.work}${url.workGedankenKollektiv}`,
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

    // @see {@link https://de.godaddy.com/help/how-to-make-an-http-post-request-in-nodejs-12366}
    // const contactPostOptions = {
    //     hostname: host,
    //     port: port,
    //     path: `${url.contact}`,
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         'X-Requested-With': 'XMLHttpRequest'
    //     }
    // };
    //
    // it(`should return 200 for post request to ${rootUrl}${url.contact}`, function (done) {
    //     const request = http.request(contactPostOptions, function (res) {
    //         expect(res.statusCode).toBe(200);
    //         done();
    //     });
    //     request.on('error', function(e) {
    //         console.error('problem with request: ' + e.message);
    //         done();
    //     });
    //     request.write('{"data": {"name": "test", "email": "test@test.de", "subject": "test", "message": "test"}}');
    //     request.end();
    //     return request;
    // });

});

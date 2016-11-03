/* eslint-disable import/no-extraneous-dependencies, func-names*/
// /* global describe, it, expect */
import http from 'http';

import './../server';
import configApplication, { host, port, url } from './../../common/config/application';

const rootUrl = `http://${host}:${port}`;

describe.only('server', function () {
    it('should return 200 for base path', function (done) {
        return http.get(`${rootUrl}`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it(`should return 200 for ${url.persona} path`, function (done) {
        return http.get(`${rootUrl}/${url.persona}`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it(`should return 200 for ${url.contact} path`, function (done) {
        return http.get(`${rootUrl}/${url.contact}`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it(`should return 200 for ${url.broadcast} path`, function (done) {
        return http.get(`${rootUrl}/${url.broadcast}`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it('should return 200 for api/config/content', function (done) {
        return http.get(`${rootUrl}/api/config/content`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it('should return 200 for api/config/en-en', function (done) {
        return http.get(`${rootUrl}/api/config/en-en`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it('should return 200 for api/config/de-de', function (done) {
        return http.get(`${rootUrl}/api/config/de-de`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it('should return 200 for static content', function (done) {
        return http.get(`${rootUrl}/robots.txt`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    it('should return 200 for application cache', function (done) {
        if (!configApplication.applicationCache.use) {
            expect(200).toBe(200);
            return done();
        }
        return http.get(`${rootUrl}/cache.manifest`, function (res) {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});

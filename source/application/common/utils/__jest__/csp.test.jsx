/* eslint-disable func-names */
/* global describe, it, expect */
import { getNonceConfig, getCspRules } from './../csp';

describe('csp', function () {
    it('should create a config via getNonceConfig', function () {
        const nonceConfig = getNonceConfig();
        expect(nonceConfig.style).toBeDefined();
        expect(nonceConfig.style.base).toBeDefined();
        expect(nonceConfig.script).toBeDefined();
        expect(nonceConfig.script.loader).toBeDefined();
        expect(nonceConfig.script.config).toBeDefined();
    });
    it('should create meta rules via getCspRules', function () {
        const nonceConfig = getNonceConfig();
        const cspRules = getCspRules(nonceConfig);

        const rulesToEqual = [];
        rulesToEqual.push(`default-src 'self' www.ulrichmerkel.com;`);
        rulesToEqual.push(`script-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.script.loader}' 'nonce-${nonceConfig.script.config}' 'unsafe-inline';`);
        rulesToEqual.push(`style-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.style.base}' 'unsafe-inline';`);
        rulesToEqual.push(`img-src 'self' www.ulrichmerkel.com data:;`);
        rulesToEqual.push(`child-src 'none';`);
        rulesToEqual.push(`object-src 'none';`);
        expect(cspRules).toEqual(rulesToEqual.join(''));

        const emptyCspRules = getCspRules();
        expect(emptyCspRules).toEqual('');
    });
});

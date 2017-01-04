/* eslint-disable func-names */
import { getNonceConfig, getCspRules } from './../csp';

describe('common/utils/csp', function () {
    it('should create a config via getNonceConfig', function () {
        const nonceConfig = getNonceConfig();
        expect(nonceConfig.style).toBeDefined();
        expect(nonceConfig.style.base).toBeDefined();
        expect(nonceConfig.script).toBeDefined();
        expect(nonceConfig.script.bootstrap).toBeDefined();
        expect(nonceConfig.script.config).toBeDefined();
    });
    it('should create meta rules via getCspRules', function () {
        const nonceConfig = getNonceConfig();
        const cspRules = getCspRules(nonceConfig);

        const rulesToEqual = [];
        /* eslint-disable quotes */
        rulesToEqual.push(`default-src 'self' www.ulrichmerkel.com;`);
        rulesToEqual.push(`script-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.script.bootstrap}' 'nonce-${nonceConfig.script.config}' 'unsafe-inline';`);
        rulesToEqual.push(`style-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.style.base}' 'unsafe-inline';`);
        rulesToEqual.push(`img-src 'self' www.ulrichmerkel.com data:;`);
        rulesToEqual.push(`child-src 'self';`);
        rulesToEqual.push(`object-src 'none';`);
        /* eslint-enable quotes */
        expect(cspRules).toEqual(rulesToEqual.join(''));

        const emptyCspRules = getCspRules();
        expect(emptyCspRules).toEqual('');
    });
});

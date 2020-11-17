import { getNonce, getNonceConfig, getCspRules } from '../csp';

describe('getNonce', function fnDescribe() {
    it('should create a nonce string', function fnIt() {
        expect(getNonce()).toBeDefined();
    });
});

describe('getNonceConfig', function fnDescribe() {
    it('should create a config via getNonceConfig', function fnIt() {
        const nonceConfig = getNonceConfig();
        expect(nonceConfig.style).toBeDefined();
        expect(nonceConfig.style.base).toBeDefined();
        expect(nonceConfig.script).toBeDefined();
        expect(nonceConfig.script.bootstrap).toBeDefined();
        expect(nonceConfig.script.config).toBeDefined();
    });
});

describe('getCspRules', function fnDescribe() {
    it('should create meta rules via getCspRules', function fnIt() {
        const nonceConfig = getNonceConfig();
        const cspRules = getCspRules(nonceConfig);

        const rulesToEqual = [];
        rulesToEqual.push(`default-src 'self' www.ulrichmerkel.com;`);
        rulesToEqual.push(
            `script-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.script.bootstrap}' 'nonce-${nonceConfig.script.config}' 'unsafe-inline';`
        );
        rulesToEqual.push(
            `style-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.style.base}' 'unsafe-inline';`
        );
        rulesToEqual.push(`img-src 'self' www.ulrichmerkel.com data:;`);
        rulesToEqual.push(`child-src 'self';`);
        rulesToEqual.push(`object-src 'none';`);
        expect(cspRules).toEqual(rulesToEqual.join(''));

        const emptyCspRules = getCspRules();
        expect(emptyCspRules).toEqual('');
    });
});

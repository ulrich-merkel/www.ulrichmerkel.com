/**
 * @TODO This is a bit verbose - find a stable solution
 * for reusing existing functions. We just need to mock
 * getNonce here...
 */
function getNonce() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
}

function getNonceConfig() {
    return {
        style: {
            base: getNonce()
        },
        script: {
            bootstrap: getNonce(),
            config: getNonce()
        }
    };
}

function getCspRules(nonceConfig) {
    const rules = [];
    /* eslint-disable quotes */
    rules.push(`default-src 'self' www.ulrichmerkel.com;`);
    rules.push(`script-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.script.bootstrap}' 'nonce-${nonceConfig.script.config}' 'unsafe-inline';`);
    rules.push(`style-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.style.base}' 'unsafe-inline';`);
    rules.push(`img-src 'self' www.ulrichmerkel.com data:;`);
    rules.push(`child-src 'none';`);
    rules.push(`object-src 'none';`);
    /* eslint-enable quotes */

    return rules.join('');
}

export {
    getNonceConfig,
    getCspRules
};

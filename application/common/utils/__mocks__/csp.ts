/**
 * @TODO This is a bit verbose - find a stable solution
 * for reusing existing functions. We just need to mock
 * getNonce here...
 */
import { NonceConfig } from '../csp';

export function getNonce(): string {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
}

export function getNonceConfig(): NonceConfig {
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

export function getCspRules(nonceConfig?: NonceConfig): string {
    const rules = [];
    /* eslint-disable quotes */
    rules.push(`default-src 'self' www.ulrichmerkel.com;`);
    rules.push(
        `script-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.script.bootstrap}' 'nonce-${nonceConfig.script.config}' 'unsafe-inline';`
    );
    rules.push(
        `style-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.style.base}' 'unsafe-inline';`
    );
    rules.push(`img-src 'self' www.ulrichmerkel.com data:;`);
    rules.push(`child-src 'none';`);
    rules.push(`object-src 'none';`);
    /* eslint-enable quotes */

    return rules.join('');
}

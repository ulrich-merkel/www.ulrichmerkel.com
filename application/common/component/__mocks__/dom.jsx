/* eslint-disable import/no-extraneous-dependencies, immutable/no-mutation */
/**
 * @see {@link http://airbnb.io/enzyme/docs/guides/jsdom.html}
 * @see {@link http://blog.digongames.com/switching-from-jest-to-mocha/}
 */
import { jsdom } from 'jsdom';
import { isUndefined } from 'lodash';

/**
 * Create a new fake dom for testing.
 *
 * @returns {Object} The new or exisiting dom
 */
function createDOM() {
    if (typeof document !== 'undefined') {
        return;
    }

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
        if (isUndefined(global[property])) {
            global[property] = document.defaultView[property];
        }
    });

    global.navigator = {
        userAgent: 'node.js'
    };
}

export default createDOM;

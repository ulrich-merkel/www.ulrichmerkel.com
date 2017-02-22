/* eslint-disable import/no-extraneous-dependencies, immutable/no-mutation */
/**
 * @see {@link http://airbnb.io/enzyme/docs/guides/jsdom.html}
 * @see {@link http://blog.digongames.com/switching-from-jest-to-mocha/}
 */
import { jsdom } from 'jsdom';

/**
 * Create a new fake dom for testing.
 *
 * @function
 * @returns {Object} The new or exisiting dom
 */
function createDOM() {
    if (typeof document !== 'undefined') {
        return;
    }

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
            global[property] = document.defaultView[property];
        }
    });

    global.navigator = {
        userAgent: 'node.js'
    };
}

export default createDOM;

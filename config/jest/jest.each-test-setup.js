'use strict';

// Some of the `jest-runtime` tests are very slow and cause
// timeouts on travis
// @see {@link https://github.com/facebook/jest/blob/master/testSetupFile.js}
jest.setTimeout(70000);

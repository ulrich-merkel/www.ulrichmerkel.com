/* eslint-disable immutable/no-mutation */
module.exports = {
    // Don't try to find .babelrc because we want to force this configuration.
    'babelrc': false,
    'presets': [
        'stage-0',
        'es2015',
        'react'
    ],
    'plugins': [
        'transform-object-assign'
    ]
};

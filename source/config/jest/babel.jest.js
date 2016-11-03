module.exports = {
    // Don't try to find .babelrc because we want to force this configuration.
    babelrc: false,
    presets: [
        'es2015',
        'stage-0',
        'react'
    ],
    plugins: [
        'transform-object-assign'
    ]
};

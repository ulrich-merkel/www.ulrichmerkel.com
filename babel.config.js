/* eslint-disable immutable/no-mutation */
module.exports = {
    include: [/\.(js|jsx|ts|tsx)$/],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread'
    ],
    presets: [
        ['@babel/preset-env'],
        [
            '@babel/preset-react',
            {
                useSpread: true
            }
        ],
        [
            '@babel/preset-typescript',
            {
                sourceMaps: 'inline'
            }
        ]
    ]
};

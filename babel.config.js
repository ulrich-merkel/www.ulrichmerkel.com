/* eslint-disable immutable/no-mutation */
module.exports = {
    include: [/\.(js|jsx|ts|tsx)$/],
    presets: [
        [
            '@babel/preset-react',
            {
                useSpread: true
            }
        ],
        ['@babel/preset-typescript'],
        ['@babel/preset-env']
    ]
};

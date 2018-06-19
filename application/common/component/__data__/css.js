const readFileSync = require( '../../utils/read-file').readFileSync;
const base = readFileSync('../../../build/public/css/base.css');
const app = readFileSync('../../../build/public/css/app.css');

function getBaseStyle() {
    return base;
}

function getAppStyle() {
    return app;
}

module.exports = {
    getBaseStyle,
    getAppStyle
};

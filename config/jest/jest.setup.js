require('babel-polyfill');
const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

// Configure enzyme, see {@link http://airbnb.io/enzyme/docs/installation/react-15.html}
configure({
    adapter: new Adapter()
});

require('babel-polyfill');
const configure = require('enzyme').configure; // eslint-disable-line import/no-extraneous-dependencies
const Adapter = require('enzyme-adapter-react-16'); // eslint-disable-line import/no-extraneous-dependencies

// Configure enzyme, see {@link http://airbnb.io/enzyme/docs/installation/react-15.html}
configure({
    adapter: new Adapter()
});

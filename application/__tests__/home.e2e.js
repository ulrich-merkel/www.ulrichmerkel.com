/* eslint-disable immutable/no-mutation */
module.exports = {  
    'Home': function (browser) {
        browser
            .init()
            .waitForElementPresent('#l-react', 4000)
            .verify.elementPresent('.m-key-visual')
            .end();
    },
    after: function (browser, done) {
        browser.end();
        done();
    }
};

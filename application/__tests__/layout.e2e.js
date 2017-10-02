/* eslint-disable immutable/no-mutation */
module.exports = {  
    'Layout': function (browser) {
        browser
            .init()
            .waitForElementPresent('#l-react', 4000)
            .verify.elementPresent('.l-header')
            .verify.elementPresent('.l-main')
            .verify.elementPresent('.l-footer')
            .end();
    },
    after: function (browser, done) {
        browser.end();
        done();
    }
};

/* eslint-disable immutable/no-mutation */
module.exports = {
    Layout(browser) {
        browser
            .init()
            .waitForElementPresent('#l-react', 4000)
            .verify.elementPresent('.l-header')
            .verify.elementPresent('.l-main')
            .verify.elementPresent('.l-footer')
            .end();
    },
    after(browser, done) {
        browser.end();
        done();
    }
};

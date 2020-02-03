/* eslint-disable immutable/no-mutation */
module.exports = {
    Home(browser) {
        browser
            .init()
            .waitForElementPresent('#l-react', 4000)
            .verify.elementPresent('.m-key-visual')
            .end();
    },
    after(browser, done) {
        browser.end();
        done();
    }
};

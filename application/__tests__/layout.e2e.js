module.exports = {  
    'Layout': function (browser) {
        browser.assert.ok(1);
        browser
            .init()
            .waitForElementVisible('body', 4000)
            .verify.visible('#l-react')
            .verify.visible('.l-header')
            .verify.visible('.l-main')
            .verify.visible('.l-footer')
            .end()
    },
    after: function (browser, done) {
        browser.end();
        done();
    }
}

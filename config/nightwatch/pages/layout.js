module.exports = {
    elements: {
		react: '#l-react',
		linkHome: '.m-menu--main .m-menu__list-item .m-menu__item:first-child'
	},
	commands: [{
		navigateToHome() {
      		return this
        		.click('@linkHome')
        		.waitForElementVisible('@react')
    	}
	}]
}
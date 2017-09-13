/* eslint-disable immutable/no-mutation, import/no-extraneous-dependencies */
/**
 * Setting up nightwatch selenium end to end tests
 * 
 * @see {@link https://github.com/matthewroach/nightwatch-demo/blob/master/nightwatch.conf.js}
 * @see {@link http://matthewroach.me/ui-testing-with-nightwatch-js/}
 * @see {@link https://blog.parsable.com/react-full-stack-tests-and-continuous-delivery-part-1-4-nightwatch-c378b6fbac8a}
 */
'use strict';

const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');

module.exports = {
    'src_folders': ['application/__tests__'],
    'output_folder': 'report',
    'page_objects_path' : 'config/nightwatch/pages',

    'selenium': {
        'start_process': true,
        'server_path': seleniumServer.path,
        'host': '127.0.0.1',
        'port': 4444,
        'cli_args': {
            'webdriver.chrome.driver': './bin/drivers/chromedriver',
            'webdriver.gecko.driver' : './bin/drivers/geckodriver',
            'trustAllSSLCertificates': true
        }
    },

    'test_settings': {
        'default': {
            'launch_url': 'http://localhost:62608/', // 'http://localhost:' + (process.env.PORT),//
            'selenium_host': '127.0.0.1',
            'selenium_port': 4444,
            'pathname': '/wd/hub',
            'silent': true,
            'screenshots': {
                'enabled': false,
                'path': ''
            }
            // Enable this if you want to use a single browser run (instead of
            // firefox which is default)
            // "desiredCapabilities": {
            // "browserName": "chrome"
            // }
        },

        'chrome': {
            'desiredCapabilities': {
                'browserName': 'chrome',
                'javascriptEnabled': true,
                'acceptSslCerts': true
            }
			
        },

        'firefox': {
            'desiredCapabilities': {
                'browserName': 'firefox',
                'javascriptEnabled': true,
                'acceptSslCerts': true
            }
			
        },

        'phantom': {
            'desiredCapabilities': {
                'browserName': 'phantomjs',
                'phantomjs.binary.path': phantomjs.path
            }
        }
    }
};
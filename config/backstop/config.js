const rootUrl = `http://localhost:${process.env.PORT}`;

const scenarioDefaults = {
    selectors: [
        'document'
    ],
    delay: 500,
    misMatchThreshold: 0.1
};

module.exports = {
    id: 'visual_regression',
    viewports: [
        {
            name: 'phone',
            width: 320,
            height: 480
        },
        {
            name: 'tablet_v',
            width: 568,
            height: 1024
        },
        {
            name: 'tablet_h',
            width: 1024,
            height: 768
        },
        {
            name: 'desktop',
            width: 1280,
            height: 1024
        }
    ],
    scenarios: [
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Home',
            url: `${rootUrl}/`
        }),
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Persona',
            url: `${rootUrl}/persona`
        }),
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Contact',
            url: `${rootUrl}/contact`
        }),
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Disclaimer',
            url: `${rootUrl}/disclaimer`
        }),
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Imprint',
            url: `${rootUrl}/imprint`
        }),
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Privacy',
            url: `${rootUrl}/privacy`
        }),
        Object.assign({}, scenarioDefaults, {
            label: 'Ulrich Merkel - Work',
            url: `${rootUrl}/work/optik-ludewig`,
            misMatchThreshold: 0.2
        })
    ],
    paths: {
        bitmaps_reference: 'config/backstop/reference',
        bitmaps_test: 'report/backstop/test',
        casper_scripts: 'config/backstop/casper-scripts',
        html_report: 'report/backstop/html-report',
        ci_report: 'report/backstop/ci-report'
    },
    engine: 'phantomjs',
    report: ['CI'],
    debug: false
};

/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
const AUTHOR = 'Ulrich Merkel';
const HOMEPAGE_URL = '//www.ulrichmerkel.com';
const IMG = '/img/';
const IMG_SHARE = `${IMG}share/`;

const today = new Date();
const yyyy = today.getFullYear();
const dd = today.getDate();
const mm = today.getMonth() + 1;

export const configHead = {
    title: 'intl-default-title',
    titleTemplate: `${AUTHOR} - %s`,
    meta: [
        // General seo
        { name: 'description', content: 'intl-default-description' },
        { name: 'keywords', content: 'intl-default-keywords' },
        { name: 'author', content: 'intl-ulrich-merkel' },
        { name: 'publisher', content: 'intl-ulrich-merkel' },
        { name: 'copyright', content: 'intl-ulrich-merkel' },
        { name: 'audience', content: 'all' },
        { name: 'rating', content: 'general' },
        { name: 'robots', content: 'index, follow, archive' },
        { name: 'referrer', content: 'always' },
        // Dublin core basic info
        { name: 'dcterms.Identifier', content: `${HOMEPAGE_URL}` },
        { name: 'dcterms.Format', content: 'text/html' },
        { name: 'dcterms.Relation', content: `${AUTHOR}` },
        { name: 'dcterms.Language', content: 'en' },
        { name: 'dcterms.Publisher', content: `${AUTHOR}` },
        { name: 'dcterms.Type', content: 'text/html' },
        { name: 'dcterms.Coverage', content: `${HOMEPAGE_URL}` },
        { name: 'dcterms.Rights', content: `Copyright ©${yyyy} ${AUTHOR}` },
        { name: 'dcterms.Title', content: 'intl-default-title' },
        { name: 'dcterms.Contributor', content: `${AUTHOR}` },
        { name: 'dcterms.Date', content: `${yyyy}-${mm}-${dd}` },
        { name: 'dcterms.Subject', content: 'intl-default-keywords' },
        {
            name: 'dcterms.Description',
            content: 'intl-default-description'
        },
        // Social
        { property: 'og:site_name', content: 'intl-ulrich-merkel' },
        { property: 'og:title', content: 'intl-default-title' },
        { property: 'og:description', content: 'intl-default-description' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: `${IMG_SHARE}facebook.png` },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
        { property: 'og:locale', content: 'en-EN' },
        { property: 'article:author', content: 'intl-ulrich-merkel' },
        { property: 'article:section', content: 'Technology' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:url', content: `${HOMEPAGE_URL}` },
        { name: 'twitter:title', content: 'intl-default-title' },
        {
            name: 'twitter:description',
            content: 'intl-default-description'
        },
        { name: 'twitter:image', content: `${IMG_SHARE}twitter.png` },
        // General web app/ mobile setup
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'MobileOptimized', content: 'width' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'application-name', content: 'intl-default-title' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#14b9d6' },
        // MS pinned sites
        {
            name: 'msapplication-config',
            content: `${HOMEPAGE_URL}/browserconfig.xml`
        },
        { name: 'msapplication-TileColor', content: '#14b9d6' },
        { name: 'msapplication-navbutton-color', content: '#14b9d6' },
        { name: 'msapplication-tooltip', content: 'intl-default-title' },
        {
            name: 'msapplication-TileImage',
            content: `${IMG_SHARE}icon@144x144.png`
        },
        {
            name: 'msapplication-square70x70logo',
            content: `${IMG_SHARE}icon@70x70.png`
        },
        {
            name: 'msapplication-square150x150logo',
            content: `${IMG_SHARE}icon@150x150.png`
        },
        {
            name: 'msapplication-wide310x150logo',
            content: `${IMG_SHARE}icon@310x150.png`
        },
        {
            name: 'msapplication-square310x310logo',
            content: `${IMG_SHARE}icon@310x310.png`
        }
    ],
    link: [
        { rel: 'author', type: 'text/plain', href: '/humans.txt' },
        { rel: 'canonical', href: `${HOMEPAGE_URL}` },
        { rel: 'manifest', href: '/manifest.json' },
        // Apple homescreen apps, order seems to be important when included via meta tag
        // @see {@link  @see https://mathiasbynens.be/notes/touch-icons}
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@1536x2008.png`,
            media: `screen and
                    (min-device-width: 481px) and
                    (max-device-width: 1024px) and
                    (orientation:portrait) and
                    (-webkit-min-device-pixel-ratio: 2)`,
            sizes: '1536x2008'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@2048x1496.png`,
            media: `screen and
                    (min-device-width: 481px) and
                    (max-device-width: 1024px) and
                    (orientation:landscape) and
                    (-webkit-min-device-pixel-ratio: 2)`,
            sizes: '2048x1496'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@768x1004.png`,
            media: `screen and
                    (min-device-width: 481px) and
                    (max-device-width: 1024px) and
                    (orientation:portrait)`,
            sizes: '768x1004'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@1024x748.png`,
            media: `screen and
                    (min-device-width: 481px) and
                    (max-device-width: 1024px) and
                    (orientation:landscape)`,
            sizes: '1024x748'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@320x460.png`,
            media: 'screen and (max-device-width: 320px)'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@640x920.png`,
            media:
                '(max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@640x1096.png`,
            media:
                '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@750×1294.png`,
            media: '(device-width: 375px)'
        },
        {
            rel: 'apple-touch-startup-image',
            href: `${IMG_SHARE}apple-touch-startup-image@1242×2148.png`,
            media: '(device-width: 414px)'
        },
        // Apple touch icons / used for homescreen
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${IMG_SHARE}apple-touch-icon-180x180.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '152x152',
            href: `${IMG_SHARE}apple-touch-icon-152x152.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '144x144',
            href: `${IMG_SHARE}apple-touch-icon-144x144.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '128x128',
            href: `${IMG_SHARE}apple-touch-icon-128x128.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '120x120',
            href: `${IMG_SHARE}apple-touch-icon-120x120.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '114x114',
            href: `${IMG_SHARE}apple-touch-icon-114x114.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '76x76',
            href: `${IMG_SHARE}apple-touch-icon-76x76.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            href: `${IMG_SHARE}apple-touch-icon-72x72.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '60x60',
            href: `${IMG_SHARE}apple-touch-icon-60x60.png`
        },
        {
            rel: 'apple-touch-icon',
            sizes: '57x57',
            href: `${IMG_SHARE}apple-touch-icon-57x57.png`
        },
        // Chrome pinned sites
        {
            rel: 'icon',
            sizes: '196x196',
            href: `${IMG_SHARE}icon@196x196.png`
        },
        // Chrome for android
        {
            rel: 'icon',
            sizes: '192x192',
            href: `${IMG_SHARE}icon@192x192.png`,
            type: 'image/png'
        },
        // Favicon
        {
            rel: 'shortcut icon',
            href: `${IMG_SHARE}favicon.ico`,
            type: 'image/x-icon'
        },
        // Social microformats
        { rel: 'me', href: 'https://www.xing.com/profile/Ulrich_Merkel4' },
        { rel: 'me', href: 'https://www.facebook.com/ulrich.merkel' },
        { rel: 'me', href: 'https://github.com/ulrich-merkel' }
    ]
};

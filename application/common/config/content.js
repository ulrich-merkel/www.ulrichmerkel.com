/* eslint-disable max-len */
/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import pictureSizes from './pictures';

const {
    sizes: {
        keyvisual: pictureSizesKeyvisual,
        keyvisualWork: pictureSizesKeyvisualWork,
        keyvisualWorkPrint: pictureSizesKeyvisualWorkPrint,
        featured: pictureSizesFeatured
    }
} = pictureSizes;

const AUTHOR = 'Ulrich Merkel';
const HOMEPAGE_URL = '//www.ulrichmerkel.com';
const IMG = '/img/';
const IMG_SHARE = `${IMG}share/`;

const today = new Date();
const yyyy = today.getFullYear();
const dd = today.getDate();
const mm = today.getMonth() + 1;

const configFeatured = {
    headline: 'Featured Work',
    list: [
        {
            path: 'optik-ludewig',
            headline: 'intl-work-optik-ludewig-headline',
            img: {
                name: 'featured--optik-ludewig',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-optik-ludewig-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: 'summer-inspiration',
            headline: 'intl-work-summer-inspiration-headline',
            img: {
                name: 'featured--summer-inspiration',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-summer-inspiration-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: 'momentariness',
            headline: 'intl-work-momentariness-headline',
            img: {
                name: 'featured--momentariness',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-momentariness-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: 'lebenswelt-schule',
            headline: 'intl-work-lebenswelt-schule-headline',
            img: {
                name: 'featured--lebenswelt-schule',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-lebenswelt-schule-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: 'revolution',
            headline: 'intl-work-revolution-headline',
            img: {
                name: 'featured--revolution',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-revolution-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: 'verlegeservice-bunge',
            headline: 'intl-work-verlegeservice-bunge-headline',
            img: {
                name: 'featured--verlegeservice-bunge',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-verlegeservice-bunge-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: 'gedanken-kollektiv',
            headline: 'intl-work-gedanken-kollektiv-headline',
            img: {
                name: 'featured--gedanken-kollektiv',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-gedanken-kollektiv-alt',
                sizes: pictureSizesFeatured
            }
        }
    ]
};

/**
 * @TODO Improve broadcast string code, restructure/rename config entries:
 * {
 *    pages: {
 *        index: {},
 *        ....
 *    },
 *    layout: {
 *        head: {},
 *        ....
 *    }
 * }
 *
 */
export const configContent = {
    Head: {
        title: 'intl-default-title',
        titleTemplate: `${AUTHOR} - %s`,
        meta: [
            // general seo
            { name: 'description', content: 'intl-default-description' },
            { name: 'keywords', content: 'intl-default-keywords' },
            { name: 'author', content: 'intl-ulrich-merkel' },
            { name: 'publisher', content: 'intl-ulrich-merkel' },
            { name: 'copyright', content: 'intl-ulrich-merkel' },
            { name: 'audience', content: 'all' },
            { name: 'rating', content: 'general' },
            { name: 'robots', content: 'index, follow, archive' },
            { name: 'referrer', content: 'always' },
            // dublin core basic info
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
            // social
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
            // general web app/ mobile setup
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'MobileOptimized', content: 'width' },
            { name: 'HandheldFriendly', content: 'true' },
            { name: 'application-name', content: 'intl-default-title' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', content: '#14b9d6' },
            // ms pinned sites
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
            // apple homescreen apps, order seems to be important when included via meta tag
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
            // apple touch icons / used for homescreen
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
            // chrome pinned sites
            {
                rel: 'icon',
                sizes: '196x196',
                href: `${IMG_SHARE}icon@196x196.png`
            },
            // chrome for android
            {
                rel: 'icon',
                sizes: '192x192',
                href: `${IMG_SHARE}icon@192x192.png`,
                type: 'image/png'
            },
            // favicon
            {
                rel: 'shortcut icon',
                href: `${IMG_SHARE}favicon.ico`,
                type: 'image/x-icon'
            },
            // social microformats
            { rel: 'me', href: 'https://www.xing.com/profile/Ulrich_Merkel4' },
            { rel: 'me', href: 'https://www.facebook.com/ulrich.merkel' },
            { rel: 'me', href: 'https://github.com/ulrich-merkel' },
            { rel: 'me', href: 'https://delicious.com/ulrichmerkel' }
        ]
    },
    PageHome: {
        head: {
            title: 'intl-page-index-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-index-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-index-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-index-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-index-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-index-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-index-section1-headline',
            lead: 'intl-page-index-section1-lead',
            img: {
                name: 'keyvisual',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-img-alt',
                sizes: pictureSizesKeyvisual
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label'
        },
        section2: {
            headline: 'intl-page-index-section2-headline',
            lead: 'intl-page-index-section2-lead',
            text: [
                {
                    content: ['intl-page-index-section2-text-1-content']
                }
            ],
            datePublished: `${yyyy}-${mm}-${dd}`,
            btnTo: 'persona',
            btnTitle: 'intl-page-index-section2-btn-title',
            btnLabel: 'intl-page-index-section2-btn-label'
        },
        section3: {
            headline: 'intl-page-index-section3-headline',
            lead: 'intl-page-index-section3-lead',
            list: [
                {
                    icon: 'lab',
                    headline: 'intl-page-index-section3-list-1-headline',
                    text: 'intl-page-index-section3-list-1-text'
                },
                {
                    icon: 'stats-dots',
                    headline: 'intl-page-index-section3-list-2-headline',
                    text: 'intl-page-index-section3-list-2-text'
                },
                {
                    icon: 'magic-wand',
                    headline: 'intl-page-index-section3-list-3-headline',
                    text: 'intl-page-index-section3-list-3-text'
                },
                {
                    icon: 'happy',
                    headline: 'intl-page-index-section3-list-4-headline',
                    text: 'intl-page-index-section3-list-4-text'
                }
            ]
        },
        section4: configFeatured
    },
    PageWork: {
        head: {
            title: 'intl-page-work-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-work-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-work-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-work-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-work-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-work-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-work-section1-headline',
            lead: 'intl-page-work-section1-lead',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section2: configFeatured
    },
    PageWorkOptikLudewig: {
        head: {
            title: 'intl-work-optik-ludewig-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-optik-ludewig-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-optik-ludewig-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-optik-ludewig-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-optik-ludewig-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-optik-ludewig-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-optik-ludewig-headline',
            lead: 'intl-work-optik-ludewig-subline',
            img: {
                name: 'optik-ludewig--keyvisual',
                ext: 'png',
                path: '../../img/content/work/optik-ludewig/',
                alt: 'intl-work-optik-ludewig-alt',
                sizes: pictureSizesKeyvisualWork
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'digital'
        },
        section2: {
            headline: 'intl-work-optik-ludewig-headline',
            lead: 'intl-work-optik-ludewig-lead',
            text: [
                {
                    content: ['intl-work-optik-ludewig-description']
                }
            ],
            timeStart: '2015',
            linkTo: 'http://www.optik-ludewig.de/',
            linkLabel: 'http://www.optik-ludewig.de/',
            linkTitle: 'intl-work-optik-ludewig-link-title',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PageWorkSummerInspiration: {
        head: {
            title: 'intl-work-summer-inspiration-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-summer-inspiration-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-summer-inspiration-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-summer-inspiration-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-summer-inspiration-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-summer-inspiration-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-summer-inspiration-headline',
            lead: 'intl-work-summer-inspiration-subline',
            img: {
                name: 'summer-inspiration--keyvisual',
                ext: 'png',
                path: `${IMG}content/work/summer-inspiration/`,
                alt: 'intl-work-summer-inspiration-alt',
                sizes: pictureSizesKeyvisualWork
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'digital'
        },
        section2: {
            headline: 'intl-work-summer-inspiration-headline',
            lead: 'intl-work-summer-inspiration-lead',
            text: [
                {
                    content: ['intl-work-summer-inspiration-description']
                }
            ],
            timeStart: '2006',
            timeEnd: '2013',
            linkTo: 'http://www.summerinspiration.com/',
            linkLabel: 'http://www.summerinspiration.com/',
            linkTitle: 'intl-work-summer-inspiration-link-title',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PageWorkMomentariness: {
        head: {
            title: 'intl-work-momentariness-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-momentariness-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-momentariness-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-momentariness-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-momentariness-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-momentariness-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-momentariness-headline',
            lead: 'intl-work-momentariness-subline',
            img: {
                name: 'momentariness--keyvisual',
                ext: 'png',
                path: `${IMG}content/work/momentariness/`,
                alt: 'intl-work-momentariness-alt',
                sizes: pictureSizesKeyvisualWork
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'digital'
        },
        section2: {
            headline: 'intl-work-momentariness-headline',
            lead: 'intl-work-momentariness-lead',
            text: [
                {
                    content: ['intl-work-momentariness-description']
                }
            ],
            timeStart: '2010',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PageWorkLebensweltSchule: {
        head: {
            title: 'intl-work-lebenswelt-schule-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-lebenswelt-schule-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-lebenswelt-schule-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-lebenswelt-schule-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-lebenswelt-schule-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-lebenswelt-schule-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-lebenswelt-schule-headline',
            lead: 'intl-work-lebenswelt-schule-subline',
            img: {
                name: 'lebenswelt-schule--keyvisual',
                ext: 'png',
                path: `${IMG}content/work/lebenswelt-schule/`,
                alt: 'intl-work-lebenswelt-schule-alt',
                sizes: pictureSizesKeyvisualWork
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'digital'
        },
        section2: {
            headline: 'intl-work-lebenswelt-schule-headline',
            lead: 'intl-work-lebenswelt-schule-lead',
            text: [
                {
                    content: ['intl-work-lebenswelt-schule-description']
                }
            ],
            timeStart: '2011',
            linkTo: 'http://www.lebenswelt-schule.de/',
            linkLabel: 'http://www.lebenswelt-schule.de/',
            linkTitle: 'intl-work-lebenswelt-schule-link-title',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PageWorkRevolution: {
        head: {
            title: 'intl-work-revolution-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-revolution-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-revolution-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-revolution-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-revolution-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-revolution-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-revolution-headline',
            lead: 'intl-work-revolution-subline',
            img: {
                name: 'revolution--keyvisual',
                ext: 'png',
                path: `${IMG}content/work/revolution/`,
                alt: 'intl-work-revolution-alt',
                sizes: pictureSizesKeyvisualWorkPrint
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'print'
        },
        section2: {
            headline: 'intl-work-revolution-headline',
            lead: 'intl-work-revolution-lead',
            text: [
                {
                    content: ['intl-work-revolution-description']
                }
            ],
            timeStart: '2010',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PageWorkVerlegeserviceBunge: {
        head: {
            title: 'intl-work-verlegeservice-bunge-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-verlegeservice-bunge-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-verlegeservice-bunge-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-verlegeservice-bunge-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-verlegeservice-bunge-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-verlegeservice-bunge-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-verlegeservice-bunge-headline',
            lead: 'intl-work-verlegeservice-bunge-subline',
            img: {
                name: 'verlegeservice-bunge--keyvisual',
                ext: 'png',
                path: `${IMG}content/work/verlegeservice-bunge/`,
                alt: 'intl-work-verlegeservice-bunge-alt',
                sizes: pictureSizesKeyvisualWork
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'digital'
        },
        section2: {
            headline: 'intl-work-verlegeservice-bunge-headline',
            lead: 'intl-work-verlegeservice-bunge-lead',
            text: [
                {
                    content: ['intl-work-verlegeservice-bunge-description']
                }
            ],
            timeStart: '2008 (small facelift 2011)',
            linkTo: 'http://verlegeservice-bunge.de/',
            linkLabel: 'http://verlegeservice-bunge.de/',
            linkTitle: 'intl-work-verlegeservice-bunge-link-title',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PageWorkGedankenKollektiv: {
        head: {
            title: 'intl-work-gedanken-kollektiv-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-work-gedanken-kollektiv-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-work-gedanken-kollektiv-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-work-gedanken-kollektiv-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-work-gedanken-kollektiv-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-work-gedanken-kollektiv-description'
                }
            ]
        },
        section1: {
            headline: 'intl-work-gedanken-kollektiv-headline',
            lead: 'intl-work-gedanken-kollektiv-subline',
            img: {
                name: 'gedanken-kollektiv--keyvisual',
                ext: 'png',
                path: `${IMG}content/work/gedanken-kollektiv/`,
                alt: 'intl-work-gedanken-kollektiv-alt',
                sizes: pictureSizesKeyvisualWork
            },
            btnTitle: 'intl-btn-scroll-down-title',
            btnLabel: 'intl-btn-scroll-down-label',
            type: 'digital'
        },
        section2: {
            headline: 'intl-work-gedanken-kollektiv-headline',
            lead: 'intl-work-gedanken-kollektiv-lead',
            text: [
                {
                    content: ['intl-work-gedanken-kollektiv-description']
                }
            ],
            timeStart: '2006',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        },
        section3: configFeatured
    },
    PagePersona: {
        head: {
            title: 'intl-page-persona-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-persona-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-persona-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-persona-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-persona-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-persona-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-persona-section1-headline',
            lead: 'intl-page-persona-section1-lead',
            text: [
                {
                    content: ['intl-page-persona-section1-text-1-content']
                }
            ],
            btnTo: '/',
            btnTitle: 'intl-page-persona-section1-btn-title',
            btnLabel: 'intl-page-persona-section1-btn-label'
        },
        section2: {
            headline: 'intl-page-persona-section2-headline',
            lead: 'intl-page-persona-section2-lead',
            professionalExperience:
                'intl-page-persona-section2-professional-experience',
            professionalExperienceList: [
                {
                    headline:
                        'intl-page-persona-section2-professional-experience-list-1-headline',
                    lead: 'TomTom Telematics',
                    timeStart: '2016',
                    timeEnd: 'intl-today',
                    description: [
                        'intl-page-persona-section2-professional-experience-list-1-description'
                    ]
                },
                {
                    headline:
                        'intl-page-persona-section2-professional-experience-list-2-headline',
                    lead: 'Pluspol interactive',
                    timeStart: '2011',
                    timeEnd: '2016',
                    description: [
                        'intl-page-persona-section2-professional-experience-list-2-description'
                    ],
                    offset: '100'
                },
                {
                    headline:
                        'intl-page-persona-section2-professional-experience-list-3-headline',
                    lead: 'Mitteldeutscher Rundfunk',
                    timeStart: '2010',
                    timeEnd: '2012',
                    description: [
                        'intl-page-persona-section2-professional-experience-list-3-description'
                    ],
                    offset: '50'
                },
                {
                    headline:
                        'intl-page-persona-section2-professional-experience-list-4-headline',
                    lead: 'Swiss Timing Sportservice',
                    timeStart: '2002',
                    timeEnd: '2009',
                    description: [
                        'intl-page-persona-section2-professional-experience-list-4-description'
                    ]
                }
            ],
            academicEducation: 'intl-page-persona-section2-academic-education',
            academicEducationList: [
                {
                    headline:
                        'intl-page-persona-section2-academic-education-list-1-headline',
                    lead:
                        'intl-page-persona-section2-academic-education-list-1-lead',
                    timeStart: '2009',
                    timeEnd: '2014',
                    description: [
                        'intl-page-persona-section2-academic-education-list-1-description'
                    ],
                    place: {
                        name:
                            'intl-page-persona-section2-academic-education-list-1-place-name',
                        streetAddress: 'Karl-Liebknecht-Straße 132',
                        addressLocality: 'Leipzig',
                        sameAs: 'http://www.htwk-leipzig.de/'
                    }
                },
                {
                    headline:
                        'intl-page-persona-section2-academic-education-list-2-headline',
                    lead:
                        'intl-page-persona-section2-academic-education-list-2-lead',
                    timeStart: '2003',
                    timeEnd: '2006',
                    description: [
                        'intl-page-persona-section2-academic-education-list-2-description'
                    ],
                    place: {
                        name:
                            'intl-page-persona-section2-academic-education-list-2-place-name',
                        streetAddress: 'Gutenbergplatz 8',
                        addressLocality: 'Leipzig',
                        sameAs: 'http://www.gutenbergschule-leipzig.de/'
                    },
                    offset: '100'
                },
                {
                    headline:
                        'intl-page-persona-section2-academic-education-list-3-headline',
                    lead: 'Anna-Magdalena Bach Zeitz',
                    timeStart: '1986',
                    timeEnd: '1999',
                    description: [
                        'intl-page-persona-section2-academic-education-list-3-description'
                    ],
                    place: {
                        name:
                            'intl-page-persona-section2-academic-education-list-3-place-name',
                        streetAddress: 'Nicolaiplatz',
                        addressLocality: 'Zeitz',
                        sameAs:
                            'http://www.kreismusikschule-burgenlandkreis.de/'
                    }
                },
                {
                    headline:
                        'intl-page-persona-section2-academic-education-list-4-headline',
                    lead: 'Geschwister-Scholl Zeitz',
                    timeStart: '1992',
                    timeEnd: '1999',
                    place: {
                        name:
                            'intl-page-persona-section2-academic-education-list-4-place-name',
                        streetAddress: 'Humboldtstraße 7',
                        addressLocality: 'Zeitz',
                        sameAs:
                            'http://www.kreismusikschule-burgenlandkreis.de/'
                    }
                },
                {
                    headline:
                        'intl-page-persona-section2-academic-education-list-5-headline',
                    lead: 'Frederic-Joliot-Curie Pegau',
                    timeStart: '1987',
                    timeEnd: '1992',
                    place: {
                        name:
                            'intl-page-persona-section2-academic-education-list-5-place-name',
                        streetAddress: 'Ernst-Reinsdorf-Straße 3',
                        addressLocality: 'Pegau',
                        sameAs: 'http://www.mittelschule-pegau.de/'
                    }
                }
            ]
        },
        section3: {
            headline: 'intl-page-persona-section3-headline',
            lead: 'Some detailed technical skills',
            list: [
                {
                    icon: 'skill-html',
                    headline: 'intl-page-persona-section3-list-1-headline',
                    text: 'intl-page-persona-section3-list-1-text'
                },
                {
                    icon: 'skill-css',
                    headline: 'intl-page-persona-section3-list-2-headline',
                    text: 'intl-page-persona-section3-list-2-text'
                },
                {
                    icon: 'skill-javascript',
                    headline: 'intl-page-persona-section3-list-3-headline',
                    text: 'intl-page-persona-section3-list-3-text'
                },
                {
                    icon: 'skill-php',
                    headline: 'intl-page-persona-section3-list-4-headline',
                    text: 'intl-page-persona-section3-list-4-text'
                },
                {
                    icon: 'happy',
                    headline: 'intl-page-persona-section3-list-5-headline',
                    text: 'intl-page-persona-section3-list-5-text'
                },
                {
                    icon: 'magic-wand',
                    headline: 'intl-page-persona-section3-list-6-headline',
                    text: 'intl-page-persona-section3-list-6-text'
                }
            ]
        },
        section4: {
            headline: 'intl-page-persona-section4-headline',
            lead: 'intl-page-persona-section4-lead',
            list: [
                {
                    headline: 'intl-page-persona-section4-list-1-headline',
                    lead: 'intl-page-persona-section4-list-1-lead',
                    percent: 99
                },
                {
                    headline: 'intl-page-persona-section4-list-2-headline',
                    lead: 'intl-page-persona-section4-list-2-lead',
                    percent: 77
                },
                {
                    headline: 'intl-page-persona-section4-list-3-headline',
                    lead: 'intl-page-persona-section4-list-3-lead',
                    percent: 6
                }
            ]
        },
        section5: {
            headline: 'intl-page-persona-section5-headline',
            lead: 'intl-page-persona-section5-lead',
            list: [
                {
                    headline: 'intl-page-persona-section5-list-1-headline',
                    lead: 'intl-page-persona-section5-list-1-lead',
                    creator: 'intl-page-persona-section5-list-1-creator',
                    publisher: 'intl-page-persona-section5-list-1-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-2-headline',
                    lead: 'intl-page-persona-section5-list-2-lead',
                    publisher: 'intl-page-persona-section5-list-2-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-3-headline',
                    lead: 'intl-page-persona-section5-list-3-lead',
                    creator: 'intl-page-persona-section5-list-3-creator',
                    publisher: 'intl-page-persona-section5-list-3-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-4-headline',
                    lead: 'intl-page-persona-section5-list-4-lead',
                    publisher: 'intl-page-persona-section5-list-4-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-5-headline',
                    lead: 'intl-page-persona-section5-list-5-lead',
                    creator: 'intl-page-persona-section5-list-5-creator',
                    publisher: 'intl-page-persona-section5-list-5-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-6-headline',
                    creator: 'intl-page-persona-section5-list-6-creator',
                    publisher: 'intl-page-persona-section5-list-6-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-7-headline',
                    lead: 'intl-page-persona-section5-list-7-lead',
                    creator: 'intl-page-persona-section5-list-7-creator',
                    publisher: 'intl-page-persona-section5-list-7-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-8-headline',
                    lead: 'intl-page-persona-section5-list-8-lead',
                    creator: 'intl-page-persona-section5-list-8-creator',
                    publisher: 'intl-page-persona-section5-list-8-publisher'
                },
                {
                    headline: 'intl-page-persona-section5-list-9-headline',
                    lead: 'intl-page-persona-section5-list-9-lead',
                    creator: 'intl-page-persona-section5-list-9-creator',
                    publisher: 'intl-page-persona-section5-list-9-publisher'
                }
            ]
        }
    },
    PageContact: {
        head: {
            title: 'intl-page-contact-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-contact-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-contact-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-contact-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-contact-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-contact-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-contact-section1-headline',
            lead: 'intl-page-contact-section1-lead'
        },
        formContact: {
            legend: 'intl-page-contact-section1-form-legend',
            inputName: 'intl-page-contact-section1-form-input-name',
            inputEmail: 'intl-page-contact-section1-form-input-email',
            inputWebsite: 'intl-page-contact-section1-form-input-website',
            inputSubject: 'intl-page-contact-section1-form-input-subject',
            inputMessage: 'intl-page-contact-section1-form-input-message',
            btnResetTitle: 'intl-page-contact-section1-form-btn-reset-title',
            btnResetLabel: 'intl-page-contact-section1-form-btn-reset-label',
            btnSubmitTitle: 'intl-page-contact-section1-form-btn-submit-title',
            btnSubmitLabel: 'intl-page-contact-section1-form-btn-submit-label',
            btnRenewTitle: 'intl-page-contact-section1-form-btn-renew-title',
            btnRenewLabel: 'intl-page-contact-section1-form-btn-renew-label',
            thankYouHeadline:
                'intl-page-contact-section1-form-thank-you-headline',
            thankYouText: 'intl-page-contact-section1-form-thank-you-text',
            errorHeadline: 'intl-page-contact-section1-form-error-headline',
            errorText: 'intl-page-contact-section1-form-error-text',
            btnTryAgainTitle:
                'intl-page-contact-section1-form-btn-try-again-title',
            btnTryAgainLabel:
                'intl-page-contact-section1-form-btn-try-again-label'
        }
    },
    PageDisclaimer: {
        head: {
            title: 'intl-page-disclaimer-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-disclaimer-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-disclaimer-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-disclaimer-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-disclaimer-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-disclaimer-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-disclaimer-section1-headline',
            lead: 'intl-page-disclaimer-section1-lead',
            text: [
                {
                    headline: 'intl-page-disclaimer-section1-text-1-headline',
                    content: [
                        'intl-page-disclaimer-section1-text-1-content-1',
                        'intl-page-disclaimer-section1-text-1-content-2'
                    ]
                },
                {
                    headline: 'intl-page-disclaimer-section1-text-2-headline',
                    content: ['intl-page-disclaimer-section1-text-2-content-1']
                },
                {
                    headline: 'intl-page-disclaimer-section1-text-3-headline',
                    content: ['intl-page-disclaimer-section1-text-3-content-1']
                },
                {
                    headline: 'intl-page-disclaimer-section1-text-4-headline',
                    content: [
                        'intl-page-disclaimer-section1-text-4-content-1',
                        'intl-page-disclaimer-section1-text-4-content-2',
                        'intl-page-disclaimer-section1-text-4-content-3'
                    ]
                }
            ],
            datePublished: `${yyyy}-${mm}-${dd}`,
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        }
    },
    PagePrivacy: {
        head: {
            title: 'intl-page-privacy-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-privacy-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-privacy-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-privacy-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-privacy-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-privacy-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-privacy-section1-headline',
            lead: 'intl-page-privacy-section1-lead',
            text: [
                {
                    headline: 'intl-page-privacy-section1-text-1-headline',
                    content: ['intl-page-privacy-section1-text-1-content-1']
                },
                {
                    headline: 'intl-page-privacy-section1-text-2-headline',
                    content: [
                        'intl-page-privacy-section1-text-2-content-1',
                        'intl-page-privacy-section1-text-2-content-2'
                    ]
                },
                {
                    headline: 'intl-page-privacy-section1-text-3-headline',
                    content: [
                        'intl-page-privacy-section1-text-3-content-1',
                        'intl-page-privacy-section1-text-3-content-2'
                    ]
                },
                {
                    headline: 'intl-page-privacy-section1-text-4-headline',
                    content: [
                        'intl-page-privacy-section1-text-4-content-1',
                        'intl-page-privacy-section1-text-4-content-2'
                    ]
                },
                {
                    headline: 'intl-page-privacy-section1-text-5-headline',
                    content: ['intl-page-privacy-section1-text-5-content-1']
                }
            ],
            datePublished: `${yyyy}-${mm}-${dd}`,
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        }
    },
    PageImprint: {
        head: {
            title: 'intl-page-imprint-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-imprint-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-imprint-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-imprint-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-imprint-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-imprint-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-imprint-section1-headline',
            lead: 'intl-page-imprint-section1-lead',
            text: [
                {
                    headline: 'intl-page-imprint-section1-text-1-headline',
                    content: ['intl-page-imprint-section1-text-1-content-1'],
                    person: {
                        name: 'intl-page-imprint-section1-address-name',
                        streetAddress:
                            'intl-page-imprint-section1-address-street-address',
                        locality: 'intl-page-imprint-section1-address-locality',
                        postalCode:
                            'intl-page-imprint-section1-address-postal-code',
                        email: 'intl-page-imprint-section1-address-email',
                        phone: 'intl-page-imprint-section1-address-phone',
                        phoneNumber:
                            'intl-page-imprint-section1-address-phone-numbers',
                        website: 'intl-page-imprint-section1-address-website'
                    },
                    small: ['intl-page-imprint-section1-text-1-content-2']
                },
                {
                    headline: 'intl-page-imprint-section1-text-2-headline',
                    content: ['intl-page-imprint-section1-text-2-content-1']
                },
                {
                    headline: 'intl-page-imprint-section1-text-3-headline',
                    content: ['intl-page-imprint-section1-text-3-content-1']
                }
            ],
            datePublished: `${yyyy}-${mm}-${dd}`,
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        }
    },
    PageSearch: {
        head: {
            title: 'intl-search-section1-headline',
            meta: [
                {
                    name: 'description',
                    content: 'intl-search-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-search-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-search-head-description'
                },
                { name: 'dcterms.Title', content: 'intl-search-head-title' },
                {
                    name: 'dcterms.Description',
                    content: 'intl-search-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-search-section1-headline',
            lead: 'intl-search-section1-lead',
            noResults: 'intl-search-section1-no-results'
        },
        formSearch: {
            legend: 'intl-search-section1-form-legend',
            inputTerm: 'intl-search-section1-form-input-name'
        }
    },
    PageSettings: {
        head: {
            title: 'intl-search-section1-headline',
            meta: [
                {
                    name: 'description',
                    content: 'intl-search-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-search-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-search-head-description'
                },
                { name: 'dcterms.Title', content: 'intl-search-head-title' },
                {
                    name: 'dcterms.Description',
                    content: 'intl-search-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-search-section1-headline',
            lead: 'intl-search-section1-lead',
            noResults: 'intl-search-section1-no-results'
        },
        formSearch: {
            legend: 'intl-search-section1-form-legend',
            inputTerm: 'intl-search-section1-form-input-name'
        }
    },
    PageBroadcast: {
        head: {
            title: 'intl-broadcast-section1-headline',
            meta: [
                {
                    name: 'description',
                    content: 'intl-broadcast-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-broadcast-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-broadcast-head-description'
                },
                { name: 'dcterms.Title', content: 'intl-broadcast-head-title' },
                {
                    name: 'dcterms.Description',
                    content: 'intl-broadcast-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-broadcast-section1-headline',
            lead: 'intl-broadcast-section1-lead',
            text: [
                {
                    headline: '2012',
                    list: [
                        {
                            name:
                                "<a href='http://www.diamondleague.com/' target='_blank' title='Diamant League website'>Diamant League</a>, track and field athletics",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'USA (New York, Eugene)'
                        }
                    ]
                },
                {
                    headline: '2011',
                    list: [
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://www.mdr.de/' target='_blank' title='MDR website'>Mitteldeutscher Rundfunk Leipzig</a>",
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Germany'
                        }
                    ]
                },
                {
                    headline: '2010',
                    list: [
                        {
                            name:
                                "<a href='http://www.iaaf.org/' target='_blank' title='IAAF website'>IAAF</a> track and field athletics",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Croatia (Split)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://www.mdr.de/' target='_blank' title='MDR website'>Mitteldeutscher Rundfunk Leipzig</a>",
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://www.uka.org.uk/' target='_blank' title='UKA website'>UKA</a> track and field athletics",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Great Britain (Birmingham)'
                        }
                    ]
                },
                {
                    headline: '2009',
                    list: [
                        {
                            name:
                                "<a href='http://www.del.org/' target='_blank' title='DEL website'>DEL</a> ice hockey",
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://www.swimming.org.au/' target='_blank' title='Australia Swimming Championships website'>Swimming Australia</a> Championships",
                            job: 'intl-broadcast-virtual-graphics-tv-graphics',
                            place: 'Australien (Sydney & Hobart)'
                        },
                        {
                            name: 'German Athletics Championships',
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Germany (Ulm)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a> and international soccer matches",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://www.triathlon.org/' target='_blank' title='Triathlon website'>Triathlon Worldcup</a>",
                            job: 'intl-broadcast-tv-graphics-gps-tracking',
                            place: 'USA (Washington), Spain (Madrid)'
                        },
                        {
                            name:
                                "Ski-jump Worldcup & <a href='http://www.vierschanzentournee.com/' target='_blank' title='4schanzentournee website'>4 Schanzentournee</a>",
                            job: 'intl-broadcast-virtual-graphics-tv-graphics',
                            place: 'Germany, Austria, Switzerland, Poland'
                        }
                    ]
                },
                {
                    headline: '2008',
                    list: [
                        {
                            name:
                                "Olympia <a href='http://en.beijing2008.cn/' target='_blank' title='Open website'>Beijing</a>",
                            job:
                                'Teamleader & Virtual Graphics for Swimming championships',
                            place: 'China (Beijing)'
                        },
                        {
                            name:
                                "<a href='http://www.cygpune2008.com/' target='_blank' title='Commenwealth Youth Games'>Commenwealth Youth Games</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'India (Pune)'
                        },
                        {
                            name: 'European Soccer Championship',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Switzerland'
                        },
                        {
                            name: 'American Swimming Championships',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'USA (Omaha)'
                        },
                        {
                            name:
                                "World <a href='http://m2008.nemisys2.uk.com/default.asp' target='_blank' title='Swimming Championships website'>Swimming Championships</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Great Britain (Manchester)'
                        },
                        {
                            name:
                                "European <a href='http://www.ecswimming2008.nl/' target='_blank' title='Swimming Championships website'>Swimming Championships</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Netherlands (Eindhoven)'
                        },
                        {
                            name:
                                "Short lane <a href='http://www.fina.org/' target='_blank' title='FINA website'>European Swimming Championship</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Croatia (Rijeka)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a> and international soccer matches",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "Ski-jump Worldcup & <a href='http://www.vierschanzentournee.com/' target='_blank' title='4schanzentournee website'>4 Schanzentournee</a>",
                            job: 'intl-broadcast-virtual-graphics-tv-graphics',
                            place: 'Norway, Germany, Austria, Poland'
                        }
                    ]
                },
                {
                    headline: '2007',
                    list: [
                        {
                            name: 'Universiade',
                            job: 'intl-broadcast-technical-supervisor',
                            place: 'Thailand (Bangkog)'
                        },
                        {
                            name:
                                "Short lane <a href='http://www.fina.org/' target='_blank' title='FINA website'>Swimming Worldcup</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Sweden (Stockholm)'
                        },
                        {
                            name:
                                "<a href='http://www.iaaf.org/' target='_blank' title='IAAF website'>IAAF</a> track and field athletics",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'France, Italy, Switzerland'
                        },
                        {
                            name:
                                "<a href='http://www.swimming.org.au/' target='_blank' title='Australia Swimming Championships website'>Australia Swimming Championships</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Australia (Sydney & Melbourne)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a> and international soccer matches",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Great Britain, Germany'
                        },
                        {
                            name:
                                "Ski-jump Worldcup & <a href='http://www.vierschanzentournee.com/' target='_blank' title='4schanzentournee website'>4 Schanzentournee</a>",
                            job: 'intl-broadcast-virtual-graphics-tv-graphics',
                            place: 'Norway, Germany, Austria, Switzerland'
                        }
                    ]
                },
                {
                    headline: '2006',
                    list: [
                        {
                            name:
                                'Asian Games Doha, Swimming & track and field athletics',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Qatar (Doha)'
                        },
                        {
                            name:
                                "<a href='http://www.torino2006.it/' target='_blank' title='Winter Olympics website'>Winter Olympics</a>",
                            job: 'intl-broadcast-timing-support',
                            place: 'Italy (Turino)'
                        },
                        {
                            name:
                                "<a href='http://de.fifa.com/worldcup/archive/germany2006/index.html' target='_blank' title='FIFA website'>World Soccer Championship</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name: 'European Swimming Championships',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Hungary (Budapest)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a> and international soccer matches",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Great Britain, Bulgaria, Germany'
                        }
                    ]
                },
                {
                    headline: '2005',
                    list: [
                        {
                            name:
                                "<a href='http://www.swimming.org.au/' target='_blank' title='Australia Swimming Championships website'>Australia Swimming Championships</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Australia (Sydney & Melbourne)'
                        },
                        {
                            name: 'Mexican Soccer League',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Mexico (Mexico City, Guadalajara)'
                        },
                        {
                            name: 'Universiade',
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Italy (Turino)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a> and international soccer matches",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://tvtotal.prosieben.de/events/wok-wm' target='_blank' title='WOK WM website'>WOK World Championships</a>",
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "Ski-jump Worldcup & <a href='http://www.vierschanzentournee.com/' target='_blank' title='4schanzentournee website'>4 Schanzentournee</a>",
                            job: 'intl-broadcast-virtual-graphics-tv-graphics',
                            place:
                                'Norway, Germany, Austria, Switzerland, Slovenia'
                        }
                    ]
                },
                {
                    headline: '2004',
                    list: [
                        {
                            name: 'World Swimming Championships',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Canada (Montreal)'
                        },
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a> and international soccer matches",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "Ski-jump Worldcup & <a href='http://www.vierschanzentournee.com/' target='_blank' title='4schanzentournee website'>4 Schanzentournee</a>",
                            job: 'intl-broadcast-virtual-graphics-tv-graphics',
                            place:
                                'Norway, Germany, Austria, Switzerland, Slovenia, Poland'
                        }
                    ]
                }
            ],
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        }
    },
    PageNotFound: {
        head: {
            title: 'intl-page-not-found-head-title',
            meta: [
                {
                    name: 'description',
                    content: 'intl-page-not-found-head-description'
                },
                {
                    property: 'og:description',
                    content: 'intl-page-not-found-head-description'
                },
                {
                    name: 'twitter:description',
                    content: 'intl-page-not-found-head-description'
                },
                {
                    name: 'dcterms.Title',
                    content: 'intl-page-not-found-head-title'
                },
                {
                    name: 'dcterms.Description',
                    content: 'intl-page-not-found-head-description'
                }
            ]
        },
        section1: {
            headline: 'intl-page-not-found-section1-headline',
            lead: 'intl-page-not-found-section1-lead',
            btnTo: '/',
            btnTitle: 'intl-btn-back-to-start-page-title',
            btnLabel: 'intl-btn-back-to-start-page-label'
        }
    },
    LayoutHeader: {
        menu: {
            main: {
                name: 'main',
                list: [
                    {
                        path: '/',
                        title: 'intl-menu-main-link-1-title',
                        label: 'intl-menu-main-link-1-label'
                    },
                    {
                        path: '/persona',
                        title: 'intl-menu-main-link-2-title',
                        label: 'intl-menu-main-link-2-label'
                    },
                    {
                        path: '/contact',
                        title: 'intl-menu-main-link-3-title',
                        label: 'intl-menu-main-link-3-label'
                    }
                ]
            },
            language: {
                name: 'language',
                list: [
                    {
                        path: '/',
                        title: 'intl-menu-language-link-1-title',
                        label: 'intl-menu-language-link-1-label'
                    },
                    {
                        path: '/',
                        title: 'intl-menu-language-link-2-title',
                        label: 'intl-menu-language-link-2-label'
                    }
                ]
            }
        },
        button: {
            toggle: {
                title: 'intl-menu-button-toggle-title',
                label: 'intl-menu-button-toggle-label'
            },
            search: {
                title: 'intl-menu-button-search-title',
                label: 'intl-menu-button-search-label'
            }
        }
    },
    LayoutFooter: {
        btnTitle: 'intl-btn-scroll-top-title',
        btnLabel: 'intl-btn-scroll-top-label',
        menu: {
            imprint: {
                name: 'imprint',
                list: [
                    {
                        path: '/disclaimer',
                        title: 'intl-menu-imprint-link-1-title',
                        label: 'intl-menu-imprint-link-1-label'
                    },
                    {
                        path: '/imprint',
                        title: 'intl-menu-imprint-link-2-title',
                        label: 'intl-menu-imprint-link-2-label'
                    },
                    {
                        path: '/privacy',
                        title: 'intl-menu-imprint-link-3-title',
                        label: 'intl-menu-imprint-link-3-label'
                    }
                ]
            },
            social: {
                name: 'social',
                list: [
                    {
                        path: 'https://www.xing.com/profile/Ulrich_Merkel4',
                        title: 'intl-menu-social-link-1-title',
                        label: 'intl-menu-social-link-1-label',
                        itemType: 'http://schema.org/Organization',
                        icon: 'xing',
                        isLabelHidden: true,
                        itemPropA: 'sameAs',
                        metaLinkUrl: `${HOMEPAGE_URL}`
                    },
                    {
                        path: 'https://www.facebook.com/ulrich.merkel',
                        title: 'intl-menu-social-link-2-title',
                        label: 'intl-menu-social-link-2-label',
                        itemType: 'http://schema.org/Organization',
                        icon: 'facebook',
                        isLabelHidden: true,
                        itemPropA: 'sameAs',
                        metaLinkUrl: `${HOMEPAGE_URL}`
                    },
                    {
                        path: 'https://github.com/ulrich-merkel',
                        title: 'intl-menu-social-link-3-title',
                        label: 'intl-menu-social-link-3-label',
                        itemType: 'http://schema.org/Organization',
                        icon: 'github',
                        isLabelHidden: true,
                        itemPropA: 'sameAs',
                        metaLinkUrl: `${HOMEPAGE_URL}`
                    },
                    {
                        path: 'https://delicious.com/ulrichmerkel',
                        title: 'intl-menu-social-link-4-title',
                        label: 'intl-menu-social-link-4-label',
                        itemType: 'http://schema.org/Organization',
                        icon: 'delicious',
                        isLabelHidden: true,
                        itemPropA: 'sameAs',
                        metaLinkUrl: `${HOMEPAGE_URL}`
                    }
                ]
            }
        },
        copy: {
            name: 'intl-ulrich-merkel',
            date: `${yyyy}`
        }
    },
    LayoutLoader: {
        headline: 'intl-now',
        lead: 'intl-loading'
    },
    LayoutDialog: {
        nav: {
            btnCloseTitle: 'intl-btn-close-dialog-title',
            btnCloseLabel: 'intl-btn-close-dialog-label'
        }
    }
};
/* eslint-enable max-len */

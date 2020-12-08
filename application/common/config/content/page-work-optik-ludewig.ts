/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import pictureSizes from '../pictures';
import { configFeatured } from './featured';

const {
    sizes: { keyvisualWork: pictureSizesKeyvisualWork }
} = pictureSizes;
const IMG = '/img/';

export const configPageWorkOptikLudewig = {
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
            path: `${IMG}content/work/optik-ludewig/`,
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
};

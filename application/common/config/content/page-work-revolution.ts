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
    sizes: { keyvisualWorkPrint: pictureSizesKeyvisualWorkPrint }
} = pictureSizes;
const IMG = '/img/';

export const configPageWorkRevolution = {
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
};

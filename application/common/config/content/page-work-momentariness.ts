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

export const configPageWorkMomentariness = {
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
};

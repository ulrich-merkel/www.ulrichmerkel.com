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

export const configPageWorkGedankenKollektiv = {
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
};

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

export const configPageWorkLebensweltSchule = {
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
};

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

export const configPageWorkSummerInspiration = {
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
};

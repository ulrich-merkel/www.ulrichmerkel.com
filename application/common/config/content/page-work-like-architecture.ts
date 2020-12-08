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

export const configPageWorkLikeArchitecture = {
    head: {
        title: 'intl-work-like-architecture-head-title',
        meta: [
            {
                name: 'description',
                content: 'intl-work-like-architecture-description'
            },
            {
                property: 'og:description',
                content: 'intl-work-like-architecture-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-work-like-architecture-description'
            },
            {
                name: 'dcterms.Title',
                content: 'intl-work-like-architecture-head-title'
            },
            {
                name: 'dcterms.Description',
                content: 'intl-work-like-architecture-description'
            }
        ]
    },
    section1: {
        headline: 'intl-work-like-architecture-headline',
        lead: 'intl-work-like-architecture-subline',
        img: {
            name: 'like-architecture--keyvisual',
            ext: 'png',
            path: `${IMG}content/work/like-architecture/`,
            alt: 'intl-work-like-architecture-alt',
            sizes: pictureSizesKeyvisualWork
        },
        btnTitle: 'intl-btn-scroll-down-title',
        btnLabel: 'intl-btn-scroll-down-label',
        type: 'digital'
    },
    section2: {
        headline: 'intl-work-like-architecture-headline',
        lead: 'intl-work-like-architecture-lead',
        text: [
            {
                content: ['intl-work-like-architecture-description']
            }
        ],
        timeStart: '2019',
        linkTo: 'http://www.likearchitecture.com/',
        linkLabel: 'http://www.likearchitecture.com/',
        linkTitle: 'intl-work-like-architecture-link-title',
        btnTo: '/',
        btnTitle: 'intl-btn-back-to-start-page-title',
        btnLabel: 'intl-btn-back-to-start-page-label'
    },
    section3: configFeatured
};

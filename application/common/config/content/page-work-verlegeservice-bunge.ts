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

export const configPageWorkVerlegeserviceBunge = {
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
};

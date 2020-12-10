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
    sizes: { keyvisual: pictureSizesKeyvisual }
} = pictureSizes;

const IMG = '/img/';
const today = new Date();
const yyyy = today.getFullYear();
const dd = today.getDate();
const mm = today.getMonth() + 1;

export const configPageHome = {
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
};

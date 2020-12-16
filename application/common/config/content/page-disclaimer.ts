/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
const today = new Date();
const yyyy = today.getFullYear();
const dd = today.getDate();
const mm = today.getMonth() + 1;

export const configPageDisclaimer = {
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
};

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

export const configPagePrivacy = {
    head: {
        title: 'intl-page-privacy-head-title',
        meta: [
            {
                name: 'description',
                content: 'intl-page-privacy-head-description'
            },
            {
                property: 'og:description',
                content: 'intl-page-privacy-head-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-page-privacy-head-description'
            },
            {
                name: 'dcterms.Title',
                content: 'intl-page-privacy-head-title'
            },
            {
                name: 'dcterms.Description',
                content: 'intl-page-privacy-head-description'
            }
        ]
    },
    section1: {
        headline: 'intl-page-privacy-section1-headline',
        lead: 'intl-page-privacy-section1-lead',
        text: [
            {
                headline: 'intl-page-privacy-section1-text-1-headline',
                content: ['intl-page-privacy-section1-text-1-content-1']
            },
            {
                headline: 'intl-page-privacy-section1-text-2-headline',
                content: [
                    'intl-page-privacy-section1-text-2-content-1',
                    'intl-page-privacy-section1-text-2-content-2'
                ]
            },
            {
                headline: 'intl-page-privacy-section1-text-3-headline',
                content: [
                    'intl-page-privacy-section1-text-3-content-1',
                    'intl-page-privacy-section1-text-3-content-2'
                ]
            },
            {
                headline: 'intl-page-privacy-section1-text-4-headline',
                content: [
                    'intl-page-privacy-section1-text-4-content-1',
                    'intl-page-privacy-section1-text-4-content-2'
                ]
            },
            {
                headline: 'intl-page-privacy-section1-text-5-headline',
                content: ['intl-page-privacy-section1-text-5-content-1']
            }
        ],
        datePublished: `${yyyy}-${mm}-${dd}`,
        btnTo: '/',
        btnTitle: 'intl-btn-back-to-start-page-title',
        btnLabel: 'intl-btn-back-to-start-page-label'
    }
};

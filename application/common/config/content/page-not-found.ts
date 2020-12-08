/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
export const configPageNotFound = {
    head: {
        title: 'intl-page-not-found-head-title',
        meta: [
            {
                name: 'description',
                content: 'intl-page-not-found-head-description'
            },
            {
                property: 'og:description',
                content: 'intl-page-not-found-head-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-page-not-found-head-description'
            },
            {
                name: 'dcterms.Title',
                content: 'intl-page-not-found-head-title'
            },
            {
                name: 'dcterms.Description',
                content: 'intl-page-not-found-head-description'
            }
        ]
    },
    section1: {
        headline: 'intl-page-not-found-section1-headline',
        lead: 'intl-page-not-found-section1-lead',
        btnTo: '/',
        btnTitle: 'intl-btn-back-to-start-page-title',
        btnLabel: 'intl-btn-back-to-start-page-label'
    }
};

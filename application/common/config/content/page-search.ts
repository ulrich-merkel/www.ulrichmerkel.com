/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
export const configPageSearch = {
    head: {
        title: 'intl-search-section1-headline',
        meta: [
            {
                name: 'description',
                content: 'intl-search-head-description'
            },
            {
                property: 'og:description',
                content: 'intl-search-head-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-search-head-description'
            },
            { name: 'dcterms.Title', content: 'intl-search-head-title' },
            {
                name: 'dcterms.Description',
                content: 'intl-search-head-description'
            }
        ]
    },
    section1: {
        headline: 'intl-search-section1-headline',
        lead: 'intl-search-section1-lead',
        noResults: 'intl-search-section1-no-results'
    },
    formSearch: {
        legend: 'intl-search-section1-form-legend',
        inputTerm: 'intl-search-section1-form-input-name'
    }
};

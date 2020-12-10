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

export const configPageImprint = {
    head: {
        title: 'intl-page-imprint-head-title',
        meta: [
            {
                name: 'description',
                content: 'intl-page-imprint-head-description'
            },
            {
                property: 'og:description',
                content: 'intl-page-imprint-head-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-page-imprint-head-description'
            },
            {
                name: 'dcterms.Title',
                content: 'intl-page-imprint-head-title'
            },
            {
                name: 'dcterms.Description',
                content: 'intl-page-imprint-head-description'
            }
        ]
    },
    section1: {
        headline: 'intl-page-imprint-section1-headline',
        lead: 'intl-page-imprint-section1-lead',
        text: [
            {
                headline: 'intl-page-imprint-section1-text-1-headline',
                content: ['intl-page-imprint-section1-text-1-content-1'],
                person: {
                    name: 'intl-page-imprint-section1-address-name',
                    streetAddress:
                        'intl-page-imprint-section1-address-street-address',
                    locality: 'intl-page-imprint-section1-address-locality',
                    postalCode:
                        'intl-page-imprint-section1-address-postal-code',
                    email: 'intl-page-imprint-section1-address-email',
                    phone: 'intl-page-imprint-section1-address-phone',
                    phoneNumber:
                        'intl-page-imprint-section1-address-phone-numbers',
                    website: 'intl-page-imprint-section1-address-website'
                },
                small: ['intl-page-imprint-section1-text-1-content-2']
            },
            {
                headline: 'intl-page-imprint-section1-text-2-headline',
                content: ['intl-page-imprint-section1-text-2-content-1']
            },
            {
                headline: 'intl-page-imprint-section1-text-3-headline',
                content: ['intl-page-imprint-section1-text-3-content-1']
            }
        ],
        datePublished: `${yyyy}-${mm}-${dd}`,
        btnTo: '/',
        btnTitle: 'intl-btn-back-to-start-page-title',
        btnLabel: 'intl-btn-back-to-start-page-label'
    }
};

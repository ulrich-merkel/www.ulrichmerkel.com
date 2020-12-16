/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { configFeatured } from './featured';

export const configPageWork = {
    head: {
        title: 'intl-page-work-head-title',
        meta: [
            {
                name: 'description',
                content: 'intl-page-work-head-description'
            },
            {
                property: 'og:description',
                content: 'intl-page-work-head-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-page-work-head-description'
            },
            {
                name: 'dcterms.Title',
                content: 'intl-page-work-head-title'
            },
            {
                name: 'dcterms.Description',
                content: 'intl-page-work-head-description'
            }
        ]
    },
    section1: {
        headline: 'intl-page-work-section1-headline',
        lead: 'intl-page-work-section1-lead',
        btnTitle: 'intl-btn-back-to-start-page-title',
        btnLabel: 'intl-btn-back-to-start-page-label'
    },
    section2: configFeatured
};

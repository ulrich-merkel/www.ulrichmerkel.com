/**
 * Configuration for custom locale translation strings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { configIntlEnEn } from './en-EN';

export const configIntlDeDe = {
    ...configIntlEnEn,
    // Page Index
    'intl-page-index-head-title': 'Frontend Web Developer',
    'intl-page-index-head-description':
        'Ich liebe Programmierung und Design welches die Grenzen des machbaren auslotet',
    'intl-page-index-section1-headline': 'Hallo, mein Name ist Ulrich Merkel',
    'intl-page-index-section1-lead': 'Ich bin ein Frontend (Web) Entwickler',
    'intl-page-index-section2-headline': 'Was ich mache',
    'intl-page-index-section2-lead':
        'Ich programmiere schicke und schnelle Webseiten'
};

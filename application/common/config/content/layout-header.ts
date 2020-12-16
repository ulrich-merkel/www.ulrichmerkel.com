/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
export const configLayoutHeader = {
    menu: {
        main: {
            name: 'main',
            list: [
                {
                    path: '/',
                    title: 'intl-menu-main-link-1-title',
                    label: 'intl-menu-main-link-1-label'
                },
                {
                    path: '/persona',
                    title: 'intl-menu-main-link-2-title',
                    label: 'intl-menu-main-link-2-label'
                },
                {
                    path: '/contact',
                    title: 'intl-menu-main-link-3-title',
                    label: 'intl-menu-main-link-3-label'
                }
            ]
        },
        language: {
            name: 'language',
            list: [
                {
                    path: '/',
                    title: 'intl-menu-language-link-1-title',
                    label: 'intl-menu-language-link-1-label'
                },
                {
                    path: '/',
                    title: 'intl-menu-language-link-2-title',
                    label: 'intl-menu-language-link-2-label'
                }
            ]
        }
    },
    button: {
        toggle: {
            title: 'intl-menu-button-toggle-title',
            label: 'intl-menu-button-toggle-label'
        },
        search: {
            title: 'intl-menu-button-search-title',
            label: 'intl-menu-button-search-label'
        }
    }
};

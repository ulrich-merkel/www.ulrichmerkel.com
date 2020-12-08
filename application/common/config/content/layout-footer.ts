/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
const HOMEPAGE_URL = '//www.ulrichmerkel.com';

const today = new Date();
const yyyy = today.getFullYear();

export const configLayoutFooter = {
    btnTitle: 'intl-btn-scroll-top-title',
    btnLabel: 'intl-btn-scroll-top-label',
    menu: {
        imprint: {
            name: 'imprint',
            list: [
                {
                    path: '/disclaimer',
                    title: 'intl-menu-imprint-link-1-title',
                    label: 'intl-menu-imprint-link-1-label'
                },
                {
                    path: '/imprint',
                    title: 'intl-menu-imprint-link-2-title',
                    label: 'intl-menu-imprint-link-2-label'
                },
                {
                    path: '/privacy',
                    title: 'intl-menu-imprint-link-3-title',
                    label: 'intl-menu-imprint-link-3-label'
                }
            ]
        },
        social: {
            name: 'social',
            list: [
                {
                    path: 'https://www.xing.com/profile/Ulrich_Merkel4',
                    title: 'intl-menu-social-link-1-title',
                    label: 'intl-menu-social-link-1-label',
                    itemType: 'http://schema.org/Organization',
                    icon: 'xing',
                    isLabelHidden: true,
                    itemPropA: 'sameAs',
                    metaLinkUrl: `${HOMEPAGE_URL}`
                },
                {
                    path: 'https://www.facebook.com/ulrich.merkel',
                    title: 'intl-menu-social-link-2-title',
                    label: 'intl-menu-social-link-2-label',
                    itemType: 'http://schema.org/Organization',
                    icon: 'facebook',
                    isLabelHidden: true,
                    itemPropA: 'sameAs',
                    metaLinkUrl: `${HOMEPAGE_URL}`
                },
                {
                    path: 'https://github.com/ulrich-merkel',
                    title: 'intl-menu-social-link-3-title',
                    label: 'intl-menu-social-link-3-label',
                    itemType: 'http://schema.org/Organization',
                    icon: 'github',
                    isLabelHidden: true,
                    itemPropA: 'sameAs',
                    metaLinkUrl: `${HOMEPAGE_URL}`
                }
            ]
        }
    },
    copy: {
        name: 'intl-ulrich-merkel',
        date: `${yyyy}`
    }
};

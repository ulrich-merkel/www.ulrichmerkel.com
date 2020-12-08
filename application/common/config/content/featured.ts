/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { url } from '../application';
import configPictures from '../pictures';

const {
    sizes: { featured: pictureSizesFeatured }
} = configPictures;

const IMG = '/img/';

export const configFeatured = {
    headline: 'intl-page-index-section4-headline',
    list: [
        {
            path: url.workLikeArchitecture,
            headline: 'intl-work-like-architecture-headline',
            img: {
                name: 'featured--like-architecture',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-like-architecture-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workOptikLudewig,
            headline: 'intl-work-optik-ludewig-headline',
            img: {
                name: 'featured--optik-ludewig',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-optik-ludewig-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workSummerInspiration,
            headline: 'intl-work-summer-inspiration-headline',
            img: {
                name: 'featured--summer-inspiration',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-summer-inspiration-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workMomentariness,
            headline: 'intl-work-momentariness-headline',
            img: {
                name: 'featured--momentariness',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-momentariness-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workLebensweltSchule,
            headline: 'intl-work-lebenswelt-schule-headline',
            img: {
                name: 'featured--lebenswelt-schule',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-lebenswelt-schule-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workRevolution,
            headline: 'intl-work-revolution-headline',
            img: {
                name: 'featured--revolution',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-revolution-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workVerlegeserviceBunge,
            headline: 'intl-work-verlegeservice-bunge-headline',
            img: {
                name: 'featured--verlegeservice-bunge',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-verlegeservice-bunge-alt',
                sizes: pictureSizesFeatured
            }
        },
        {
            path: url.workGedankenKollektiv,
            headline: 'intl-work-gedanken-kollektiv-headline',
            img: {
                name: 'featured--gedanken-kollektiv',
                ext: 'jpg',
                path: `${IMG}content/home/`,
                alt: 'intl-work-gedanken-kollektiv-alt',
                sizes: pictureSizesFeatured
            }
        }
    ]
};

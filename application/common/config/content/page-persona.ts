/**
 * Handle config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
export const configPagePersona = {
    head: {
        title: 'intl-page-persona-head-title',
        meta: [
            {
                name: 'description',
                content: 'intl-page-persona-head-description'
            },
            {
                property: 'og:description',
                content: 'intl-page-persona-head-description'
            },
            {
                name: 'twitter:description',
                content: 'intl-page-persona-head-description'
            },
            {
                name: 'dcterms.Title',
                content: 'intl-page-persona-head-title'
            },
            {
                name: 'dcterms.Description',
                content: 'intl-page-persona-head-description'
            }
        ]
    },
    section1: {
        headline: 'intl-page-persona-section1-headline',
        lead: 'intl-page-persona-section1-lead',
        text: [
            {
                content: ['intl-page-persona-section1-text-1-content']
            }
        ],
        btnTo: '/',
        btnTitle: 'intl-page-persona-section1-btn-title',
        btnLabel: 'intl-page-persona-section1-btn-label'
    },
    section2: {
        headline: 'intl-page-persona-section2-headline',
        lead: 'intl-page-persona-section2-lead',
        professionalExperience:
            'intl-page-persona-section2-professional-experience',
        professionalExperienceList: [
            {
                headline:
                    'intl-page-persona-section2-professional-experience-list-1-headline',
                lead: 'Webfleet Solutions',
                timeStart: '2016',
                timeEnd: 'intl-today',
                description: [
                    'intl-page-persona-section2-professional-experience-list-1-description'
                ]
            },
            {
                headline:
                    'intl-page-persona-section2-professional-experience-list-2-headline',
                lead: 'Pluspol interactive',
                timeStart: '2011',
                timeEnd: '2016',
                description: [
                    'intl-page-persona-section2-professional-experience-list-2-description'
                ],
                offset: '100'
            },
            {
                headline:
                    'intl-page-persona-section2-professional-experience-list-3-headline',
                lead: 'Mitteldeutscher Rundfunk',
                timeStart: '2010',
                timeEnd: '2012',
                description: [
                    'intl-page-persona-section2-professional-experience-list-3-description'
                ],
                offset: '50'
            },
            {
                headline:
                    'intl-page-persona-section2-professional-experience-list-4-headline',
                lead: 'Swiss Timing Sportservice',
                timeStart: '2002',
                timeEnd: '2009',
                description: [
                    'intl-page-persona-section2-professional-experience-list-4-description'
                ]
            }
        ],
        academicEducation: 'intl-page-persona-section2-academic-education',
        academicEducationList: [
            {
                headline:
                    'intl-page-persona-section2-academic-education-list-1-headline',
                lead:
                    'intl-page-persona-section2-academic-education-list-1-lead',
                timeStart: '2009',
                timeEnd: '2014',
                description: [
                    'intl-page-persona-section2-academic-education-list-1-description'
                ],
                place: {
                    name:
                        'intl-page-persona-section2-academic-education-list-1-place-name',
                    streetAddress: 'Karl-Liebknecht-Straße 132',
                    addressLocality: 'Leipzig',
                    sameAs: 'http://www.htwk-leipzig.de/'
                }
            },
            {
                headline:
                    'intl-page-persona-section2-academic-education-list-2-headline',
                lead:
                    'intl-page-persona-section2-academic-education-list-2-lead',
                timeStart: '2003',
                timeEnd: '2006',
                description: [
                    'intl-page-persona-section2-academic-education-list-2-description'
                ],
                place: {
                    name:
                        'intl-page-persona-section2-academic-education-list-2-place-name',
                    streetAddress: 'Gutenbergplatz 8',
                    addressLocality: 'Leipzig',
                    sameAs: 'http://www.gutenbergschule-leipzig.de/'
                },
                offset: '100'
            },
            {
                headline:
                    'intl-page-persona-section2-academic-education-list-3-headline',
                lead: 'Anna-Magdalena Bach Zeitz',
                timeStart: '1986',
                timeEnd: '1999',
                description: [
                    'intl-page-persona-section2-academic-education-list-3-description'
                ],
                place: {
                    name:
                        'intl-page-persona-section2-academic-education-list-3-place-name',
                    streetAddress: 'Nicolaiplatz',
                    addressLocality: 'Zeitz',
                    sameAs: 'http://www.kreismusikschule-burgenlandkreis.de/'
                }
            },
            {
                headline:
                    'intl-page-persona-section2-academic-education-list-4-headline',
                lead: 'Geschwister-Scholl Zeitz',
                timeStart: '1992',
                timeEnd: '1999',
                place: {
                    name:
                        'intl-page-persona-section2-academic-education-list-4-place-name',
                    streetAddress: 'Humboldtstraße 7',
                    addressLocality: 'Zeitz',
                    sameAs: 'http://www.kreismusikschule-burgenlandkreis.de/'
                }
            },
            {
                headline:
                    'intl-page-persona-section2-academic-education-list-5-headline',
                lead: 'Frederic-Joliot-Curie Pegau',
                timeStart: '1987',
                timeEnd: '1992',
                place: {
                    name:
                        'intl-page-persona-section2-academic-education-list-5-place-name',
                    streetAddress: 'Ernst-Reinsdorf-Straße 3',
                    addressLocality: 'Pegau',
                    sameAs: 'http://www.mittelschule-pegau.de/'
                }
            }
        ]
    },
    section3: {
        headline: 'intl-page-persona-section3-headline',
        lead: 'Some detailed technical skills',
        list: [
            {
                icon: 'skill-html',
                headline: 'intl-page-persona-section3-list-1-headline',
                text: 'intl-page-persona-section3-list-1-text'
            },
            {
                icon: 'skill-css',
                headline: 'intl-page-persona-section3-list-2-headline',
                text: 'intl-page-persona-section3-list-2-text'
            },
            {
                icon: 'skill-javascript',
                headline: 'intl-page-persona-section3-list-3-headline',
                text: 'intl-page-persona-section3-list-3-text'
            },
            {
                icon: 'skill-php',
                headline: 'intl-page-persona-section3-list-4-headline',
                text: 'intl-page-persona-section3-list-4-text'
            },
            {
                icon: 'happy',
                headline: 'intl-page-persona-section3-list-5-headline',
                text: 'intl-page-persona-section3-list-5-text'
            },
            {
                icon: 'magic-wand',
                headline: 'intl-page-persona-section3-list-6-headline',
                text: 'intl-page-persona-section3-list-6-text'
            }
        ]
    },
    section4: {
        headline: 'intl-page-persona-section4-headline',
        lead: 'intl-page-persona-section4-lead',
        list: [
            {
                headline: 'intl-page-persona-section4-list-1-headline',
                lead: 'intl-page-persona-section4-list-1-lead',
                percent: 99
            },
            {
                headline: 'intl-page-persona-section4-list-2-headline',
                lead: 'intl-page-persona-section4-list-2-lead',
                percent: 77
            },
            {
                headline: 'intl-page-persona-section4-list-3-headline',
                lead: 'intl-page-persona-section4-list-3-lead',
                percent: 6
            }
        ]
    },
    section5: {
        headline: 'intl-page-persona-section5-headline',
        lead: 'intl-page-persona-section5-lead',
        list: [
            {
                headline: 'intl-page-persona-section5-list-11-headline',
                lead: 'intl-page-persona-section5-list-11-lead',
                creator: 'intl-page-persona-section5-list-11-creator',
                publisher: 'intl-page-persona-section5-list-11-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-10-headline',
                lead: 'intl-page-persona-section5-list-10-lead',
                creator: 'intl-page-persona-section5-list-10-creator',
                publisher: 'intl-page-persona-section5-list-10-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-1-headline',
                lead: 'intl-page-persona-section5-list-1-lead',
                creator: 'intl-page-persona-section5-list-1-creator',
                publisher: 'intl-page-persona-section5-list-1-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-2-headline',
                lead: 'intl-page-persona-section5-list-2-lead',
                publisher: 'intl-page-persona-section5-list-2-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-3-headline',
                lead: 'intl-page-persona-section5-list-3-lead',
                creator: 'intl-page-persona-section5-list-3-creator',
                publisher: 'intl-page-persona-section5-list-3-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-4-headline',
                lead: 'intl-page-persona-section5-list-4-lead',
                publisher: 'intl-page-persona-section5-list-4-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-5-headline',
                lead: 'intl-page-persona-section5-list-5-lead',
                creator: 'intl-page-persona-section5-list-5-creator',
                publisher: 'intl-page-persona-section5-list-5-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-6-headline',
                creator: 'intl-page-persona-section5-list-6-creator',
                publisher: 'intl-page-persona-section5-list-6-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-7-headline',
                lead: 'intl-page-persona-section5-list-7-lead',
                creator: 'intl-page-persona-section5-list-7-creator',
                publisher: 'intl-page-persona-section5-list-7-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-8-headline',
                lead: 'intl-page-persona-section5-list-8-lead',
                creator: 'intl-page-persona-section5-list-8-creator',
                publisher: 'intl-page-persona-section5-list-8-publisher'
            },
            {
                headline: 'intl-page-persona-section5-list-9-headline',
                lead: 'intl-page-persona-section5-list-9-lead',
                creator: 'intl-page-persona-section5-list-9-creator',
                publisher: 'intl-page-persona-section5-list-9-publisher'
            }
        ]
    }
};

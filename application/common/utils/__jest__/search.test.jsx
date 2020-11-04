/* eslint-disable func-names, import/first */
import configContent from '../../config/__mocks__/content';
import configIntlEnEn from '../../config/intl/__mocks__/en-EN';

jest.mock('../../config/intl/en-EN');
import { findMatches } from '../search';

describe('common/utils/search', function () {
    it('should handle findMatches() correctly', function () {
        const config = {
            content: {
                data: configContent
            },
            'en-en': {
                data: configIntlEnEn
            }
        };
        const PageHome = {
            label: 'PageHome',
            title: 'PageHome',
            url: '/'
        };
        const PagePersona = {
            label: 'PagePersona',
            title: 'PagePersona',
            url: '/persona'
        };

        expect(findMatches).toBeDefined();

        expect(findMatches()).toEqual([]);
        expect(findMatches(null)).toEqual([]);
        expect(findMatches(undefined)).toEqual([]);
        expect(findMatches({})).toEqual([]);
        expect(findMatches([])).toEqual([]);
        expect(findMatches('')).toEqual([]);
        expect(findMatches('abc')).toEqual([]);

        expect(findMatches('search term', null)).toEqual([]);
        expect(findMatches('search term', undefined)).toEqual([]);
        expect(findMatches('search term', {})).toEqual([]);
        expect(findMatches('search term', [])).toEqual([]);
        expect(findMatches('search term', '')).toEqual([]);
        expect(findMatches('search term', 'xx-XX')).toEqual([]);

        expect(findMatches('search term', 'en-EN', null)).toEqual([]);
        expect(findMatches('search term', 'en-EN', undefined)).toEqual([]);
        expect(findMatches('search term', 'en-EN', {})).toEqual([]);
        expect(findMatches('search term', 'en-EN', [])).toEqual([]);
        expect(findMatches('search term', 'en-EN', { foo: 'bar' })).toEqual([]);

        expect(findMatches('lead', 'en-EN', config)).toEqual([PageHome]);

        expect(findMatches('lorem', 'en-EN', config)).toEqual([
            PageHome,
            PagePersona
        ]);

        expect(findMatches('lorem Typoblindtext', 'en-EN', config)).toEqual([
            PagePersona
        ]);
    });
});

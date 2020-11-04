/* eslint-disable func-names */
import { getContentSection, getTranslatedContent } from '../content';

describe('common/utils/content', function () {
    it('should return a config via getContentSection', function () {
        expect(
            getContentSection({
                head: {
                    foo: 'bar'
                }
            })('head')
        ).toEqual({ foo: 'bar' });
    });
    it('should return a translated config via getTranslatedContent', function () {
        const translatedContent = getTranslatedContent(
            'en-EN',
            {
                content: {
                    data: {
                        foo: 'intl-test-1',
                        bar: ['intl-test-2'],
                        foobar: 1,
                        barfoo: 'no-translation-available'
                    }
                },
                'en-en': {
                    data: {
                        'intl-test-1': 'test-1',
                        'intl-test-2': 'test-2'
                    }
                }
            },
            'data'
        );
        expect(translatedContent).toEqual({
            foo: 'test-1',
            bar: ['test-2'],
            foobar: 1,
            barfoo: 'no-translation-available'
        });
    });
});

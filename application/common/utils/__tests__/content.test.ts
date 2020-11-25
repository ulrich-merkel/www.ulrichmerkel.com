import { getContentSection, getTranslatedContent } from '../content';

describe('getContentSection', function fnDescribe() {
    it('should return a config', function fnIt() {
        expect(
            getContentSection({
                head: {
                    foo: 'bar'
                }
            })('head')
        ).toEqual({ foo: 'bar' });
    });
});

describe('getTranslatedContent', function fnDescribe() {
    it('should return a translated config', function fnIt() {
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

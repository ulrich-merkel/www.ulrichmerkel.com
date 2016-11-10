/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../article';

describe('component/module/article', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    componentType='span'
                    className='foo'
                    isMain
                    noMargin
                    isSpaced
                    content={{
                        headline: 'Headline',
                        lead: 'Lead',
                        datePublished: '20161212',
                        author: 'Author'
                    }}
                >
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

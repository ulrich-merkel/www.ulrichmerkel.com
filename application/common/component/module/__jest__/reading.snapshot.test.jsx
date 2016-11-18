/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../reading';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/reading', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    componentType='menu'
                    className='foo'
                    isCentered
                    content={{
                        list: [
                            {
                                headline: 'headline',
                                lead: 'lead',
                                creator: 'creator',
                                publisher: 'publisher'
                            },
                            {
                                headline: 'headline',
                                lead: 'lead',
                                creator: 'creator',
                                publisher: 'publisher'
                            }
                        ]
                    }}
                >
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

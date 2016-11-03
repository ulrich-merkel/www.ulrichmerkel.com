/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../reading';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/reading', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
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

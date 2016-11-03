/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../language';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/language', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested
                    componentType='span'
                    className='foo'
                    content={{
                        list: [
                            {
                                headline: 'foo1',
                                lead: 'bar1',
                                percent: '1'
                            },
                            {
                                headline: 'foo2',
                                lead: 'bar2',
                                percent: '20'
                            },
                            {
                                headline: 'foo3',
                                lead: 'bar3',
                                percent: '80'
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

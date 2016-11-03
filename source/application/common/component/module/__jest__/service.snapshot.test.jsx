/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../service';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/service', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested
                    componentType='nav'
                    className='foo'
                    content={{
                        list: [
                            {
                                icon: 'happy',
                                headline: 'headline',
                                text: 'text'
                            },
                            {
                                icon: 'xing',
                                headline: 'headline',
                                text: 'text'
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

/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../featured';

describe('component/module/featured', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested
                    componentType='span'
                    className='foo'
                    content={{
                        list: [
                            {
                                path: 'path/',
                                headline: 'headline',
                                lead: 'lead',
                                img: {}
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

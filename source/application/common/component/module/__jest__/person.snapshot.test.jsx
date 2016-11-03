/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../person';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/person', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested
                    componentType='menu'
                    className='foo'
                    isCentered
                    content={{
                        name: 'bar',
                        streetAddress: 'streetAddress',
                        postalCode: 'postalCode',
                        locality: 'locality',
                        email: 'email',
                        phoneNumber: 'phoneNumbers',
                        website: 'website'
                    }}
                >
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import renderer from 'react-test-renderer';
import ModulePerson from './../person';

describe('common/component/module/person', function () {
    const defaultProps = {
        componentType: 'menu',
        className: 'foo',
        isCentered: false,
        content: {
            name: 'bar',
            streetAddress: 'streetAddress',
            postalCode: 'postalCode',
            locality: 'locality',
            email: 'email',
            phoneNumber: 'phoneNumbers',
            website: 'website'
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModulePerson
                {...defaultProps}
            >
                Module person children
            </ModulePerson>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content is given', function () {
        const tree = renderer.create(
            <ModulePerson
                {...defaultProps}
                content={null}
            >
                Module person children not rendered
            </ModulePerson>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render isCentered correctly', function () {
        const tree = renderer.create(
            <ModulePerson
                {...defaultProps}
                isCentered
            >
                Module person children
            </ModulePerson>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer.create(
            <ModulePerson
                {...defaultProps}
                itemType={null}
            >
                Module person children
            </ModulePerson>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

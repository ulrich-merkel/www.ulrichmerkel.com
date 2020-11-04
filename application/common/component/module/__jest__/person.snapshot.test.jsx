/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModulePerson from '../person';

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
            phone: 'phone',
            phoneNumber: 'phoneNumbers',
            website: 'website'
        }
    };

    it('should render correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson {...defaultProps}>
                    Module person children
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render just a name correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson
                    {...defaultProps}
                    content={{
                        name: 'bar'
                    }}
                >
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render just an address correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson
                    {...defaultProps}
                    content={{
                        streetAddress: 'streetAddress',
                        postalCode: 'postalCode',
                        locality: 'locality'
                    }}
                >
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render just an email correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson
                    {...defaultProps}
                    content={{
                        email: 'email'
                    }}
                >
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render just a phone number correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson
                    {...defaultProps}
                    content={{
                        phone: 'phone',
                        phoneNumber: 'phoneNumbers'
                    }}
                >
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render just a website correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson
                    {...defaultProps}
                    content={{
                        website: 'website'
                    }}
                >
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if no content is given', function () {
        const tree = renderer
            .create(
                <ModulePerson {...defaultProps} content={null}>
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no schema if not given', function () {
        const tree = renderer
            .create(
                <ModulePerson {...defaultProps} itemType={null}>
                    Module person children not rendered
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render isCentered correctly', function () {
        const tree = renderer
            .create(
                <ModulePerson {...defaultProps} isCentered>
                    Module person children
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render no itemType if unset', function () {
        const tree = renderer
            .create(
                <ModulePerson {...defaultProps} itemType={null}>
                    Module person children
                </ModulePerson>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

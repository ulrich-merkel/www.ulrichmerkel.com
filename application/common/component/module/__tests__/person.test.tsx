import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModulePerson } from '../person';

describe('ModulePerson', function fnDescribe() {
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

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson {...defaultProps}>
                Module person children
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render just a name correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson
                {...defaultProps}
                content={{
                    name: 'bar'
                }}
            >
                Module person children not rendered
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render just an address correctly', function fnIt() {
        const { asFragment } = render(
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
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render just an email correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson
                {...defaultProps}
                content={{
                    email: 'email'
                }}
            >
                Module person children not rendered
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render just a phone number correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson
                {...defaultProps}
                content={{
                    phone: 'phone',
                    phoneNumber: 'phoneNumbers'
                }}
            >
                Module person children not rendered
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render just a website correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson
                {...defaultProps}
                content={{
                    website: 'website'
                }}
            >
                Module person children not rendered
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModulePerson {...defaultProps} content={null}>
                Module person children not rendered
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render isCentered correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson {...defaultProps} isCentered>
                Module person children
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModulePerson {...defaultProps} itemType={null}>
                Module person children
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

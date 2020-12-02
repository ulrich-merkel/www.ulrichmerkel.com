import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModulePerson } from '../person';

describe('ModulePerson', function fnDescribe() {
    const props = {
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
            <ModulePerson {...props}>Module person children</ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render just a name correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson
                {...props}
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
                {...props}
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
                {...props}
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
                {...props}
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
                {...props}
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
            <ModulePerson {...props} content={null}>
                Module person children not rendered
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render isCentered correctly', function fnIt() {
        const { asFragment } = render(
            <ModulePerson {...props} isCentered>
                Module person children
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModulePerson {...props} itemType={null}>
                Module person children
            </ModulePerson>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

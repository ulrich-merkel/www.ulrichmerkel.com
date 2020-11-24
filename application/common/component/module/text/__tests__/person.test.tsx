import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleTextPerson } from '../person';

describe('ModuleTextPerson', function fnDescribe() {
    const defaultProps = {
        content: {
            name: 'name',
            streetAddress: 'streetAddress',
            postalCode: '1234',
            locality: 'locality',
            email: 'test@test.com',
            phone: '123 9182 391832',
            phoneNumbers:'1239182391832',
            website: 'www.test.de'
        },
        hasColumns2: true,
        isCentered: true
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleTextPerson {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleTextPerson {...defaultProps} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModulePersonAddress } from '../address';

describe('ModulePersonAddress', function fnDescribe() {
    const props = {
        content: {
            streetAddress: 'Street number 123',
            postalCode: '01234',
            locality: 'City'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModulePersonAddress {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModulePersonAddress {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModulePersonTelephone } from '../telephone';

describe('ModulePersonTelephone', function fnDescribe() {
    const props = {
        content: {
            phone: '0123 12381 19283',
            phoneNumbers: '01231238119283'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModulePersonTelephone {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModulePersonTelephone {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

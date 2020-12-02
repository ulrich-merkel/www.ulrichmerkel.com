import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModulePersonEmail } from '../email';

describe('ModulePersonEmail', function fnDescribe() {
    const props = {
        content: {
            email: 'foo@bar.com'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModulePersonEmail {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModulePersonEmail {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

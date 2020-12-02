import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModulePersonName } from '../name';

describe('ModulePersonName', function fnDescribe() {
    const props = {
        content: {
            name: 'Mr. Nice'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModulePersonName {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModulePersonName {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

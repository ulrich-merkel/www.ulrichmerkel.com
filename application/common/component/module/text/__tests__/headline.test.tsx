import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleTextHeadline } from '../headline';

describe('ModuleTextHeadline', function fnDescribe() {
    const props = {
        text: 'Module text headline'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleTextHeadline {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleTextHeadline {...props} text={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

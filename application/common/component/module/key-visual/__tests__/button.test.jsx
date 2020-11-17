import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleKeyVisualButton } from '../button';

describe('ModuleKeyVisualButton', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisualButton
                title="title"
                label="label"
                onClick={() => {}}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render null if no content is provided', function fnIt() {
        const { asFragment } = render(<ModuleKeyVisualButton />);
        expect(asFragment()).toMatchSnapshot();
    });
});
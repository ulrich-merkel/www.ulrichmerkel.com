import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleTextPerson } from '../person';

describe('ModuleTextPerson', function fnDescribe() {
    const defaultProps = {
        content: 'Module text headline',
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

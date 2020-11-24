import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleTextContent } from '../content';

describe('ModuleTextContent', function fnDescribe() {
    const defaultProps = {
        content: ['Module text headline', 'Module text subline'],
        hasColumns2: true,
        isCentered: true
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleTextContent {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleTextContent {...defaultProps} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

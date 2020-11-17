import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleArticleLead } from '../lead';

describe('ModuleArticleLead', function fnDescribe() {
    const defaultProps = {
        text: 'Module article lead text',
        className: 'article-lead'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleArticleLead {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if text is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleArticleLead {...defaultProps} text={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

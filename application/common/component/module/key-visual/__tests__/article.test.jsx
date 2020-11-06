import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleKeyVisualArticle } from '../article';

describe('ModuleKeyVisualArticle', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisualArticle headline="headline" lead="lead" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render null if no content is provided', function fnIt() {
        const { asFragment } = render(<ModuleKeyVisualArticle />);
        expect(asFragment()).toMatchSnapshot();
    });
});

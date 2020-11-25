import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleTextLink } from '../link';

describe('ModuleTextLink', function fnDescribe() {
    const props = {
        content: {
            linkTo: '/foo',
            linkLabel: 'Module text link label',
            linkTitle: 'Module text link title'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleTextLink {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleTextLink {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleTextTime } from '../time';

describe('ModuleTextTime', function fnDescribe() {
    const props = {
        content: {
            timeStart: '123',
            timeEnd: '456'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleTextTime {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleTextTime {...props} content={null} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

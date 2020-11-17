import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Icon } from '../icon';

describe('Icon', function fnDescribe() {
    const defaultProps = {
        htmlElement: 'span',
        className: 'icon'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Icon {...defaultProps} icon="foo" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if icon is empty', function fnIt() {
        const { asFragment } = render(<Icon {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

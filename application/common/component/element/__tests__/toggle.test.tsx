import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { Toggle } from '../toggle';

describe('Toggle', function fnDescribe() {
    const props = {
        checked: true,
        className: 'test',
        id: 'test',
        label: 'Test',
        testId: 'test'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Toggle {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Toggle />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle events correctly', function fnIt() {
        const onChange = jest.fn();
        render(<Toggle {...props} onChange={onChange} />);
        const input = screen.getByTestId('test');
        userEvent.click(input);

        expect(onChange).toHaveBeenCalled();
    });
});

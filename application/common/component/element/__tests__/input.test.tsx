import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { Input } from '../input';

describe('Input', function fnDescribe() {
    const props = {
        className: 'input',
        id: 'input',
        name: 'input',
        placeholder: 'Test input placeholder',
        required: true,
        testId: 'test',
        type: 'text',
        value: '4'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Input {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Input id="input" name="input" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle events correctly', function fnIt() {
        const onBlur = jest.fn();
        const onChange = jest.fn();
        render(<Input {...props} onBlur={onBlur} onChange={onChange} />);
        const input = screen.getByTestId('test');
        userEvent.type(input, 'Test');

        expect(onChange).toHaveBeenCalled();
    });
});

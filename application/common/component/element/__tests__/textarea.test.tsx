import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { Textarea } from '../textarea';

describe('Textarea', function fnDescribe() {
    const props = {
        className: 'textarea',
        id: 'textarea',
        name: 'textarea',
        placeholder: 'Test textarea placeholder',
        testId: 'test',
        required: true
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Textarea {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Textarea id="input" name="input" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle events correctly', function fnIt() {
        const onBlur = jest.fn();
        const onChange = jest.fn();
        render(<Textarea {...props} onBlur={onBlur} onChange={onChange} />);
        const input = screen.getByTestId('test');
        userEvent.type(input, 'Test');

        expect(onChange).toHaveBeenCalled();
    });
});

import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { InputGroup } from '../input-group';

describe('InputGroup', function fnDescribe() {
    const props = {
        className: 'input-group',
        id: 'input-group',
        isPristine: true,
        isValid: true,
        label: 'input',
        name: 'input',
        required: true,
        testId: 'test',
        type: 'submit',
        value: '2'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <InputGroup {...props}>Input Group Children</InputGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <InputGroup id="input-group" name="input">
                Headline Children
            </InputGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the placeholder', function fnIt() {
        const { asFragment } = render(
            <InputGroup
                {...props}
                placeholder="placeholder"
                isLabelVisuallyHidden
            >
                Input Group Children
            </InputGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should handle event correctly', function fnIt() {
        const onBlur = jest.fn();
        const onChange = jest.fn();
        render(
            <InputGroup {...props} onBlur={onBlur} onChange={onChange}>
                Input Group Children
            </InputGroup>
        );

        const input = screen.getByTestId('test');
        userEvent.type(input, 'Test');
        // @TODO: Fix me!
        // expect(onChange).toHaveBeenCalled();
    });
});

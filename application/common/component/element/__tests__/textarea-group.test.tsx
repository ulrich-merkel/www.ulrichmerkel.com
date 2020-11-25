import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { TextareaGroup } from '../textarea-group';

describe('TextareaGroup', function fnDescribe() {
    const props = {
        className: 'textarea-group',
        id: 'textarea-group',
        isPristine: true,
        isValid: true,
        label: 'textarea',
        name: 'textarea',
        required: true,
        value: '2'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <TextareaGroup {...props}>Textarea Group Children</TextareaGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <TextareaGroup id="input" name="input" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

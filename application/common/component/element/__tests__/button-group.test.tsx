import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ButtonGroup } from '../button-group';

describe('ButtonGroup', function fnDescribe() {
    const props = {
        btnClassName: 'button-group',
        id: 'button-group',
        name: 'button',
        label: 'button',
        type: 'submit',
        isPrimary: true,
        isDisabled: true
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ButtonGroup {...props}>Button Group Children</ButtonGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(
            <ButtonGroup id="button-group" name="button" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

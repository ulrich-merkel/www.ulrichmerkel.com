import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Form } from '../form';

describe('Form', function fnDescribe() {
    const props = {
        action: 'test',
        id: 'form',
        className: 'form'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Form {...props}>Form Children</Form>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Form action="test">Form Children</Form>);
        expect(asFragment()).toMatchSnapshot();
    });
});

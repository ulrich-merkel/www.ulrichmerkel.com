import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Form } from '../form';

describe('Form', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Form
                action="test"
                id="form"
                className="form"
                data-test="form-data"
            >
                Form Children
            </Form>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

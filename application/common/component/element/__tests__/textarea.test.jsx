import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Textarea } from '../textarea';

describe('Textarea', function fnDescribe() {
    it('should render correctly with default callbacks', function fnIt() {
        const { asFragment } = render(
            <Textarea
                className="textarea"
                id="textarea"
                name="textarea"
                placeholder="Test textarea placeholder"
                required
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should call passed callbacks', function fnIt() {
        const onBlur = jest.fn();
        const onChange = jest.fn();
        const { asFragment } = render(
            <Textarea
                id="textarea-callbacks"
                name="textarea-callbacks"
                onBlur={onBlur}
                onChange={onChange}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

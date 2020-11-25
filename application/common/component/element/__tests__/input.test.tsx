import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Input } from '../input';

describe('Input', function fnDescribe() {
    it('should render correctly with default callbacks', function fnIt() {
        const { asFragment } = render(
            <Input
                className="input"
                id="input"
                name="input"
                placeholder="Test input placeholder"
                type="text"
                value="4"
                required
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should call passed callbacks', function fnIt() {
        const onBlur = jest.fn();
        const onChange = jest.fn();
        const { asFragment } = render(
            <Input
                id="input-callbacks"
                name="input-callbacks"
                onBlur={onBlur}
                onChange={onChange}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

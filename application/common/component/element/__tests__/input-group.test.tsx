import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { InputGroup } from '../input-group';

describe('InputGroup', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <InputGroup
                id="input-group"
                name="input"
                className="input-group"
                label="input"
                type="submit"
                value="2"
                isValid
                isPristine
            >
                Input Group Children
            </InputGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the placeholder', function fnIt() {
        const { asFragment } = render(
            <InputGroup
                id="input-group"
                name="input"
                className="input-group"
                label="input"
                type="submit"
                value="2"
                placeholder="placeholder"
                isLabelVisuallyHidden
                isValid
                isPristine
            >
                Input Group Children
            </InputGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

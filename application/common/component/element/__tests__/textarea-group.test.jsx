import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { TextareaGroup } from '../textarea-group';

describe('TextareaGroup', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <TextareaGroup
                id="textarea-group"
                name="textarea"
                className="textarea-group"
                label="textarea"
                value="2"
                isValid
                isPristine
            >
                Textarea Group Children
            </TextareaGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ButtonGroup } from '../button-group';

describe('ButtonGroup', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ButtonGroup
                btnClassName="button-group"
                id="button-group"
                name="button"
                label="button"
                type="submit"
                isPrimary
                isDisabled
            >
                Button Group Children
            </ButtonGroup>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

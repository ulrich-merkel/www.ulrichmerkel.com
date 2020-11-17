import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Button } from '../button';

describe('Button', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Button
                htmlElement="button"
                className="button"
                classNameLabel="button-label"
                id="button"
                name="button"
                title="Test button title"
                type="submit"
                isPrimary
                isLarge
                isDisabled
            >
                Button Children
            </Button>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

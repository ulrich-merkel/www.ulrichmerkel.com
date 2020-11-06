import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Label } from '../label';

describe('Label', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Label className="label" htmlFor="foo-bar">
                Label Children
            </Label>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the hidden state', function fnIt() {
        const { asFragment } = render(
            <Label className="label" htmlFor="foo-bar" isVisuallyHidden>
                Label Children
            </Label>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

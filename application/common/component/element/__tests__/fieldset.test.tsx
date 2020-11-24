import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Fieldset } from '../fieldset';

describe('Fieldset', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Fieldset htmlElement="span" className="fieldset">
                Fieldset Children
            </Fieldset>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

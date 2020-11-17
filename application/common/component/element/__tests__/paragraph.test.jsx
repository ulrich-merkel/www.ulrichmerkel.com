import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { P } from '../paragraph';

describe('P', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <P htmlElement="span" name="paragraph" isCentered hasColumns2>
                P Tag Children
            </P>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

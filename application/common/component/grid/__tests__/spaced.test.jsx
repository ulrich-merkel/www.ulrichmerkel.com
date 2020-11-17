import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { GridSpaced } from '../spaced';

describe('GridSpaced', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <GridSpaced>Grid Spaced Children</GridSpaced>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

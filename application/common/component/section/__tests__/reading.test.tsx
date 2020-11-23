import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { SectionReading } from '../reading';

describe('SectionReading', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <SectionReading content={{}}>
                Section reading children
            </SectionReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

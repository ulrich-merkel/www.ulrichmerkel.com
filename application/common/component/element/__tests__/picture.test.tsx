import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Picture } from '../picture';

describe('Picture', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Picture htmlElement="div" className="picture" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Image } from '../image';

describe('Image', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Image src="span" className="image" alt="foo" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

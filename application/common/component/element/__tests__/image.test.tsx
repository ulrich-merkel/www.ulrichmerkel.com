import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Image } from '../image';

describe('Image', function fnDescribe() {
    const props = {
        src: '/public/img/test.png',
        className: 'image',
        alt: 'foo'
    };
    it('should render correctly', function fnIt() {
        const { asFragment } = render(<Image {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Image src="/public/img/test.png" />);
        expect(asFragment()).toMatchSnapshot();
    });
});

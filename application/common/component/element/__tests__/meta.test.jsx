import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Meta } from '../meta';

describe('Meta', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Meta itemProp="foo" name="name" property="foo" content="bar" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render nothing if no content is set', function fnIt() {
        const { asFragment } = render(
            <Meta itemProp="foo" name="name" property="foo" />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

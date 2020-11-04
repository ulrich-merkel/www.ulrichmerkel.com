/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
import * as React from 'react';
import { shallow } from 'enzyme';

import { LayoutDialog } from '../dialog';

describe('common/component/layout/dialog', function () {
    const defaultProps = {
        dialogVisible: true,
        page: 'foo',
        dialogPage: 'foo',
        content: {}
    };

    it('should render correctly', function () {
        const tree = shallow(
            <LayoutDialog {...defaultProps}>Dialog Children</LayoutDialog>
        );
        expect(tree.html()).toMatchSnapshot();
    });
    it('should render null if not visible', function () {
        const tree = shallow(
            <LayoutDialog {...defaultProps} dialogVisible={false}>
                Dialog Children
            </LayoutDialog>
        );
        expect(tree.html()).toMatchSnapshot();

        tree.setProps({
            dialogVisible: true,
            page: null
        });
        expect(tree.html()).toMatchSnapshot();
    });
});

/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../section';

describe('common/component/grid/section', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested>
                Grid Section Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

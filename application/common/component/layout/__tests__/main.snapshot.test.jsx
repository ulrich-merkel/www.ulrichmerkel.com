/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import { LayoutMain } from '../main';

describe('LayoutMain', function () {
    it('should render correctly', function () {
        const tree = renderer.create(<LayoutMain>Hello</LayoutMain>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

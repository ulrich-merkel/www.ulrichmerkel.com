/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../root';
import configureStore from '../../state/configure-store';

describe('common/component/root', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <Root store={configureStore()}>
                <div />
            </Root>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

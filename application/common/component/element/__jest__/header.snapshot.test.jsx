/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementHeader from '../header';

describe('common/component/element/header', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementHeader>
                Headers Children
            </ElementHeader>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

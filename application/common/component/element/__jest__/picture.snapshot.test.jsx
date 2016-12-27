/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../picture';

describe('common/component/element/picture', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested htmlElement='div' className='picture' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

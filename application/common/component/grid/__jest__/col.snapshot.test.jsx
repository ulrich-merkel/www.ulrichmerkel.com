/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import GridCol from './../col';

describe('common/component/grid/col', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <GridCol htmlElement='span' className='col'>
                Grid Col Children
            </GridCol>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render custom col width', function () {
        const tree = renderer.create(
            <GridCol col='4'>
                Grid Col Children
            </GridCol>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

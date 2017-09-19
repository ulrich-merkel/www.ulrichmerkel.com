/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleCornerstoneItemEmployee from '../item-employee';

describe('common/component/module/cornerstone/item-employee', function () {
    const defaultProps = {
        headline: 'Headline item employee',
        lead: 'Lead  item employee',
        timeStart: '20161212',
        timeEnd: '20161224',
        description: [
            'Description item employee 1',
            'Description item employee 2'
        ]
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleCornerstoneItemEmployee
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render cssModifier and offset if passed', function () {
        const tree = renderer.create(
            <ModuleCornerstoneItemEmployee
                {...defaultProps}
                cssModifier={'employee'}
                offset={'200'}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

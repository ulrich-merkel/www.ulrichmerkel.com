/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleCornerstoneItemEducation from './../item-education';

describe('common/component/module/cornerstone/item-education', function () {
    const defaultProps = {
        headline: 'Headline item education',
        lead: 'Lead  item education',
        timeStart: '20161212',
        timeEnd: '20161224',
        description: [
            'Description item education 1',
            'Description item education 2'
        ],
        place: {}
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleCornerstoneItemEducation
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render cssModifier and offset if passed', function () {
        const tree = renderer.create(
            <ModuleCornerstoneItemEducation
                {...defaultProps}
                cssModifier={'education'}
                offset={'100'}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

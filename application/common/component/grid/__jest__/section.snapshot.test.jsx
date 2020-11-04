/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import GridSection from '../section';

describe('common/component/grid/section', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(<GridSection>Grid Section Children</GridSection>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

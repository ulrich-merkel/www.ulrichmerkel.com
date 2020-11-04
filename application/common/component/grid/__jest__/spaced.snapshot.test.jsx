/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import GridSpaced from '../spaced';

describe('common/component/grid/spaced', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(<GridSpaced>Grid Spaced Children</GridSpaced>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

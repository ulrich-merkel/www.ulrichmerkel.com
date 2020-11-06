/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import GridRow from '../row';

describe('common/component/grid/row', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(
                <GridRow htmlElement="span" className="row">
                    Grid Row Children
                </GridRow>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

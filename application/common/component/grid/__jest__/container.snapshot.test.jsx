/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import GridContainer from '../container';

describe('common/component/grid/container', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(
                <GridContainer htmlElement="span" className="foo">
                    Grid Container Children
                </GridContainer>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

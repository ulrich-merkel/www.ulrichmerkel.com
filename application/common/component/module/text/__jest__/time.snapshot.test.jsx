/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleTextTime from '../time';

describe('common/component/module/text/time', function () {
    const defaultProps = {
        content: {
            timeStart: '123',
            timeEnd: '456'
        }
    };

    it('should render correctly', function () {
        const tree = renderer
            .create(<ModuleTextTime {...defaultProps} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if text is empty', function () {
        const tree = renderer
            .create(<ModuleTextTime {...defaultProps} content={null} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

/* eslint-disable import/no-extraneous-dependencies, func-names, immutable/no-let */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ModuleKeyVisualButton from '../button';

describe('common/component/module/key-visual/button', function () {
    it('should render correctly', function () {
        const component = renderer.create(
            <ModuleKeyVisualButton
                title="title"
                label="label"
                onClick={() => {}}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onClick();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render null if no content is provided', function () {
        const tree = renderer.create(<ModuleKeyVisualButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

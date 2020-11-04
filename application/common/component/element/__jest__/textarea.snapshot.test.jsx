/* eslint-disable import/no-extraneous-dependencies, func-names, immutable/no-let */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ElementTextarea from '../textarea';

describe('common/component/element/textarea', function () {
    it('should render correctly with default callbacks', function () {
        const component = renderer.create(
            <ElementTextarea
                className='textarea'
                id='textarea'
                name='textarea'
                placeholder='Test textarea placeholder'
                required
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onBlur();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onChange();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should call passed callbacks', function () {
        const onBlur = jest.fn();
        const onChange = jest.fn();
        const component = renderer.create(
            <ElementTextarea
                id='textarea-callbacks'
                name='textarea-callbacks'
                onBlur={onBlur}
                onChange={onChange}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onBlur();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onChange();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

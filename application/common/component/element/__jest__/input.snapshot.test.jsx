/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../input';

describe('common/component/element/input', function () {
    it('should render correctly with default callbacks', function () {
        const component = renderer.create(
            <ComponentToBeTested
                className='input'
                classNameLabel='input-label'
                id='input'
                name='input'
                placeholder='Test input placeholder'
                type='text'
                value='4'
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
            <ComponentToBeTested
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

/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ElementParagraph from '../paragraph';

describe('common/component/element/paragraph', function () {
    it('should render correctly', function () {
        const tree = renderer
            .create(
                <ElementParagraph
                    htmlElement="span"
                    name="paragraph"
                    isCentered
                    hasColumns2
                >
                    P Tag Children
                </ElementParagraph>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

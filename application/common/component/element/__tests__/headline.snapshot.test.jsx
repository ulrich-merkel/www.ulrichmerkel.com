/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ElementHeadline from '../headline';

describe('common/component/element/headline', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer
                .create(
                    <ElementHeadline
                        htmlElement="h3"
                        className="headline"
                        isCentered
                    >
                        Headline Children
                    </ElementHeadline>
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

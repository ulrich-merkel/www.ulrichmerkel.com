/* eslint-disable import/no-extraneous-dependencies, func-names */
import 'jsdom-global/register';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import picturefill from './../picturefill';

describe('common/decorator/picturefill', function () {
    it('should return the source component', function () {
        const ChildComponent = function () {
            return <h1>Test</h1>;
        };
        const Component = function () {
            return (
                <div>
                    {picturefill(ChildComponent)}
                </div>
            );
        };

        const renderer = TestUtils.createRenderer();
        renderer.render(<Component />);

        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });
});

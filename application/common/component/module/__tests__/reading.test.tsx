import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleReading } from '../reading';

describe('ModuleReading', function fnDescribe() {
    const props = {
        htmlElement: 'ol',
        className: 'foo',
        content: {
            list: [
                {
                    headline: 'headline',
                    lead: 'lead',
                    creator: 'creator',
                    publisher: 'publisher'
                },
                {
                    headline: 'headline',
                    lead: 'lead',
                    creator: 'creator',
                    publisher: 'publisher'
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleReading {...props}>Module reading children</ModuleReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModuleReading>Module reading children not rendered</ModuleReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleReading {...props} itemType={null}>
                Module reading children
            </ModuleReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

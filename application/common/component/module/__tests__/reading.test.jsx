import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleReading } from '../reading';

describe('ModuleReading', function fnDescribe() {
    const defaultProps = {
        componentType: 'menu',
        className: 'foo',
        isCentered: true,
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
            <ModuleReading {...defaultProps}>
                Module reading children
            </ModuleReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModuleReading
                {...defaultProps}
                content={{
                    list: null
                }}
            >
                Module reading children not rendered
            </ModuleReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleReading {...defaultProps} itemType={null}>
                Module reading children
            </ModuleReading>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

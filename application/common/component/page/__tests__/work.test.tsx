import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageWork } from '../work';

jest.useFakeTimers();

describe('PageWork', function fnDescribe() {
    const defaultProps = {
        locale: 'en-EN',
        match: {
            params: {
                work: 'momentariness'
            }
        },
        config: {
            head: {
                title: 'title',
                meta: [
                    {
                        name: 'description',
                        content: 'content'
                    }
                ]
            },
            section1: {
                headline: 'Section headline',
                lead: 'Section lead',
                btnTitle: 'Section button title',
                btnLabel: 'Section button label'
            }
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<PageWork {...defaultProps} />);
        jest.runAllTimers();
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no work param is given', function fnIt() {
        const { asFragment } = render(
            <PageWork
                {...defaultProps}
                match={{
                    params: {
                        work: ''
                    }
                }}
            />
        );
        jest.runAllTimers();
        expect(asFragment()).toMatchSnapshot();
    });
});

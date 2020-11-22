/* eslint-disable func-names */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PageWork } from '../work';

jest.useFakeTimers();

describe('PageWork', function () {
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

    it('should render correctly', function () {
        const { asFragment } = render(<PageWork {...defaultProps} />);
        jest.runAllTimers();
        expect(asFragment()).toMatchSnapshot();
    });
    // it('should return null if no work param is given', function () {
    //     const { asFragment } = render(
    //         <PageWork
    //             {...defaultProps}
    //             match={{
    //                 params: {
    //                     work: ''
    //                 }
    //             }}
    //         />
    //     );
    //     expect(asFragment()).toMatchSnapshot();
    // });
});

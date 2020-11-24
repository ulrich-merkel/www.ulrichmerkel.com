import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleList } from '../list';

describe('ModuleList', function fnDescribe() {
    const defaultProps = {
        content: {
            text: [
                {
                    headline: '2012',
                    list: [
                        {
                            name:
                                "<a href='http://www.diamondleague.com/' target='_blank' title='Diamant League website'>Diamant League</a>, track and field athletics",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'USA (New York, Eugene)'
                        }
                    ]
                },
                {
                    headline: '2011',
                    list: [
                        {
                            name:
                                "<a href='http://www.bundesliga.de/' target='_blank' title='Bundesliga website'>German Soccer League</a>",
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name:
                                "<a href='http://www.mdr.de/' target='_blank' title='MDR website'>Mitteldeutscher Rundfunk Leipzig</a>",
                            job: 'intl-broadcast-tv-graphics',
                            place: 'Germany'
                        }
                    ]
                }
            ]
        },
        className: 'module-list',
        componentType: 'ol'
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleList {...defaultProps}>Module list children</ModuleList>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

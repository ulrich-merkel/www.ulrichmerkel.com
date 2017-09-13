/* eslint-disable import/no-extraneous-dependencies, func-names */
// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleList from '../list';

describe('common/component/module/list', function () {
    const defaultProps = {
        content: {
            text: [
                {
                    headline: '2012',
                    list: [
                        {
                            name: '<a href=\'http://www.diamondleague.com/\' target=\'_blank\' title=\'Diamant League website\'>Diamant League</a>, track and field athletics',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'USA (New York, Eugene)'
                        }
                    ]
                },
                {
                    headline: '2011',
                    list: [
                        {
                            name: '<a href=\'http://www.bundesliga.de/\' target=\'_blank\' title=\'Bundesliga website\'>German Soccer League</a>',
                            job: 'intl-broadcast-virtual-graphics',
                            place: 'Germany'
                        },
                        {
                            name: '<a href=\'http://www.mdr.de/\' target=\'_blank\' title=\'MDR website\'>Mitteldeutscher Rundfunk Leipzig</a>',
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

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleList
                {...defaultProps}
            >
                Module list children
            </ModuleList>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleCornerstone } from '../cornerstone';

describe('ModuleCornerstone', function fnDescribe() {
    const props = {
        htmlElement: 'span',
        className: 'cornerstone',
        content: {
            professionalExperience: 'professionalExperience',
            professionalExperienceList: [
                {
                    headline: 'headline',
                    lead: 'lead',
                    timeStart: '20161212',
                    timeEnd: '20161224',
                    description: ['description1', 'description2']
                }
            ],
            academicEducation: 'academicEducation',
            academicEducationList: [
                {
                    headline: 'headline',
                    lead: 'lead',
                    timeStart: '20161212',
                    timeEnd: '20161224',
                    description: ['description1', 'description2'],
                    place: {}
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstone {...props}>
                Module Cornerstone Children
            </ModuleCornerstone>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstone {...props} content={null}>
                Module cornerstone children not rendered
            </ModuleCornerstone>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstone {...props} itemType={null}>
                Module cornerstone children
            </ModuleCornerstone>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

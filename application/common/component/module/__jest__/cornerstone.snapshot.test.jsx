/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleCornerstone from './../cornerstone';

describe('common/component/module/cornerstone', function () {
    const defaultProps = {
        componentType: 'span',
        className: 'cornerstone',
        content: {
            professionalExperience: 'professionalExperience',
            professionalExperienceList: [
                {
                    headline: 'headline',
                    lead: 'lead',
                    timeStart: '20161212',
                    timeEnd: '20161224',
                    description: [
                        'description1',
                        'description2'
                    ]
                }
            ],
            academicEducation: 'academicEducation',
            academicEducationList: [
                {
                    headline: 'headline',
                    lead: 'lead',
                    timeStart: '20161212',
                    timeEnd: '20161224',
                    description: [
                        'description1',
                        'description2'
                    ],
                    place: {}
                }
            ]
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleCornerstone
                {...defaultProps}
            >
                Module Cornerstone Children
            </ModuleCornerstone>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if content is empty', function () {
        const tree = renderer.create(
            <ModuleCornerstone
                {...defaultProps}
                content={null}
            >
                Module Cornerstone Children not rendered
            </ModuleCornerstone>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

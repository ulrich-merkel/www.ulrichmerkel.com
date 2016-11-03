/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../cornerstone';

describe('component/module/cornerstone', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested
                    componentType='span'
                    className='foo'
                    content={{
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
                    }}
                >
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});

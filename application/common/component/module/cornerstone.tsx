/**
 * Es6 module for a cornerstone module.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import { isValidArray } from '../../utils/array';
import { Headline } from '../element/headline';
import { List } from '../element/list';
import { ListItem } from '../element/list-item';
import { View } from '../element/view';
import { ModuleCornerstoneItemEmployee } from './cornerstone/item-employee';
import { ModuleCornerstoneItemEducation } from './cornerstone/item-education';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        professionalExperience?: string;
        professionalExperienceList?: {
            description: string[];
            headline: string;
            lead: string;
            offset: string;
            timeEnd: string;
            timeStart: string;
        }[];
        academicEducation?: string;
        academicEducationList?: {
            description: string[];
            headline: string;
            lead: string;
            offset: string;
            place: Record<string, unknown>;
            timeEnd: string;
            timeStart: string;
        }[];
    };
    itemType?: string;
    role?: string;
};

/**
 * Function representing a cornerstone module.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleCornerstone: FunctionComponent<Props> = (props) => {
    const { children, className, content, itemType, role } = props;

    if (
        !content ||
        (!isValidArray(content.academicEducationList) &&
            !isValidArray(content.professionalExperienceList))
    ) {
        return null;
    }

    const componentClassName = classnames('m-cornerstone', className);

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            <ListItem className="m-cornerstone__item--center">
                <Headline className="m-cornerstone__headline" htmlElement="h3">
                    {content.professionalExperience}
                </Headline>
            </ListItem>

            {isValidArray(content.professionalExperienceList) &&
                content.professionalExperienceList.map(function fnMap(
                    value,
                    index
                ) {
                    return (
                        <ModuleCornerstoneItemEmployee
                            key={shortid.generate()}
                            headline={value.headline}
                            lead={value.lead}
                            timeStart={value.timeStart}
                            timeEnd={value.timeEnd}
                            description={value.description}
                            offset={value.offset}
                            cssModifier={index % 2 === 0 ? 'left' : 'right'}
                        />
                    );
                })}

            <ListItem className="m-cornerstone__item--center">
                <Headline className="m-cornerstone__headline" htmlElement="h3">
                    {content.academicEducation}
                </Headline>
            </ListItem>

            {isValidArray(content.academicEducationList) &&
                content.academicEducationList.map(function fnMap(value, index) {
                    return (
                        <ModuleCornerstoneItemEducation
                            key={shortid.generate()}
                            headline={value.headline}
                            lead={value.lead}
                            timeStart={value.timeStart}
                            timeEnd={value.timeEnd}
                            description={value.description}
                            place={value.place}
                            offset={value.offset}
                            cssModifier={index % 2 === 0 ? 'left' : 'right'}
                        />
                    );
                })}

            <ListItem className="m-cornerstone__item--start">
                <View className="m-cornerstone__bubble c-font-icon--bookmark2" />
            </ListItem>

            {children}
        </List>
    );
};

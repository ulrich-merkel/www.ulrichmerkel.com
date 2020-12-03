/**
 * Es6 module for a cornerstone module.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import {
    default as React,
    Fragment,
    FunctionComponent,
    ReactNode
} from 'react';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import { isValidArray } from '../../utils/array';
import { List } from '../element/list';
import { ListItem } from '../element/list-item';
import { View } from '../element/view';
import { ModuleCornerstoneHeadline } from './cornerstone/headline';
import { ModuleCornerstoneEmployee } from './cornerstone/employee';
import { ModuleCornerstoneEducation } from './cornerstone/education';

type Props = {
    children?: ReactNode;
    className?: string;
    content?: {
        professionalExperience?: string;
        professionalExperienceList?: {
            description?: string[];
            headline?: string;
            lead?: string;
            offset?: string;
            timeEnd?: string;
            timeStart?: string;
        }[];
        academicEducation?: string;
        academicEducationList?: {
            description?: string[];
            headline?: string;
            lead?: string;
            offset?: string;
            place?: {
                name?: string;
                streetAddress?: string;
                addressLocality?: string;
                sameAs?: string;
            };
            timeEnd?: string;
            timeStart?: string;
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
        isEmpty(content) ||
        (!isValidArray(content.academicEducationList) &&
            !isValidArray(content.professionalExperienceList))
    ) {
        return null;
    }

    const componentClassName = classnames('m-cornerstone', className);

    return (
        <List className={componentClassName} {...{ itemType, role }}>
            {isValidArray(content.professionalExperienceList) && (
                <Fragment>
                    <ModuleCornerstoneHeadline
                        headline={content.professionalExperience}
                    />
                    <ModuleCornerstoneEmployee
                        list={content.professionalExperienceList}
                    />
                </Fragment>
            )}

            {isValidArray(content.academicEducationList) && (
                <Fragment>
                    <ModuleCornerstoneHeadline
                        headline={content.academicEducation}
                    />
                    <ModuleCornerstoneEducation
                        list={content.academicEducationList}
                    />
                </Fragment>
            )}

            <ListItem className="m-cornerstone__item--start">
                <View className="m-cornerstone__bubble c-font-icon--bookmark2" />
            </ListItem>

            {children}
        </List>
    );
};

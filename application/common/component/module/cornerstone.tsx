/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import { Headline } from '../element/headline';
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
            place: {};
            timeEnd: string;
            timeStart: string;
        }[];
    };
    htmlElement?: keyof JSX.IntrinsicElements;
    itemType?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleCornerstone: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content,
        htmlElement: HtmlElement = 'ol',
        itemType = 'https://schema.org/ItemList',
        ...otherProps
    } = props;

    if (
        !content ||
        !content.academicEducationList ||
        !content.professionalExperienceList
    ) {
        return null;
    }

    const componentClassName = classnames('m-cornerstone', className);
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <HtmlElement
            className={componentClassName}
            role="list"
            {...componentSchema}
            {...otherProps}
        >
            <li className="m-cornerstone__item--center">
                <Headline className="m-cornerstone__headline" htmlElement="h3">
                    {content.professionalExperience}
                </Headline>
            </li>

            {content.professionalExperienceList &&
                content.professionalExperienceList.map(function (value, index) {
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

            <li className="m-cornerstone__item--center">
                <Headline className="m-cornerstone__headline" htmlElement="h3">
                    {content.academicEducation}
                </Headline>
            </li>

            {content.academicEducationList &&
                content.academicEducationList.map(function (value, index) {
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

            <li className="m-cornerstone__item--start">
                <div className="m-cornerstone__bubble c-font-icon--bookmark2" />
            </li>

            {children}
        </HtmlElement>
    );
};
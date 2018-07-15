/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/headline
 * @requires common/component/module/cornerstone/item-employee
 * @requires common/component/module/cornerstone/item-education
 *
 * @changelog
 * - 0.0.4 Excluded headline/lead into separate component
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import Headline from '../element/headline';
import ModuleCornerstoneItemEmployee from './cornerstone/item-employee';
import ModuleCornerstoneItemEducation from './cornerstone/item-education';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleCornerstone(props) {

    const {
        componentType,
        className,
        itemType,
        content,
        children,
        ...otherProps
    } = props;

    if (!content || !content.academicEducationList || !content.professionalExperienceList) {
        return null;
    }

    const ComponentType = componentType;
    const componentClassName = classnames(
        'm-cornerstone',
        className
    );
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <ComponentType
            className={componentClassName}
            role='list'
            {...componentSchema}
            {...otherProps}
        >

            <li className='m-cornerstone__item--center'>
                <Headline className='m-cornerstone__headline' htmlElement='h3'>
                    {content.professionalExperience}
                </Headline>
            </li>

            {content.professionalExperienceList && content.professionalExperienceList.map((value, index) => {
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

            <li className='m-cornerstone__item--center'>
                <Headline className='m-cornerstone__headline' htmlElement='h3'>
                    {content.academicEducation}
                </Headline>
            </li>

            {content.academicEducationList && content.academicEducationList.map((value, index) => {
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

            <li className='m-cornerstone__item--start'>
                <div className='m-cornerstone__bubble c-font-icon--bookmark2' />
            </li>

            {children}

        </ComponentType>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [componentType='article'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 * @property {string} [itemType='https://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] - The component translation config
 */
ModuleCornerstone.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.shape({
        professionalExperience: PropTypes.string,
        professionalExperienceList: PropTypes.arrayOf(
            PropTypes.shape({
                headline: PropTypes.string,
                lead: PropTypes.string,
                timeStart: PropTypes.string,
                timeEnd: PropTypes.string,
                description: PropTypes.arrayOf(PropTypes.string)
            })
        ),
        academicEducation: PropTypes.string,
        academicEducationList: PropTypes.arrayOf(
            PropTypes.shape({
                headline: PropTypes.string,
                lead: PropTypes.string,
                timeStart: PropTypes.string,
                timeEnd: PropTypes.string,
                description: PropTypes.arrayOf(PropTypes.string),
                place: PropTypes.object
            })
        )
    })
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {Object}
* @see ModuleCornerstone.propTypes
*/
ModuleCornerstone.defaultProps = {
    componentType: 'ol',
    itemType: 'https://schema.org/ItemList',
    content: {}
};

export default ModuleCornerstone;

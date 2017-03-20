/* eslint-disable immutable/no-mutation, react/jsx-indent */
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
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/headline
 * @requires common/component/element/paragraph
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import Headline from './../../element/headline';
import P from './../../element/paragraph';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleCornerstoneItemEmployee(props) {

    const {
        cssModifier,
        offset,
        headline,
        lead,
        timeStart,
        timeEnd,
        description,
        ...otherProps
    } = props;

    const composedListItemClassName = classnames(
        cssModifier ? `m-cornerstone__item--${cssModifier}` : 'm-cornerstone__item',
        offset ? `has-offset--${offset}` : ''
    );

    return (
        <li className={composedListItemClassName} itemProp='itemListElement' itemScope itemType='https://schema.org/EmployeeRole' {...otherProps}>
            <div className='m-cornerstone__description'>
                <div className='m-cornerstone__description-content'>
                    <Headline className='m-cornerstone__headline' itemProp='roleName' htmlElement='h4'>
                        {headline}
                    </Headline>
                    <P className='m-cornerstone__company'>
                        <strong>{lead}</strong>
                    </P>
                    <P className='m-cornerstone__time' itemProp='description'>
                        (<time className='c-time' itemProp='startDate'>{timeStart}</time> - <time className='c-time'>{timeEnd}</time>)
                    </P>
                    {description.map((value) => {
                        /**
                         * DangerouslySetInnerHTML due to reacts double escaping. Otherwise html elements
                         * are not possible to be set via translation strings.
                         *
                         * @see {@link https://facebook.github.io/react/tips/dangerously-set-inner-html.html}
                         */
                        return (
                            <P
                                key={shortid.generate()}
                                className='m-cornerstone__text'
                                itemProp='description'
                                dangerouslySetInnerHTML={{ __html: value }}
                            />
                        );

                    })}
                </div>
            </div>
            <div className='m-cornerstone__bubble' />
        </li>
    );

}

/**
 * Valiate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [headline] - The item headline
 * @property {string} [lead] - The item subline
 * @property {string} [timeStart] - The item start time
 * @property {string} [timeEnd] - The item end time
 * @property {Array} [description=[]] - The items description
 * @property {string} [cssModifier] - The bem css modifier
 * @property {string} [offset] - The css top offset to display items nice
 */
ModuleCornerstoneItemEmployee.propTypes = {
    headline: PropTypes.string, // eslint-disable-line react/require-default-props
    lead: PropTypes.string, // eslint-disable-line react/require-default-props
    timeStart: PropTypes.string, // eslint-disable-line react/require-default-props
    timeEnd: PropTypes.string, // eslint-disable-line react/require-default-props
    description: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    cssModifier: PropTypes.string, // eslint-disable-line react/require-default-props
    offset: PropTypes.string // eslint-disable-line react/require-default-props
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleCornerstoneItemEmployee.propTypes
 */
ModuleCornerstoneItemEmployee.defaultProps = {
    description: []
};

export default ModuleCornerstoneItemEmployee;

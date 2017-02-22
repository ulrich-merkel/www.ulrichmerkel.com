/* eslint-disable react/no-danger, immutable/no-mutation */
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
 * @version 0.0.3
 *
 * @requires react
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/headline
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 *
 * @example <caption>Example usage (jsx)</caption>
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import Headline from './../element/headline';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleList(props) {

    const {
        componentType,
        className,
        itemType,
        content,
        children
    } = props;

    const ComponentType = componentType;
    const componentClassName = classnames(
        'm-list--broadcast',
        className
    );

    return (
        <ComponentType className={componentClassName} itemScope itemType={itemType} role='list'>

            {content.text && content.text.map((entry) => {
                return (
                    <li className='m-list__item' key={shortid.generate()}>
                        <Headline className='m-list__alt-headline' isCentered={false} htmlElement='h3'>
                            {entry.headline}
                        </Headline>
                        <ul className='m-list'>
                            {entry.list && entry.list.map((job) => {
                                const text = `${job.name}, ${job.job} - ${job.place}`;
                                return (
                                    <li
                                        key={shortid.generate()}
                                        className='m-list__item'
                                        itemProp='itemListElement'
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
            {children}
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [componentType='ul'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {string} [itemType='http://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @property {Array|string} [children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {Object} [content={}] - The component translation config
 */
ModuleList.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    itemType: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    content: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleList.propTypes
 */
ModuleList.defaultProps = {
    componentType: 'ul',
    itemType: 'http://schema.org/ItemList',
    content: {}
};

export default ModuleList;

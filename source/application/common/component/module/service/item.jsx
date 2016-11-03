/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires classnames
 * @requires component/element/headline
 * @requires component/element/paragraph
 * @requires component/element/icon
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Headline from './../../element/headline';
import P from './../../element/paragraph';
import Icon from './../../element/icon';

/**
 * Function representing a component to return a single react child element.
 *
 * @constructor
 * @private
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function ComponentModuleServiceItem(props) {

    const {
        headline,
        text,
        index,
        icon,
        isClear
    } = props;

    if (isClear) {
        return (
            <li className='m-service__item--clear' />
        );
    }

    const componentListItemClassName = classnames({
        'm-service__item--right': index % 3 === 1,
        'm-service__item--left': index % 3 === 0
    });
    const componentListItemIconClassName = classnames(
        'm-service__icon-font'
    );

    return (
        <li className={componentListItemClassName} itemProp='itemListElement'>
            <div className='m-service__content'>
                <div className='m-service__icon'>
                    <Icon className={componentListItemIconClassName} icon={icon} />
                </div>
                <div className='m-service__description'>
                    <Headline className='m-service__headline' htmlElement='h3'>
                        {headline}
                    </Headline>
                    <P
                        className='m-service__text'
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            </div>
        </li>
    );

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [headline] The component element headline text
 * @property {string} [text] The component element text
 * @property {number} [index] The component element index count
 * @property {string} [iconClassName] The component element additional icon classname
 * @property {boolean} [isClear] Whether this is a cleared entry or not
 */
ComponentModuleServiceItem.propTypes = {
    headline: PropTypes.string,
    text: PropTypes.string,
    index: PropTypes.number,
    icon: PropTypes.string,
    isClear: PropTypes.bool
};

export default ComponentModuleServiceItem;

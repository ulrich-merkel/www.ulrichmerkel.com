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
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires common/component/element/headline
 * @requires common/component/element/paragraph
 * @requires common/component/element/icon
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Headline from './../../element/headline';
import P from './../../element/paragraph';
import Icon from './../../element/icon';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {React.Element} React component markup
 */
function ModuleServiceItem(props) {

    const {
        headline,
        text,
        index,
        icon,
        isClear
    } = props;

    if (isClear) {
        return (
            <li className='m-service__item--clear' aria-hidden='true' />
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
 * @property {string} [headline=''] - The component element headline text
 * @property {string} [text=''] - The component element text
 * @property {number} [index=0] - The component element index count
 * @property {string} [icon=''] - The component element additional icon type
 * @property {boolean} [isClear=false] - Whether this is a cleared entry or not
 */
ModuleServiceItem.propTypes = {
    headline: PropTypes.string,
    text: PropTypes.string,
    index: PropTypes.number,
    icon: PropTypes.string,
    isClear: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleServiceItem.propTypes
 */
ModuleServiceItem.defaultProps = {
    headline: '',
    text: '',
    index: 0,
    icon: '',
    isClear: false
};

export default ModuleServiceItem;

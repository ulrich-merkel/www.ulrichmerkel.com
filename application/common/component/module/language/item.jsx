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
 * @version 0.0.2
 *
 * @requires react
 * @requires classnames
 * @requires component/grid/col
 * @requires component/element/headline
 * @requires component/element/meta
 *
 * @changelog
 * - 0.0.2 removed inline style for csp support
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import GridCol from './../../grid/col';
import Headline from './../../element/headline';
import Meta from './../../element/meta';

/**
 * Helper function to get style classNames for css3 rotate transform.
 *
 * @function
 * @private
 * @param {string|number} percent The percent value to be calculated in degrees
 * @returns {Object} The classNames config for left and right circle
 */
function getCssTransformRotate(percent) {

    let left = '',
        right = '',
        deg = 0,
        perc = percent;

    if (typeof perc === 'string') {
        perc = parseInt(perc, 10);
    }

    if (perc <= 50) {
        deg = Math.round(180 - (perc / 100 * 360));
        left = 'is-hidden';
        right = `is-rotated-${deg}`;
    } else {
        deg = Math.round(180 - ((perc - 50) / 100 * 360));
        left = `is-rotated-${deg}`;
    }

    return {
        left,
        right
    };

}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleLanguageItem(props) {

    const {
        headline,
        lead,
        percent
    } = props;

    const rotatedCssTransform = getCssTransformRotate(percent);

    return (
        <GridCol cols={4} itemProp='itemListElement' itemScope itemType='https://schema.org/Language'>
            <div className='c-box'>
                <Headline className='c-box__header' htmlElement='h3'>
                    {headline}
                </Headline>
                <div className='c-box__content'>
                    <div className='c-pie'>
                        <div className='c-pie__circle' data-percent={percent} data-text={lead}>
                            <div className='c-pie__left'>
                                <span className={classnames('c-pie__mask', rotatedCssTransform.left)} />
                            </div>
                            <div className='c-pie__right'>
                                <span className={classnames('c-pie__mask', rotatedCssTransform.right)} />
                            </div>
                        </div>
                    </div>
                </div>
                <Meta itemProp='name' content={headline} />
            </div>
        </GridCol>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} [headline] The language item headline
 * @property {string} [lead] The language item lead text
 * @property {string|number} [percent=0] The language capability in percent
 */
ModuleLanguageItem.propTypes = {
    headline: PropTypes.string,
    lead: PropTypes.string,
    percent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleLanguageItem.propTypes
 */
ModuleLanguageItem.defaultProps = {
    percent: 0
};

export default ModuleLanguageItem;

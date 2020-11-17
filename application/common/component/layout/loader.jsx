/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Layout components merge modules to bigger parts of the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://codeburst.io/how-to-create-a-simple-css-loading-spinner-make-it-accessible-e5c83c2e464c}
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The component content config
 * @returns {ReactElement} React component markup
 */
export function LayoutLoader(props) {
    const { content } = props;

    const contentSection = getContentSection(content);

    return (
        <dialog
            className="l-dialog--loading"
            role="alert"
            aria-live="assertive"
        >
            <div className="l-dialog__content">
                <div className="c-flip">
                    <div className="c-flip__front">
                        {contentSection('headline')}
                    </div>
                    <div className="c-flip__back">{contentSection('lead')}</div>
                </div>
            </div>
            <div className="l-dialog__background" />
        </dialog>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
LayoutLoader.propTypes = {
    content: PropTypes.shape({
        headline: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
        lead: PropTypes.string // eslint-disable-line react/no-unused-prop-types
    })
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
LayoutLoader.defaultProps = {
    content: {}
};

export const LayoutLoaderConnected = addContent('LayoutLoader')(LayoutLoader);

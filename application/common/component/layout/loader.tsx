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
import { default as React, FunctionComponent } from 'react';

import { addContent } from '../decorator/add-content';
import { getContentSection } from '../../utils/content';

type Props = {
    content: {
        headline: string;
        lead: string;
    };
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The component content config
 * @returns {ReactElement} React component markup
 */
export const LayoutLoader: FunctionComponent<Props> = (props) => {
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
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const LayoutLoaderConnected = addContent('LayoutLoader')(LayoutLoader);

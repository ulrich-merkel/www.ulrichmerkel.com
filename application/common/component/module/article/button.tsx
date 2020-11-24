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
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';

import { Button } from '../../element/button';
import { P } from '../../element/paragraph';

type Props = {
    btnLabel?: string;
    btnTitle?: string;
    btnTo?: string;
    className?: string;
    isDialog?: boolean;
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {string} [props.btnLabel=''] - The button label
 * @param {string} [props.btnTitle=''] - The button title
 * @param {string} [props.btnTo=''] - The button link target
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {boolean} [props.isDialog=false] - Flag if this is rendering within a dialog
 * @returns {ReactElement} React component markup
 */
export const ModuleArticleButton: FunctionComponent<Props> = (props) => {
    const { btnLabel = '', btnTitle = '', btnTo = '', className, isDialog = false } = props;

    if (!btnTo || !btnLabel || isDialog) {
        return null;
    }

    const composedClassName = classnames(className, 'hide-on-print');

    return (
        <P className={composedClassName} isCentered>
            <Button title={btnTitle || btnLabel} to={btnTo}>
                {btnLabel}
            </Button>
        </P>
    );
}

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
import { isEmpty } from 'lodash';

import { ModulePerson } from '../person';

type Props = {
    content?: {
        name?: string;
        streetAddress?: string;
        postalCode?: string;
        locality?: string;
        email?: string;
        phone?: string;
        phoneNumbers?: string;
        website?: string;
    };
    hasColumns2?: boolean;
    isCentered?: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The person content's text
 * @param {boolean} [props.hasColumns2=false] - Whether the component text should be clusted in columns via css or not
 * @param {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @returns {ReactElement} React component markup
 */
export const ModuleTextPerson: FunctionComponent<Props> = (props) => {
    const { content, hasColumns2 = false, isCentered = false } = props;

    if (!content || isEmpty(content)) {
        return null;
    }

    const composedClassName = classnames(
        {
            'has-columns--2': hasColumns2,
            'is-centered': isCentered
        },
        'm-text__content'
    );

    return <ModulePerson className={composedClassName} content={content} />;
};

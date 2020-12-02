/**
 * Es6 module for rendering information about a person.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

import { View } from '../element/view';
import { ModulePersonAddress } from './person/address';
import { ModulePersonEmail } from './person/email';
import { ModulePersonName } from './person/name';
import { ModulePersonTelephone } from './person/telephone';
import { ModulePersonWebsite } from './person/website';

type Props = {
    className?: string;
    isCentered?: boolean;
    itemType?: string;
    children?: ReactNode;
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
};

/**
 * Function representing some information about a single person.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModulePerson: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        content,
        isCentered = false,
        itemType = 'http://schema.org/Person'
    } = props;

    if (!content) {
        return null;
    }

    const componentClassName = classnames(
        {
            'is-centered': isCentered
        },
        'm-person',
        className
    );

    return (
        <View className={componentClassName} {...{ itemType }}>
            <ModulePersonName {...{ content }} />
            <ModulePersonAddress {...{ content }} />
            <ModulePersonEmail {...{ content }} />
            <ModulePersonTelephone {...{ content }} />
            <ModulePersonWebsite {...{ content }} />
            {children}
        </View>
    );
};

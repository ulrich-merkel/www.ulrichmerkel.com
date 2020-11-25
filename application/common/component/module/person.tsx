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
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

import { P } from '../element/paragraph';

type Props = {
    htmlElement?: keyof JSX.IntrinsicElements;
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
 * Function representing a component to return a single react child element.
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
        htmlElement: HtmlElement = 'div',
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
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <HtmlElement className={componentClassName} {...componentSchema}>
            {content?.name && (
                <P className="m-person__name">
                    <strong>{content.name}</strong>
                </P>
            )}
            {content?.streetAddress &&
                content?.postalCode &&
                content?.locality && (
                    <address
                        className="m-person__address c-type--address"
                        itemProp="address"
                        itemScope
                        itemType="http://schema.org/Address"
                    >
                        <span
                            className="m-person__street-address"
                            itemProp="street-address"
                        >
                            {content.streetAddress}
                        </span>
                        <span
                            className="m-person__postal-code"
                            itemProp="postal-code"
                        >
                            {content.postalCode}
                        </span>
                        <span
                            className="m-person__locality"
                            itemProp="locality"
                        >
                            {content.locality}
                        </span>
                    </address>
                )}
            {content?.email && (
                <P className="m-person__email">
                    <abbr title="E-Mail address">E.</abbr>{' '}
                    <a href={`mailto:${content.email}`} itemProp="email">
                        {content.email}
                    </a>
                </P>
            )}
            {content?.phoneNumbers && content?.phone && (
                <P className="m-person__phone">
                    <abbr title="Phonenumber">P.</abbr>{' '}
                    <a
                        href={`tel:${content.phoneNumbers}`}
                        itemProp="telephone"
                    >
                        {content.phone}
                    </a>
                </P>
            )}
            {content?.website && (
                <P className="m-person__website">
                    <abbr title="Website">W.</abbr>{' '}
                    <a href={`${content.website}`}>{content.website}</a>
                </P>
            )}
            {children}
        </HtmlElement>
    );
};

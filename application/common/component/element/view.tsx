/* eslint-disable react/require-default-props, react/display-name */
/**
 * Rendering a default view html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import {
    default as React,
    ElementRef,
    forwardRef,
    FunctionComponent,
    ReactNode
} from 'react';
import { getItemTypeAttributes } from '../utils/micro-data';

type Props = {
    children?: ReactNode;
    className?: string;
    hidden?: boolean;
    id?: string;
    itemProp?: string;
    itemType?: string;
    role?: string;
};

/**
 * Function representing a default html view (div).
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const View: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>(
    (props: Props, ref: ElementRef<any>) => {
        const {
            children,
            className,
            hidden,
            id,
            itemProp,
            itemType,
            role,
            ...otherProps
        } = props;

        const itemTypeAttributes = getItemTypeAttributes(itemType);

        return (
            <div
                {...{ className, hidden, id, itemProp, ref, role }}
                {...itemTypeAttributes}
                {...otherProps}
            >
                {children}
            </div>
        );
    }
);

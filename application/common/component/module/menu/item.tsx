/**
 * Es6 module for a menu item.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import {
    default as React,
    Fragment,
    FunctionComponent,
    ReactNode
} from 'react';
import classnames from 'classnames';

import { A } from '../../element/a';
import { Icon } from '../../element/icon';

type Props = {
    children?: ReactNode;
    icon?: string;
    isLabelHidden?: boolean;
    itemPropA?: string;
    label?: string;
    path?: string;
    title?: string;
};

/**
 * Function representing a menu item.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {string} [props.icon=''] - The icon type
 * @param {boolean} [props.isLabelHidden=false] - Whether the label is hidden or not
 * @param {string} [props.itemPropA='url'] - The link element itemProp attribute
 * @param {string} [props.label=''] - The items label content
 * @param {string} [props.path=''] - The react-router link
 * @param {string} [props.title=''] - The items title content
 * @returns {ReactElement} React component markup
 */
export const ModuleMenuItem: FunctionComponent<Props> = (props) => {
    const {
        children,
        icon = '',
        isLabelHidden = false,
        itemPropA = 'url',
        label = '',
        path = '',
        title = ''
    } = props;

    if (!path) {
        return null;
    }

    const labelClassName = classnames(
        {
            'is-visually-hidden': isLabelHidden
        },
        'm-menu__label'
    );

    return (
        <Fragment>
            <A
                itemProp={itemPropA}
                to={path}
                title={title}
                className="m-menu__item"
                role="menuitem"
                exact
            >
                <Icon className="m-menu__icon" icon={icon} />
                <span className={labelClassName} itemProp="name">
                    {label}
                </span>
            </A>
            {children}
        </Fragment>
    );
};

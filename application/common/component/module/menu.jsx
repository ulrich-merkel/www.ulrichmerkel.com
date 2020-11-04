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
 * @requires shortid
 * @requires common/component/module/menu/item
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import ModuleMenuItem from './menu/item';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @param {string} [props.componentType='ul'] - The component element type used for React.createElement
 * @param {object} [props.content={}] - The component translation config
 * @param {string} [props.itemType='https://schema.org/ItemList'] - The schema.org itemtype url attribute
 * @returns {ReactElement|null} React component markup
 */
function ModuleMenu(props) {
    const {
        children,
        className,
        componentType,
        content,
        itemType,
        ...otherProps
    } = props;

    if (!Array.isArray(content.list) || !content.list.length) {
        return null;
    }

    const ComponentType = componentType;
    const componentClassName = classnames(
        'm-menu',
        content.name ? `m-menu--${content.name}` : '',
        className
    );
    const componentSchema = itemType ? { itemScope: true, itemType } : null;

    return (
        <ComponentType
            className={componentClassName}
            role='menu'
            {...componentSchema}
            {...otherProps}
        >
            {content.list.map((value) => {
                return (
                    <ModuleMenuItem
                        key={shortid.generate()}
                        path={value.path}
                        title={value.title}
                        label={value.label}
                        itemType={value.itemType}
                        icon={value.icon}
                        isLabelHidden={value.isLabelHidden}
                        itemPropA={value.itemPropA}
                    >
                        {value.metaLinkUrl && <link itemProp='url' href={value.metaLinkUrl} />}
                    </ModuleMenuItem>
                );
            })}
            {children}
        </ComponentType>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ModuleMenu.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    componentType: PropTypes.string,
    content: PropTypes.shape({
        name: PropTypes.string,
        list: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string,
                title: PropTypes.string,
                label: PropTypes.string,
                children: PropTypes.node,
                itemType: PropTypes.string,
                icon: PropTypes.string,
                isLabelHidden: PropTypes.bool,
                itemPropA: PropTypes.string
            })
        )
    }),
    itemType: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ModuleMenu.defaultProps = {
    componentType: 'ul',
    content: {},
    itemType: 'https://schema.org/ItemList'
};

export default ModuleMenu;

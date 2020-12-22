/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://stackoverflow.com/questions/30115324/pass-props-in-link-react-router}
 */
import { default as React, FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import { A } from '../../element/a';
import { Icon } from '../../element/icon';
import { ListItem } from '../../element/list-item';
import { Picture } from '../../element/picture';
import { Meta } from '../../element/meta';
import { isValidString } from '../../../utils/string';

type Props = {
    path?: string;
    headline?: string;
    img?: {
        name: string;
        ext: '' | 'jpg' | 'png';
        path: string;
        alt: string;
        sizes: [];
    };
    lead?: string;
    children?: ReactNode;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleFeaturedItem: FunctionComponent<Props> = (props) => {
    const { path = '', headline, img, children } = props;

    if (!isValidString(path)) {
        return null;
    }

    const componentListItemClassName = classnames('m-featured__item');
    const to = path.startsWith('/') ? `/work${path}` : `/work/${path}`;

    return (
        <ListItem
            className="m-featured__list-item"
            itemProp="itemListElement"
            itemType="https://schema.org/SiteNavigationElement"
        >
            <A className={componentListItemClassName} title={headline} to={to}>
                <span className="m-featured__hover">
                    <span className="m-featured__text">
                        <span
                            aria-level={3}
                            className="m-featured__headline"
                            role="heading"
                        >
                            {headline}
                        </span>
                        <Icon className="m-featured__icon" icon="plus" />
                    </span>
                </span>

                {!isEmpty(img) && (
                    <Picture
                        name={img.name}
                        ext={img.ext}
                        path={img.path}
                        alt={img.alt}
                        sizes={img.sizes}
                        className="m-featured__picture"
                    />
                )}

                {children}

                <Meta itemProp="name" content={headline} />
            </A>
        </ListItem>
    );
};

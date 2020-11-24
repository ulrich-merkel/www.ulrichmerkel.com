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

import { A } from '../../element/a';
import { Icon } from '../../element/icon';
import { Picture } from '../../element/picture';
import { Meta } from '../../element/meta';

type Props = {
    path: string;
    headline: string;
    img: {
        name: string;
        ext: "" | "jpg" | "png";
        path: string;
        alt: string;
        sizes: [];
    }
    children: ReactNode;
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

    const componentListItemClassName = classnames('m-featured__item');

    return (
        <li
            className="m-featured__list-item"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
        >
            <A
                to={`/work/${path}`}
                className={componentListItemClassName}
                title={headline}
            >
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

                <Picture
                    name={img.name}
                    ext={img.ext}
                    path={img.path}
                    alt={img.alt}
                    sizes={img.sizes}
                    className={'m-featured__picture'}
                />

                {children}

                <Meta itemProp="name" content={headline} />
            </A>
        </li>
    );
}

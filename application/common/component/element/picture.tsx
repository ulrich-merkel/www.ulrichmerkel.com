/* react/prefer-stateless-function */
/**
 * Rendering a picture html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, ReactNode } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';
import { noop } from 'lodash';

import { isValidArray } from '../../utils/array';
import { PictureSource } from './picture-source';

type Props = {
    alt?: string;
    children?: ReactNode;
    className?: string;
    ext?: 'jpg' | 'png' | '';
    htmlElement?: keyof JSX.IntrinsicElements;
    name?: string;
    path?: string;
    pictureRef?: () => void;
    placeholder?: string;
    sizes?: {
        width: number;
        height: number;
        minWidth: number;
    }[];
};

/**
 * Class representing a html picture element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @augments React.Component
 * @property {string} [props.alt=''] - The image description
 * @property {Array|string} [props.children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {string} [props.className] - The component css class names, will be merged into component default classNames
 * @property {string} [props.ext=''] - The image extension
 * @property {string} [props.htmlElement='picture'] - The component element type used for React.createElement
 * @property {string} [props.name=''] - The image name
 * @property {string} [props.path=''] - The image path (folder)
 * @property {Function} [props.pictureRef=noop] - Custom callback to get the img dom node
 * @property {string} [props.placeholder='data:image/gifbase64,...'] - The image placeholder to be set as src to prevent doubled download
 * @property {Array.<object>} [props.sizes='[]'] - The responsive sizes config
 */
export class Picture extends Component<Props> {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            alt = '',
            children,
            className,
            ext = '',
            htmlElement: HtmlElement = 'picture',
            name = '',
            path = '',
            pictureRef = noop,
            placeholder = 'data:image/gifbase64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            sizes = [],
            ...otherProps
        } = this.props;

        if (!name) {
            return null;
        }

        const componentClassName = classnames('c-picture', className);

        return (
            <HtmlElement
                className={componentClassName}
                itemScope
                itemType="http://schema.org/ImageObject"
                ref={pictureRef}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {isValidArray(sizes) &&
                    sizes.map(function (value) {
                        const { height, minWidth, width } = value;

                        return (
                            <PictureSource
                                key={shortid.generate()}
                                {...{
                                    ext,
                                    height,
                                    minWidth,
                                    name,
                                    path,
                                    width
                                }}
                            />
                        );
                    })}
                <img
                    alt={alt}
                    className="c-picture__img"
                    itemProp="contentUrl"
                    src={placeholder}
                    srcSet={`${path}${name}.${ext}`}
                />
                {children}
            </HtmlElement>
        );
    }
}

/**
 * Rendering a source html tag for the use in a picture element.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://css-tricks.com/using-webp-images/}
 */
import { default as React, Fragment, FunctionComponent } from 'react';
import classnames from 'classnames';

type Props = {
    className?: string;
    ext: 'jpg' | 'png' | '';
    height: number;
    minWidth: number;
    name: string;
    path: string;
    width: number;
};

/**
 * Small helper to get correct type attribute.
 *
 * @private
 * @param {string} ext - The file extension
 * @returns {string} The source element's type description
 */
export function getType(ext: string): string {
    switch (ext) {
        case 'jpg':
            return 'image/jpeg';
        default:
            return `image/${ext}`;
    }
}

/**
 * Function representing a source element to used in html pictures.
 *
 * @function
 * @param {object} props - The current component props
 * @param {string} props.ext - The image extension (jpg, png)
 * @param {string} props.name - The image name
 * @param {string} props.path - The image path (folder)
 * @param {number} props.width - The image width (for dynamically creating names)
 * @param {number} props.height - The image height (for dynamically creating names)
 * @param {number} props.minWidth - The mediaquery min-width value
 * @param {string} [props.className] - The component css class names, will be merged into component default classNames
 * @returns {ReactElement} React component markup
 */
export const PictureSource: FunctionComponent<Props> = (props) => {
    const { className, ext, height, minWidth, name, path, width } = props;

    const composedClassName = classnames('c-picture__source', className);
    const srcSet = `${path}${name}@${width}x${height}`;
    const media = `(min-width: ${minWidth}px)`;

    return (
        <Fragment>
            <source
                className={composedClassName}
                key={`${srcSet}.webp`}
                media={media}
                srcSet={`${srcSet}.webp`}
                type={getType('webp')}
            />
            <source
                className={composedClassName}
                key={`${srcSet}.${ext}`}
                media={media}
                srcSet={`${srcSet}.${ext}`}
                type={getType(ext)}
            />
        </Fragment>
    );
};

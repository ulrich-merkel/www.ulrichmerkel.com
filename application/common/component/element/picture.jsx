/* eslint-disable immutable/no-mutation, immutable/no-this, react/prefer-stateless-function */
/**
 * Rendering a picture html tag.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.wi9haug7n}
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/picture-source
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';

import ElementPictureSource from './picture-source';

const noop = Function.prototype;

/**
 * Class representing a component to return a single react child element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
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
class ElementPicture extends Component {
    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            alt,
            children,
            className,
            ext,
            htmlElement,
            name,
            path,
            pictureRef,
            placeholder,
            sizes,
            ...otherProps
        } = this.props;

        if (!name) {
            return null;
        }

        const ComponentType = htmlElement;
        const componentClassName = classnames('c-picture', className);

        return (
            <ComponentType
                className={componentClassName}
                itemScope
                itemType="http://schema.org/ImageObject"
                ref={pictureRef}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            >
                {sizes &&
                    sizes.map((value) => {
                        const { height, minWidth, width } = value;

                        return (
                            <ElementPictureSource
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
            </ComponentType>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ElementPicture.propTypes = {
    alt: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    ext: PropTypes.oneOf(['jpg', 'png', '']),
    htmlElement: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
    pictureRef: PropTypes.func,
    placeholder: PropTypes.string,
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    )
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ElementPicture.defaultProps = {
    alt: '',
    ext: '',
    htmlElement: 'picture',
    name: '',
    path: '',
    pictureRef: noop,
    placeholder:
        'data:image/gifbase64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    sizes: []
};

export default ElementPicture;

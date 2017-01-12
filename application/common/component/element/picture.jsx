/**
 * Es6 module for React Component.
 * Component element React classes are small parts of the page,
 * like buttons and headlines. They often correspond to native
 * html elements and are wrapped for easier maintaning.
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
 * @requires classnames
 * @requires shortid
 * @requires common/component/element/picture-source
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import shortid from 'shortid';

import ElementPictureSource from './picture-source';

/**
 * Class representing a component to return a single react child element.
 *
 * We can't use a stateless plain JavaScript function here,
 * because we want to use refs for this component.
 *
 * @class
 * @extends React.Component
 */
class ElementPicture extends Component {

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            htmlElement,
            className,
            children,
            name,
            ext,
            path,
            alt,
            sizes,
            placeholder,
            ...otherProps
        } = this.props;

        if (!name) {
            return null;
        }

        const ComponentType = htmlElement;
        const componentClassName = classnames(
            'c-picture',
            className
        );

        return (
            <ComponentType className={componentClassName} itemScope itemType='http://schema.org/ImageObject' {...otherProps}>
                {sizes && sizes.map((value) => {
                    const {
                        width,
                        height,
                        minWidth
                    } = value;

                    return (
                        <ElementPictureSource
                            key={shortid.generate()}
                            {...{
                                path,
                                name,
                                ext,
                                width,
                                height,
                                minWidth
                            }}
                        />
                    );
                })}
                <img
                    alt={alt}
                    className='c-picture__img'
                    srcSet={`${path}${name}.${ext}`}
                    src={placeholder}
                    itemProp='contentUrl'
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
 * @type {Object}
 * @property {string} [htmlElement='picture'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names, will be merged into component default classNames
 * @property {Array|string} [children] - The component dom node childs, usally an array of components, if there is only a single child it's a string
 * @property {string} [name=''] - The image name
 * @property {string} [ext=''] - The image extension
 * @property {string} [path=''] - The image path (folder)
 * @property {string} [alt=''] - The image description
 * @property {string} [placeholder='data:image/gifbase64,...'] - The image placeholder to be set as src to prevent doubled download
 * @property {Array.<Object>} [sizes='[]'] - The responsive sizes config
 */
ElementPicture.propTypes = {
    htmlElement: PropTypes.string,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    name: PropTypes.string,
    ext: PropTypes.oneOf([
        'jpg',
        'png',
        ''
    ]),
    path: PropTypes.string,
    alt: PropTypes.string,
    placeholder: PropTypes.string,
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            width: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            height: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            minWidth: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })
    )
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ElementPicture.propTypes
 */
ElementPicture.defaultProps = {
    htmlElement: 'picture',
    name: '',
    ext: '',
    path: '',
    alt: '',
    placeholder: 'data:image/gifbase64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    sizes: []
};

export default ElementPicture;

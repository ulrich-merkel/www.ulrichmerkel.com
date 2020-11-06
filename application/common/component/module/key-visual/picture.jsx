/* eslint-disable immutable/no-mutation, immutable/no-this */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires lodash
 * @requires common/component/element/picture
 * @requires common/utils/environment
 *
 * @changelog
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 *
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { throttle } from 'lodash';

import { Picture } from '../../element/picture';
import { isBrowser } from '../../../utils/environment';

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 */
class ModuleKeyVisualPicture extends Component {
    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        /**
         * Bind manually because React class components don't auto-bind.
         *
         * A bind call or arrow function in a JSX prop will create a brand new
         * function on every single render. This is bad for performance, as it
         * will result in the garbage collector being invoked way more than is necessary.
         *
         * Unfortunately React ES6 classes do not autobind their methods like components created
         * with the older React.createClass syntax. There are several approaches to binding methods
         * for ES6 classes. A basic approach is to just manually bind the methods in the constructor.
         *
         * We also throttle the scroll function here to avoid unnecessary function calls while scrolling.
         *
         * @see {@link http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding}
         * @see {@link http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js/24679479#24679479}
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
         */
        this.onResize = throttle(this.onResize.bind(this), 100);

        this.state = {
            pictureStyle: {}
        };
    }

    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @function
     * @returns {void}
     */
    componentDidMount() {
        if (isBrowser()) {
            window.addEventListener('resize', this.onResize);
            window.dispatchEvent(new CustomEvent('resize'), {});
        }
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @function
     * @returns {void}
     */
    componentWillUnmount() {
        if (isBrowser()) {
            window.removeEventListener('resize', this.onResize);
        }
    }

    /**
     * Set background image if it should be covered. This is more or
     * less just a workaround to improve seo instead of using a more
     * simpler css solution.
     *
     * @function
     * @returns {void}
     */
    onResize() {
        const { isCovered } = this.props;

        if (isCovered && this.picture) {
            const imgDomNode = this.picture.querySelector('img');
            if (!imgDomNode) {
                this.setState({
                    pictureStyle: {}
                });
                return;
            }
            const currentSrc = imgDomNode.currentSrc || imgDomNode.src;

            this.setState({
                pictureStyle: {
                    backgroundPosition: '20% 25%',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${currentSrc})`
                }
            });
        } else {
            this.setState({
                pictureStyle: {}
            });
        }
    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {
        const { img, type } = this.props;
        const { pictureStyle } = this.state;

        if (!img.name || !img.ext || !img.path) {
            return null;
        }

        const componentPictureClassName = classnames(
            'm-key-visual__image',
            type ? `m-key-visual__image--${type}` : ''
        );
        const componentPictureStyle = pictureStyle;

        return (
            <Picture
                name={img.name}
                ext={img.ext}
                path={img.path}
                alt={img.alt}
                sizes={img.sizes}
                pictureRef={(picture) => {
                    this.picture = picture;
                }}
                className={componentPictureClassName}
                style={componentPictureStyle}
            />
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 * @property {string} [img={}] - The image alt description
 * @property {string} [type='digital'] - The image src url
 * @property {boolean} [isCovered=false] - Whether the image should be background size covered or not
 */
ModuleKeyVisualPicture.propTypes = {
    img: PropTypes.shape({
        name: PropTypes.string,
        ext: PropTypes.string,
        path: PropTypes.string,
        alt: PropTypes.string,
        sizes: PropTypes.array
    }),
    type: PropTypes.string,
    isCovered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleKeyVisualPicture.propTypes
 */
ModuleKeyVisualPicture.defaultProps = {
    img: {},
    type: 'digital',
    isCovered: false
};

export default ModuleKeyVisualPicture;

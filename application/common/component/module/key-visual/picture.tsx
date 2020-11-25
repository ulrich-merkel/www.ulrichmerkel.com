/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component, createRef } from 'react';
import classnames from 'classnames';
import { throttle } from 'lodash';

import { Picture } from '../../element/picture';
import { isBrowser } from '../../../utils/environment';

type Props = {
    img?: {
        name?: string;
        ext?: string;
        path?: string;
        alt?: string;
        sizes?: [];
    };
    type?: string;
    isCovered?: boolean;
};

type State = {
    pictureStyle: {
        backgroundPosition?: string;
        backgroundSize?: string;
        backgroundImage?: string;
    };
};

/**
 * Class representing a component.
 *
 * @augments React.Component
 */
export class ModuleKeyVisualPicture extends Component<Props, State> {
    pictureRef = createRef<HTMLDivElement>();

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
     * @returns {void}
     */
    componentDidMount() {
        if (isBrowser()) {
            window.addEventListener('resize', this.onResize);
            window.dispatchEvent(new CustomEvent('resize'));
        }
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
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
     * @returns {void}
     */
    onResize() {
        const { isCovered = false } = this.props;

        if (isCovered && this.pictureRef) {
            const imgDomNode = this.pictureRef?.current?.querySelector('img');
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
     * @returns {ReactElement} React component markup
     */
    render() {
        const { img, type = 'digital' } = this.props;
        const { pictureStyle } = this.state;

        if (!img.name || !img.ext || !img.path) {
            return null;
        }

        const componentPictureClassName = classnames(
            'm-key-visual__image',
            type ? `m-key-visual__image--${type}` : ''
        );

        return (
            <Picture
                alt={img.alt}
                className={componentPictureClassName}
                ext={img.ext}
                name={img.name}
                path={img.path}
                pictureRef={this.pictureRef}
                sizes={img.sizes}
                style={pictureStyle}
            />
        );
    }
}

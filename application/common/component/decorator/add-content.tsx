/**
 * Es6 module for handling translation data.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://reactjs.org/docs/higher-order-components.html}
 */
import { default as React, FunctionComponent, ComponentType } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { getTranslatedContent } from '../../utils/content';
import { selectStateIntlLocale } from '../../state/intl/selector';
import { selectStateConfig } from '../../state/config/selector';
import { Locale } from '../../state/intl/types';

type Props = {
    config: any;
    locale: Locale;
};

/**
 * Higher order function to get translation data.
 *
 * @param {string} configKey - The object key to be found in translation config
 * @returns {Function}
 */
export function addContent(configKey: string) {
    /**
     * The react higher order function for passing data to props.
     *
     * @param {ReactElement} SourceComponent - The react component to be decorated
     * @returns {ReactElement}
     */
    return function sourceComponent(
        SourceComponent: ComponentType
    ): ComponentType {
        /**
         * Wrapper component to get redux state.
         *
         * @function
         * @param {object} props - The current component props
         * @param {object} props.config - The content configuration
         * @param {string} props.locale - The current locale string
         * @returns {ReactElement} React component markup
         */
        const ReturnedComponent: FunctionComponent<Props> = (props) => {
            const { locale, config } = props;
            const content = getTranslatedContent(locale, config, configKey);

            if (!content) {
                // eslint-disable-next-line react/jsx-props-no-spreading
                return <SourceComponent {...props} />;
            }

            // eslint-disable-next-line react/jsx-props-no-spreading
            return <SourceComponent content={content} {...props} />;
        };

        /**
         * The component will subscribe to Redux store updates. Any time it updates,
         * mapStateToProps will be called, Its result must be a plain object,
         * and it will be merged into the component’s props.
         *
         * @private
         * @param {object.<*>} state - The redux store state
         * @param {object.<*>} [ownProps] - The current component props
         * @returns {object} The state properties to be passed as component props
         */
        function mapStateToProps(state, ownProps) {
            return {
                config: selectStateConfig(state) || get(ownProps, 'config'),
                locale: selectStateIntlLocale(state) || get(ownProps, 'locale')
            };
        }

        /**
         * Connects a React component to a Redux store. It does not modify the
         * component class passed to it. Instead, it returns a new, connected component class.
         */
        return connect(mapStateToProps)(ReturnedComponent);
    };
}

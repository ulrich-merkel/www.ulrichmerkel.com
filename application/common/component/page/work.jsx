/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Page components combine section components to the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires prop-types
 * @requires react-helmet
 * @requires react-redux
 * @requires react-router
 * @requires lodash
 * @requires common/config/application
 * @requires common/config/work
 * @requires common/component/decorator/add-page-tracking
 * @requires common/utils/content
 * @requires common/state/selectors
 * @requires common/component/layout/main
 * @requires common/component/section/key-visual
 * @requires common/component/section/text
 * @requires common/component/section/featured
 *
 * @changelog
 * - 0.0.4 Improve react-router routing
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { get } from 'lodash';

import { url } from '../../config/application';
import configWork from '../../config/work';
import addPageTracking from '../decorator/add-page-tracking';
import { selectStateConfig, selectStateIntlLocale } from '../../state/selectors';
import { getContentSection, getTranslatedContent } from '../../utils/content';
import LayoutMain from '../layout/main';
import {
    SectionFeatured,
    SectionKeyVisual,
    SectionText
} from '../section';

const NOT_FOUND = 'not-found';

/**
 * Find current work page key from config array.
 *
 * @private
 * @param {string} routerPath - The current router path
 * @param {Array} config - The work config
 * @returns {string} The first found entry by name
 */
function getWorkContentKey(routerPath, config) {
    return config.filter((entry) => {
        return entry.routerPath.substr(1) === routerPath;
    }).map((entry) => {
        return entry.intlKey;
    }).shift();
}

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 * @property {string} props.locale - The redux intl locale state
 * @property {object} props.match - The react router params
 * @property {object} [props.content={}] - The component translation config
 */
class PageWork extends Component {

    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        this.state = {
            work: null
        };
    }

    /**
     * Invoked once, both on the client and server,
     * immediately before the initial rendering occurs.
     *
     * @function
     * @returns {void}
     */
    UNSAFE_componentWillMount() { // eslint-disable-line camelcase
        this.handleRouterParams(this.props);
    }

    /**
     * Invoked before a mounted component receives new props. React only calls
     * this method if some of component's props may update.
     *
     * @function
     * @param {object} [nextProps] - The new class properties
     * @returns {void}
     */
    UNSAFE_componentWillReceiveProps(nextProps) { // eslint-disable-line camelcase
        this.handleRouterParams(nextProps);
    }

    /**
     * Handle state transition or redirect based on the router params.
     *
     * @function
     * @private
     * @param {object} props - The current component props with router match
     * @returns {void}
     */
    handleRouterParams(props) {
        const locationParamWork = get(props, 'match.params.work', null);
        const work = getWorkContentKey(locationParamWork, configWork);

        // Set redirect state if route couldn't be found
        if (!work) {
            this.setState({
                work: NOT_FOUND
            });
            return;
        }

        this.setState({
            work
        });
    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement|null} React component markup
     */
    render() {
        const { locale, config } = this.props;
        const { work } = this.state;

        // No valid work param passed yet
        if (!work) {
            return null;
        }

        // Not a valid work route
        if (work === NOT_FOUND) {
            return <Redirect to={url.notFound} />;
        }

        const contentSection = getContentSection(getTranslatedContent(locale, config, work));

        return (
            <LayoutMain>
                <Helmet {...contentSection('head')} />
                <SectionKeyVisual
                    content={contentSection('section1')}
                    isWork
                />
                <SectionText
                    content={contentSection('section2')}
                    isMain
                    isCentered
                    hasColumns2={false}
                    itemType='https://schema.org/CreativeWork'
                />
                <SectionFeatured content={contentSection('section3')} />
            </LayoutMain>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
PageWork.propTypes = {
    locale: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    config: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object // eslint-disable-line react/forbid-prop-types
    ]))
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
PageWork.defaultProps = {
    config: {}
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {object.<*>} state - The redux store state
 * @returns {object}
 */
function mapStateToProps(state) {
    return {
        locale: selectStateIntlLocale(state),
        config: selectStateConfig(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const PageWorkContainer = connect(
    mapStateToProps
)(withRouter(addPageTracking(PageWork)));

export default PageWorkContainer;
export {
    PageWork
};

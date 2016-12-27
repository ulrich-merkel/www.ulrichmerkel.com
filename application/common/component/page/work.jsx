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
 * @requires react-helmet
 * @requires react-redux
 * @requires react-router
 * @requires common/config/application
 * @requires common/config/work
 * @requires common/component/decorator/add-page-tracking
 * @requires common/utils/content
 * @requires common/state/selectors
 * @requires common/component/layout/main
 * @requires common/component/section/key-visual
 * @requires common/component/section/text
 *
 * @changelog
 + - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { url } from './../../config/application';
import configWork from './../../config/work';
import addPageTracking from './../decorator/add-page-tracking';
import { selectStateConfig, selectStateIntlLocale } from './../../state/selectors';
import { getContentSection, getTranslatedContent } from './../../utils/content';
import LayoutMain from './../layout/main';
import SectionKeyVisual from './../section/key-visual';
import SectionText from './../section/text';

/**
 * Find current work page key from config array.
 *
 * @function
 * @private
 * @param {string} routerPath - The current router path
 * @param {Array} config - The work config
 * @returns {string} The first found entry by name
 */
function getWorkContentKey(routerPath, config) {
    return config.filter((entry) => {
        return entry.routerPath.substr(1) === routerPath;
    }).map((entry) => {
        return entry.i18nKey;
    }).shift();
}

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
 */
class PageWork extends Component {

    /**
     * The actual class constructor.
     *
     * This is usally unnecessary if we don't perform any actions here,
     * because a default constructor will call super(...props) for us.
     * We do this just because of completeness.
     *
     * @constructor
     * @param {Object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(...props) {
        super(...props);

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
    componentWillMount() {
        const { params, router } = this.props;
        const work = getWorkContentKey(params.work, configWork);

        // redirect if route couldn't be found
        if (!work) {
            router.push(url.index);
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
     * @returns {ReactElement} React component markup
     */
    render() {
        const { locale, config } = this.props;
        const { work } = this.state;

        if (!work) {
            return null;
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
            </LayoutMain>
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 * @property {string} intlLocale - The redux intl locale state
 * @property {Object} params - The react router params
 * @property {Object} router - The react router object coming from withRouter hoc
 * @property {Object} [content={}] - The component translation config
 */
PageWork.propTypes = {
    locale: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    config: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object
    ]))
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see PageWork.propTypes
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
 * @param {Object.<*>} state - The redux store state
 * @returns {Object}
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
)(addPageTracking(withRouter(PageWork)));

export default PageWorkContainer;

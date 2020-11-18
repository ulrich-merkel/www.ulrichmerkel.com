/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Page components combine section components to the
 * overall page layout.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021 
 */
import { default as React, Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { get } from 'lodash';

import { url } from '../../config/application';
import configWork from '../../config/work';
import { addPageTracking } from '../decorator/add-page-tracking';
import { selectStateConfig } from '../../state/config/selector';
import { selectStateIntlLocale } from '../../state/intl/selector';
import { getContentSection, getTranslatedContent } from '../../utils/content';
import { LayoutMain } from '../layout/main';
import { SectionFeatured } from '../section/featured';
import { SectionKeyVisual } from '../section/key-visual';
import { SectionText } from '../section/text';

type PageProps = {
    locale: string;
    match: {
        params: {
            work: string;
        }
    },
    config: any;
};

type PageState = {
    work: string;
};

const NOT_FOUND = 'not-found';

/**
 * Find current work page key from config array.
 *
 * @private
 * @param {string} routerPath - The current router path
 * @param {Array} config - The work config
 * @returns {string} The first found entry by name
 */
function getWorkContentKey(routerPath: string, config) {
    return config
        .filter((entry) => {
            return entry.routerPath.substr(1) === routerPath;
        })
        .map((entry) => {
            return entry.intlKey;
        })
        .shift();
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
class Page extends Component<PageProps, PageState> {
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
     * @returns {void}
     */
    componentDidMount() {
        this.handleRouterParams(this.props);
    }

    /**
     * Invoked before a mounted component receives new props. React only calls
     * this method if some of component's props may update.
     *
     * @param {object} [nextProps] - The new class properties
     * @returns {void}
     */
    componentDidUpdate(nextProps) {
        this.handleRouterParams(nextProps);
    }

    /**
     * Handle state transition or redirect based on the router params.
     *
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

        const contentSection = getContentSection(
            getTranslatedContent(locale, config, work)
        );

        return (
            <LayoutMain>
                <Helmet {...contentSection('head')} />
                <SectionKeyVisual content={contentSection('section1')} isWork />
                <SectionText
                    content={contentSection('section2')}
                    isMain
                    isCentered
                    hasColumns2={false}
                    itemType="https://schema.org/CreativeWork"
                />
                <SectionFeatured content={contentSection('section3')} />
            </LayoutMain>
        );
    }
}

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
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
const PageWork = connect(mapStateToProps)(withRouter(addPageTracking(Page)));

export { PageWork };

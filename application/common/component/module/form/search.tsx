/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://maximilianschmitt.me/posts/tutorial-csrf-express-4/}
 */
import {
    default as React,
    ChangeEvent,
    FunctionComponent,
    useCallback
} from 'react';
import { connect } from 'react-redux';
import { get, noop } from 'lodash';

import { selectStateSearchTerm } from '../../../state/search/selector';
import { selectStateCsrfToken } from '../../../state/csrf/selector';
import { changeSearchTerm } from '../../../state/search/duck';
import { eventPreventDefault } from '../../../utils/event';
import { GridRow } from '../../grid/row';
import { GridCol } from '../../grid/col';
import { Fieldset } from '../../element/fieldset';
import { Form } from '../../element/form';
import { InputGroup } from '../../element/input-group';
import { Legend } from '../../element/legend';

type Props = {
    content?: {
        inputTerm?: string;
        legend?: string;
    };
    csrfToken?: string;
    onChangeSearchTerm?: (searchTerm: string) => void;
    searchTerm?: string;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleFormSearch: FunctionComponent<Props> = (props) => {
    const {
        content,
        csrfToken = '',
        onChangeSearchTerm = noop,
        searchTerm = ''
    } = props;

    const handleSearchChangeTerm = useCallback((event) => {
        const searchTerm = get(event, 'target.value');
        onChangeSearchTerm(searchTerm);
    }, []);

    return (
        <Form
            action="/search/"
            className="m-form--search"
            id="m-form--search"
            itemProp="potentialAction"
            itemScope
            itemType="http://schema.org/SearchAction"
            onSubmit={eventPreventDefault}
            role="search"
        >
            <Fieldset>
                <Legend isVisuallyHidden>{content?.legend}</Legend>

                <GridRow>
                    <GridCol cols={12}>
                        <InputGroup
                            id="search"
                            isLabelVisuallyHidden
                            itemProp="query-input"
                            label={content?.inputTerm}
                            name="search"
                            onChange={handleSearchChangeTerm}
                            placeholder={content?.inputTerm}
                            type="search"
                            value={searchTerm}
                        />
                    </GridCol>
                </GridRow>
                <input type="hidden" name="_csrf" value={csrfToken} />
            </Fieldset>
        </Form>
    );
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object.<*>} state - The redux store state
 * @param {object.<*>} ownProps - The current component props
 * @returns {object}
 */
function mapStateToProps(state, ownProps) {
    return {
        searchTerm: selectStateSearchTerm(state) || ownProps.searchTerm,
        csrfToken: selectStateCsrfToken(state)
    };
}

/**
 * If an object is passed, each function inside it will be assumed to
 * be a Redux action creator. An object with the same function names,
 * but with every action creator wrapped into a dispatch call so they
 * may be invoked directly, will be merged into the component’s props.
 * If a function is passed, it will be given dispatch.
 *
 * @private
 * @type {object<string, Function>}
 */
const mapDispatchToProps = {
    onChangeSearchTerm: changeSearchTerm
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const ModuleFormSearchConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormSearch);

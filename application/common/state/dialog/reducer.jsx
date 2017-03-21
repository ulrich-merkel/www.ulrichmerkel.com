/**
 * Es6 module for Redux Architecture.
 * Reducers specify how the application's state changes in response to the
 * corresponding actions.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 *
 * @requires common/state/dialog/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import {
    STATE_DIALOG_VISIBLE_CHANGE
} from './constants';

/**
 * @type {Object}
 */
const defaultState = {
    visible: false,
    content: ''
};

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @function
 * @param {Object} [state=defaultState] - The current state
 * @param {Object} action - The action sent by the dispatcher
 * @returns {Object} The new state for this store
 */
function reducer(state = defaultState, action) {

    /**
     * The reason is that the lexical declaration is visible in the entire switch block but it only gets initialized
     * when it is assigned, which will only happen if the case where it is defined is reached.
     * To ensure that the lexical declaration only applies to the current case clause wrap your clauses in blocks.
     */
    switch (action.type) {
    case STATE_DIALOG_VISIBLE_CHANGE: {
        const visible = action.visible;
        // @TODO: Rename to action.content
        const page = action.page;

        if (visible === undefined) {
            return state;
        }

        if (!page) {
            return {
                visible
            };
        }

        return {
            page,
            visible
        };
    }
    default: {
        return state;
    }
    }

}

export default reducer;
export {
    defaultState
};

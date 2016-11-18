import { CONTACT_CHANGE } from './constants';

export const defaultState = {
};

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @function
 * @param {Object} state The current state
 * @param {Object} action The action sent by the dispatcher
 * @returns {Object} The new state for this store
 */
const reducer = (state = defaultState, action) => {

    /**
    * The reason is that the lexical declaration is visible in the entire switch block but it only gets initialized
    * when it is assigned, which will only happen if the case where it is defined is reached.
    * To ensure that the lexical declaration only applies to the current case clause wrap your clauses in blocks.
    */
    switch (action.type) {
    case CONTACT_CHANGE: {
        const contact = action.contact;
        if (!contact) {
            return state;
        }
        return {
            ...state,
            ...contact
        };
    }
    default: {
        return state;
    }
    }

};

export default reducer;
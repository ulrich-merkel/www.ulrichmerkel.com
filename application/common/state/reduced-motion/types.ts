import {
    REDUCED_MOTION_TOGGLE_SELECTED,
    MOTION_PREFERENCES_NO_PREFERENCE,
    MOTION_PREFERENCES_REDUCE
} from './duck';

export interface ChangeReducedMotionSelectedActionType {
    type: typeof REDUCED_MOTION_TOGGLE_SELECTED;
}

export type ReducedMotionActionTypes = ChangeReducedMotionSelectedActionType;

export type AvailableReducedMotionsType =
    | typeof MOTION_PREFERENCES_NO_PREFERENCE
    | typeof MOTION_PREFERENCES_REDUCE;

export interface ReducedMotionStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: string;
    };
}

import {
    REDUCED_MOTION_TOGGLE_SELECTED,
    AVAILABLE_MOTION_PREFERENCES
} from './duck';

export interface ChangeReducedMotionSelectedActionType {
    type: typeof REDUCED_MOTION_TOGGLE_SELECTED;
}

export type ReducedMotionActionTypes = ChangeReducedMotionSelectedActionType;

export type AvailableReducedMotionsType = typeof AVAILABLE_MOTION_PREFERENCES[keyof typeof AVAILABLE_MOTION_PREFERENCES];

export interface ReducedMotionStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: AvailableReducedMotionsType | undefined;
    };
}

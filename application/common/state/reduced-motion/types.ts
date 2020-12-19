import {
    REDUCED_MOTION_TOGGLE_SELECTED,
    AVAILABLE_MOTION_PREFERENCES
} from './constants';

export type AvailableReducedMotionsType = typeof AVAILABLE_MOTION_PREFERENCES[keyof typeof AVAILABLE_MOTION_PREFERENCES];

export interface ChangeReducedMotionSelectedActionType {
    selected?: AvailableReducedMotionsType;
    type: typeof REDUCED_MOTION_TOGGLE_SELECTED;
}

export type ReducedMotionActionTypes = ChangeReducedMotionSelectedActionType;

export interface ReducedMotionStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: AvailableReducedMotionsType | undefined;
    };
}

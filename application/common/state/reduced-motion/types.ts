import { REDUCED_MOTION_TOGGLE_SELECTED } from './duck';

export interface ChangeReducedMotionSelectedActionType {
    type: typeof REDUCED_MOTION_TOGGLE_SELECTED;
}

export type ReducedMotionActionTypes = ChangeReducedMotionSelectedActionType;

export interface ReducedMotionStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: string;
    };
}

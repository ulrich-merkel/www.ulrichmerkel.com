import { COLOR_SCHEME_TOGGLE_SELECTED } from './duck';

export interface ChangeThemeSelectedActionType {
    type: typeof COLOR_SCHEME_TOGGLE_SELECTED;
}

export type ColorSchemeActionTypes = ChangeThemeSelectedActionType;

export interface ColorSchemeStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: string;
    };
}

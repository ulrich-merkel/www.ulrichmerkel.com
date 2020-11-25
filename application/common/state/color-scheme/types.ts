import {
    COLOR_SCHEME_TOGGLE_SELECTED,
    COLOR_SCHEME_LIGHT,
    COLOR_SCHEME_DARK
} from './duck';

export interface ChangeThemeSelectedActionType {
    type: typeof COLOR_SCHEME_TOGGLE_SELECTED;
}

export type ColorSchemeActionTypes = ChangeThemeSelectedActionType;

export type AvailableColorSchemesType =
    | typeof COLOR_SCHEME_LIGHT
    | typeof COLOR_SCHEME_DARK;
export interface ColorSchemeStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: string;
    };
}

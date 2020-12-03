import {
    COLOR_SCHEME_TOGGLE_SELECTED,
    AVAILABLE_COLOR_SCHEMES
} from './constants';

export interface ChangeThemeSelectedActionType {
    type: typeof COLOR_SCHEME_TOGGLE_SELECTED;
}

export type ColorSchemeActionTypes = ChangeThemeSelectedActionType;

export type AvailableColorSchemesType = typeof AVAILABLE_COLOR_SCHEMES[keyof typeof AVAILABLE_COLOR_SCHEMES];

export interface ColorSchemeStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: AvailableColorSchemesType | undefined;
    };
}

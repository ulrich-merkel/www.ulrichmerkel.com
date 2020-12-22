import {
    COLOR_SCHEME_TOGGLE_SELECTED,
    AVAILABLE_COLOR_SCHEMES
} from './constants';

export type AvailableColorSchemesType = typeof AVAILABLE_COLOR_SCHEMES[keyof typeof AVAILABLE_COLOR_SCHEMES];

export interface ChangeThemeSelectedActionType {
    selected?: AvailableColorSchemesType;
    type: typeof COLOR_SCHEME_TOGGLE_SELECTED;
}

export type ColorSchemeActionTypes = ChangeThemeSelectedActionType;

export interface ColorSchemeStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        selected: AvailableColorSchemesType | undefined;
    };
}

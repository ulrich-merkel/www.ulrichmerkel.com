import { COLOR_SCHEME_CHANGE_SELECTED } from './duck';

export interface ChangeThemeSelectedActionType {
    type: typeof COLOR_SCHEME_CHANGE_SELECTED;
    selected: string;
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

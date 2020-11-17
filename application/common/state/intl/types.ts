import { INTL_CHANGE_LOCALE } from './duck';

export interface ChangeIntlActionType {
    type: typeof INTL_CHANGE_LOCALE;
    locale: string;
    fallback: string;
}

export type IntlActionTypes = ChangeIntlActionType;

export interface IntlStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        locale: string;
        availableLocales: string[];
    };
}

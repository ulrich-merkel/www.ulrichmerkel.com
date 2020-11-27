import {
    INTL_CHANGE_LOCALE,
    INTL_LOCALE_EN_EN,
    INTL_LOCALE_DE_DE
} from './duck';

export interface ChangeIntlActionType {
    type: typeof INTL_CHANGE_LOCALE;
    locale: string;
    fallback: string;
}

export type IntlActionTypes = ChangeIntlActionType;

export type Locale = typeof INTL_LOCALE_EN_EN | typeof INTL_LOCALE_DE_DE;

export type Locales = [typeof INTL_LOCALE_EN_EN];

export interface IntlStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        locale: string;
        availableLocales: string[];
    };
}

import { Locale } from '../intl/types';
import {
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_CONTENT_SUCCESS,
    FETCH_CONFIG_TRANSLATION_SUCCESS,
    FETCH_CONFIG_TRANSLATION_FAILURE
} from './constants';

export interface RequestConfigTranslationActionType {
    type: typeof FETCH_CONFIG_TRANSLATION_REQUEST;
    locale: Locale;
}

export interface FailedConfigTranslationActionType {
    type: typeof FETCH_CONFIG_TRANSLATION_FAILURE;
    locale: Locale;
}
export interface ReceiveConfigContentActionType {
    type: typeof FETCH_CONFIG_CONTENT_SUCCESS;
    receivedAt: number;
    data: Record<string, unknown>;
}

export interface ReceiveConfigTranslationActionType {
    type: typeof FETCH_CONFIG_TRANSLATION_SUCCESS;
    receivedAt: number;
    data: Record<string, unknown>;
    locale: Locale;
}

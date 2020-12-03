import { CHANGE_CSRF_TOKEN } from './constants';

export interface ChangeSearchTermActionType {
    type: typeof CHANGE_CSRF_TOKEN;
    token: string;
}

export type CsrfActionTypes = ChangeSearchTermActionType;

export interface CsrfStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        token: string;
    };
}

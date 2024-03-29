import { SEARCH_CHANGE_TERM } from './constants';

export interface ChangeSearchTermActionType {
    type: typeof SEARCH_CHANGE_TERM;
    term: string;
}

export type SearchActionTypes = ChangeSearchTermActionType;

export interface SearchStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        term: string;
    };
}

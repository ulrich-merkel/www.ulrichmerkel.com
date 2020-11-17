import { SCROLL_HEADER_FIXED, SCROLL_HEADER_VISIBLE } from './duck';

export interface HeaderFixedActionType {
    type: typeof SCROLL_HEADER_FIXED;
    isHeaderFixed: boolean;
}

export interface HeaderVisibleActionType {
    type: typeof SCROLL_HEADER_VISIBLE;
    isHeaderVisible: boolean;
}

export type ScrollActionTypes = HeaderFixedActionType | HeaderVisibleActionType;

export interface ScrollStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        isHeaderFixed: boolean;
        isHeaderVisible: boolean;
    };
}

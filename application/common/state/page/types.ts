import { PAGE_INCREASE_VIEWS } from './duck';

export interface AddPageViewActionType {
    type: typeof PAGE_INCREASE_VIEWS;
}

export type PageActionTypes = AddPageViewActionType;

export interface PageStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        viewsAfterReload: number;
    };
}
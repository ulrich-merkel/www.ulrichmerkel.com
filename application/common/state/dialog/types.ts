import { DIALOG_VISIBLE_CHANGE } from './duck';

export interface DialogVisibleChangeActionType {
    type: typeof DIALOG_VISIBLE_CHANGE;
    content: string;
    visible: boolean;
}

export type DialogActionTypes = DialogVisibleChangeActionType;

export interface DialogStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        visible: boolean;
        content: string;
    };
}

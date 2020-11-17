import { CHANGE_CONTACT_FORM } from './duck';

export interface ContactFormType {
    name: string;
    email: string;
    subject: string;
    message: string;
    pristine: boolean;
    namePristine: boolean;
    emailPristine: boolean;
    subjectPristine: boolean;
    messagePristine: boolean;
    pending: boolean;
    success: boolean;
    error: boolean;
}

export interface ChangeContactFormActionType {
    type: typeof CHANGE_CONTACT_FORM;
    form: ContactFormType;
}

export type ContactActionTypes = ChangeContactFormActionType;

export interface ContactStateType {
    meta: {
        isInitial: boolean;
    };
    payload: {
        form: ContactFormType;
    };
}

export interface ValidateType {
    email: boolean;
    message: boolean;
    name: boolean;
    subject: boolean;
}

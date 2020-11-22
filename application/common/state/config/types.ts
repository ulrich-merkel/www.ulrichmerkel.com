import { FETCH_CONFIG_TRANSLATION_REQUEST, FETCH_CONFIG_CONTENT_SUCCESS, FETCH_CONFIG_TRANSLATION_SUCCESS } from './duck';

// export interface ContactFormType {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
//     pristine: boolean;
//     namePristine: boolean;
//     emailPristine: boolean;
//     subjectPristine: boolean;
//     messagePristine: boolean;
//     pending: boolean;
//     success: boolean;
//     error: boolean;
// }

export interface RequestConfigTranslationActionType {
    type: typeof FETCH_CONFIG_TRANSLATION_REQUEST;
    locale: string;
}

export interface ReceiveConfigContentActionType {
    type: typeof FETCH_CONFIG_CONTENT_SUCCESS;
    receivedAt: number,
    data: any;
}

export interface ReceiveConfigTranslationActionType {
    type: typeof FETCH_CONFIG_TRANSLATION_SUCCESS;
    receivedAt: number,
    data: any;
    locale: string;
}
// export type ContactActionTypes = ChangeContactFormActionType;

// export interface ContactStateType {
//     meta: {
//         isInitial: boolean;
//     };
//     payload: {
//         form: ContactFormType;
//     };
// }

// export interface ValidateType {
//     email: boolean;
//     message: boolean;
//     name: boolean;
//     subject: boolean;
// }

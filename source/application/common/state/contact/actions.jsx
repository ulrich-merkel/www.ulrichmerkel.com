/* eslint-disable import/prefer-default-export */
import { CONTACT_CHANGE } from './constants';

export function changeContact(contact) {
    return {
        type: CONTACT_CHANGE,
        contact: contact
    };
}

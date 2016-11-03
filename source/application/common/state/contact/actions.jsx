/* eslint-disable import/prefer-default-export */
import constants from './constants';

export function changeContact(contact) {
    return {
        type: constants.CONTACT_CHANGE,
        contact: contact
    };
}

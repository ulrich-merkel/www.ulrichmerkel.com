import { isString } from 'lodash';

export function isValidString(string): boolean {
    return isString(string) && string.length > 0;
}

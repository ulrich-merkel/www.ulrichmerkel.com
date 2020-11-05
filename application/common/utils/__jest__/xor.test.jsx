/* eslint-disable func-names, immutable/no-mutation, immutable/no-let */
import { decrypt, encrypt } from '../xor';

const data = 'abcdefghijklmnopqrstuvwxyz1234567890';
const key = 'abcDEFG1234=%#!§$';

describe('xor', function () {
    let dataEncrypted = null;

    beforeEach(function () {
        dataEncrypted = encrypt(data, key);
    });

    afterEach(function () {
        dataEncrypted = null;
    });

    describe('client', function handleDescribeClient() {
        it('should encrypt data', function () {
            expect(dataEncrypted).not.toEqual(data);
        });
        it('should decrypt data correctly', function handleIt() {
            expect(decrypt(dataEncrypted, key)).toEqual(data);
        });
        it('should encrypt nothing if data is empty', function handleIt() {
            expect(encrypt('', key)).toEqual('');
            expect(decrypt('', key)).toEqual('');
        });
        it('should encrypt nothing if key is empty', function handleIt() {
            expect(encrypt(data, '')).toEqual(data);
            expect(decrypt(data, '')).toEqual(data);
        });
    });

    describe('node', function () {
        global.atob = null;
        global.btoa = null;

        it('should encrypt data', function () {
            expect(dataEncrypted).not.toEqual(data);
        });
        it('should decrypt data correctly', function () {
            expect(decrypt(dataEncrypted, key)).toEqual(data);
        });
        it('should encrypt nothing if data is empty', function () {
            expect(encrypt('', key)).toEqual('');
            expect(decrypt('', key)).toEqual('');
        });
        it('should encrypt nothing if key is empty', function () {
            expect(encrypt(data, '')).toEqual(data);
            expect(decrypt(data, '')).toEqual(data);
        });
    });
});

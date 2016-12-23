/* eslint-disable func-names */
import xor from './../xor';

const data = 'abcdefghijklmnopqrstuvwxyz1234567890';
const key = 'abcDEFG1234=%#!§$';

describe('xor', function () {
    let dataEncrypted = null;

    beforeEach(function () {
        dataEncrypted = xor.encrypt(data, key);
    });

    afterEach(function () {
        dataEncrypted = null;
    });

    describe('client', function handleDescribeClient() {
        it('should encrypt data', function () {
            expect(dataEncrypted).not.toEqual(data);
        });

        it('should decrypt data correctly', function () {
            expect(xor.decrypt(dataEncrypted, key)).toEqual(data);
        });

        it('should encrypt nothing if data is empty', function () {
            expect(xor.encrypt('', key)).toEqual('');
            expect(xor.decrypt('', key)).toEqual('');
        });

        it('should encrypt nothing if key is empty', function () {
            expect(xor.encrypt(data, '')).toEqual(data);
            expect(xor.decrypt(data, '')).toEqual(data);
        });
    });

    describe('node', function () {
        global.atob = null;
        global.btoa = null;

        it('should encrypt data', function () {
            expect(dataEncrypted).not.toEqual(data);
        });

        it('should decrypt data correctly', function () {
            expect(xor.decrypt(dataEncrypted, key)).toEqual(data);
        });

        it('should encrypt nothing if data is empty', function () {
            expect(xor.encrypt('', key)).toEqual('');
            expect(xor.decrypt('', key)).toEqual('');
        });

        it('should encrypt nothing if key is empty', function () {
            expect(xor.encrypt(data, '')).toEqual(data);
            expect(xor.decrypt(data, '')).toEqual(data);
        });
    });

});

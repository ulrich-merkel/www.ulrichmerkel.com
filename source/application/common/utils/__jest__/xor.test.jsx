/* eslint-disable func-names */
/* global describe, it, expect */
import mockedBase64 from './../__mocks__/base64';
import xor from './../xor';

const data = 'abcdefghijklmnopqrstuvwxyz1234567890';
const key = 'abcDEFG1234=%#!§$';

describe('xor', function () {
    var dataEncrypted = null;

    beforeEach(function () {
        dataEncrypted = xor.encrypt(data, key);
    });

    afterEach(function () {
        dataEncrypted = null;
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

    describe('client', function handleDescribeClient() {
        global.atob = mockedBase64.atob;
        global.btoa = mockedBase64.btoa;

        it('should encrypt data', function handleIt() {
            expect(dataEncrypted).not.toEqual(data);
        });

        it('should decrypt data correctly', function handleIt() {
            expect(xor.decrypt(dataEncrypted, key)).toEqual(data);
        });

        it('should encrypt nothing if data is empty', function handleIt() {
            expect(xor.encrypt('', key)).toEqual('');
            expect(xor.decrypt('', key)).toEqual('');
        });

        it('should encrypt nothing if key is empty', function handleIt() {
            expect(xor.encrypt(data, '')).toEqual(data);
            expect(xor.decrypt(data, '')).toEqual(data);
        });
    });

});

import { loadJs, createScriptElement } from '../load-js';

describe('loadJs', function fnDescribe() {
    it('should be fail safe', function fnIt() {
        loadJs({
            className: 'test-js',
            id: 'test-js',
            src: ''
        });
        expect(document.body).toMatchSnapshot();
    });
    it('should add js files correctly', function fnIt() {
        loadJs({
            className: 'test-js',
            id: 'test-js',
            src: '/js/test.js'
        });
        expect(document.body).toMatchSnapshot();
    });
});

describe('createScriptElement', function fnDescribe() {
    it('should create a script element', function fnIt() {
        const scriptDomNode = createScriptElement({
            className: 'test-js',
            id: 'test-js',
            src: '/js/test.js'
        });
        expect(scriptDomNode).toMatchSnapshot();
    });
});

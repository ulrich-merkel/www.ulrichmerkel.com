import { loadCss, createStyleElement } from '../load-css';

describe('loadCss', function fnDescribe() {
    it('should be fail fafe', function fnIt() {
        loadCss({
            className: 'test-css',
            id: 'test-css',
            src: ''
        });
        expect(document.body).toMatchSnapshot();
    });
    it('should add css files correctly', function fnIt() {
        loadCss({
            className: 'test-css',
            id: 'test-css',
            src: '/css/test.css'
        });
        expect(document.body).toMatchSnapshot();
    });
});

describe('createStyleElement', function fnDescribe() {
    it('should create a script element', function fnIt() {
        const styleDomNode = createStyleElement({
            className: 'test-css',
            id: 'test-css',
            src: '/css/test.css'
        });
        expect(styleDomNode).toMatchSnapshot();
    });
});

import { loadCss } from '../load-css';

describe('loadCss', function fnDescribe() {
    it('should add css files correctly', function fnIt() {
        expect(loadCss({})).toMatchSnapshot();
        expect(
            loadCss({
                className: 'test-css',
                id: 'test-css',
                src: ''
            })
        ).toMatchSnapshot();
        expect(
            loadCss({
                className: 'test-css',
                id: 'test-css',
                src: '/css/test.css'
            })
        ).toMatchSnapshot();
    });
});

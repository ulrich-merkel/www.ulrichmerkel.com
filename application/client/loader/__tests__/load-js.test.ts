import { loadJs } from '../load-js';

describe('loadJs', function fnDescribe() {
    it('should add js files correctly', function fnIt() {
        expect(loadJs({})).toMatchSnapshot();
        expect(
            loadJs({
                className: 'test-js',
                id: 'test-js',
                src: ''
            })
        ).toMatchSnapshot();
        expect(
            loadJs({
                className: 'test-js',
                id: 'test-js',
                src: '/js/test.js'
            })
        ).toMatchSnapshot();
    });
});

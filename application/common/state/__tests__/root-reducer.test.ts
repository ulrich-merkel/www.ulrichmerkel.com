import { rootReducer } from '../root-reducer';

describe('rootReducer', function fnDescribe() {
    it('should create the correct store keys', function fnIt() {
        expect(rootReducer).toMatchSnapshot();
    });
});

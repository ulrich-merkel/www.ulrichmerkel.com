import {
    getApi,
    onProgressEvent,
    onUpdateReadyEvent,
    loadOffline
} from '../load-offline';

describe('getApi', function fnDescribe() {
    it('should return the application cache if available', function fnIt() {
        expect(getApi()).toMatchSnapshot();
    });
});

describe('onProgressEvent', function fnDescribe() {
    it('should handle the progress event', function fnIt() {
        expect(onProgressEvent()).toMatchSnapshot();
        expect(
            onProgressEvent({
                lengthComputable: true,
                loaded: 70,
                total: 100
            })
        ).toMatchSnapshot();
    });
});

describe('onUpdateReadyEvent', function fnDescribe() {
    it('should handle the update ready event', function fnIt() {
        expect(onUpdateReadyEvent()).toMatchSnapshot();
    });
});

describe('loadOffline', function fnDescribe() {
    it('should handle offline loading', function fnIt() {
        expect(loadOffline()).toMatchSnapshot();
    });
});

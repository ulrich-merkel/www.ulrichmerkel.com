const mockedConfigApplication = {
    url: {
        cacheManifest: '/cache.manifest'
    },
    applicationCache: {
        use: true,
        timeStamp: '2016-11-15'
    }
};

export default mockedConfigApplication;
export const url = mockedConfigApplication.url;

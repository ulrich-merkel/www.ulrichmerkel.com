const nodemailer = jest.genMockFromModule('nodemailer');

function createTransport() {
    return {
        sendMail: function (options, callback) {
            if (callback) {
                callback(null, 'mock');
            }
        }
    }
}

export default Object.assign(nodemailer, {
    createTransport
});

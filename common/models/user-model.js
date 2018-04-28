'use strict';

module.exports = function (Usermodel) {


    Usermodel.sendEmail = function (msg, msg2, to, cb) {
        Usermodel.app.models.Email.send({
            to: to,
            from: 'henry.unah@gmail.com',
            subject: msg,
            text: 'my text',
            html: msg2
        }, function (err, mail) {
            console.log('email sent!');
            cb(err);
        });
    }

    /*Usermodel.setup = function () {
        Usermodel.base.setup.call(this);
        var UserModel = this;

        
    };*/

    Usermodel.remoteMethod('sendEmail', {
        accepts: [{ arg: 'msg', type: 'string', required: true }, { arg: 'msg2', type: 'string', required: true }, { arg: 'to', type: 'string', required: true }],
        http: { path: '/send-email', verb: 'put' },
        returns: { arg: 'result', type: 'string' }
    });


};

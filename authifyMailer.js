require('dotenv').config()
var nodemailer = require('nodemailer');



// General mailer to send notifications, can be only used inside req,res function via router
const authifyMailer = (to, sub, body) => {
    const mailPass = process.env.EMAIL_PASS2;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'developer.authify@gmail.com',
            pass: mailPass
        }
    });

    var mailOptions = {
        from: 'developer.authify@gmail.com',
        to: to,
        subject: sub,
        text: body,
    };

    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({message : "Email Sent"});
                return true
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

}

module.exports = authifyMailer
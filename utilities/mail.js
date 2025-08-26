const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testbasesamctg@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});
module.exports = {transporter};
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export function sendEmail(email, message) {
    var message = `
    <h1>New Message From Hilarity</h1>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    `;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    transporter.sendMail({
        to: "camcan2007c@gmail.com",
        subject: "New Message From Hilarity",
        html: message
    }).then(() => {
        console.log('Email sent');
    }).catch((error) => {
        console.error('Error:', error);
    });
}
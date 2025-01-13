import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


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


export function sendEmail(email: string, message: string) {
    var message = `
    <h1>New Message From Hilarity</h1>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    `;

    transporter.sendMail({
        to: "camcan2007c@gmail.com",
        subject: "New Message From Hilarity",
        html: message
    }).then(() => {
        return true
    }).catch((error) => {
        console.error('Error:', error);
        return false
    });
}

export function sendApplication(jobName: string, answers: Array<{ question: string, value: string }>) {
    let message = `
    <h1 style="color: #000; font-family: Arial;">New ${jobName} Application</h1>
    <div class="answers" style="background: #050505; border-radius: 5px; padding: 10px;">
    `;

    answers.forEach(answer => {
        message += `
        <div>
            <p style="font-family: Arial; color: #fff; font-weight: 600; font-size: 18px;margin:0;padding:0;">${answer.question}</p>
            <p style="font-family: Arial; color: #fff;margin:0;padding:0;">${answer.value}</p>
        </div>
        `;
    });

    message += `
    </div>
    `;


    transporter.sendMail({
        to: "camcan2007c@gmail.com",
        subject: "New Hilarity Job Application",
        html: message
    }).then(() => {
        return true
    }).catch((error) => {
        console.error('Error:', error);
        return false
    });
}
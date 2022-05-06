import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "582c905257fd21",
      pass: "d2956933a6eac8"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body} : SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Andréia Souza <fsouza.andreia@gmail.com>',
            subject,
            html: body,
        });
    }
}
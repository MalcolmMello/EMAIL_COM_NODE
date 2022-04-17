import { Request, Response } from 'express';
import nodemailer from 'nodemailer'


export const contato = async (req: Request, res: Response) => {
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2874530050f146",
          pass: "c9aa4e750f48d0"
        }
    });

    let message = {
        from: req.body.from,
        to: 'emailquevaireceber@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }

    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({ sucess: true })
}
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailTemplatePath = path.resolve('components/email/thank-you.html');
    const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');

    await transporter.sendMail({
      from: process.env.NO_REPLY_EMAIL,
      to: email,
      subject: 'Thank You for Subscribing!',
      html: emailTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

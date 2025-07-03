import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    if (!email || !subject || !message) {
      throw new Error("Provide valid email, subject, and message");
    }

    const myEmail = "markcalendario@gmail.com";

    await resend.emails.send({
      from: process.env.RESEND_DOMAIN as string,
      to: myEmail,
      subject: subject,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ status: 500 });
  }
}

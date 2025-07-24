import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const saved = await prisma.contact.create({
      data: { fullName, email, message },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Trainer Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Contact Message",
      text: `You received a new message: \n\nName: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    return NextResponse.json(saved, { stats: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

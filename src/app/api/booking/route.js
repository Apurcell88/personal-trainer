import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, notes, date, time, service } = body;

    const parsedDateTime = new Date(`${date}T${time}`);

    // 1. Check if client exists by email
    let client = await prisma.client.findUnique({
      where: { email },
    });

    // 2. If not, create the client
    if (!client) {
      client = await prisma.client.create({
        data: {
          name: fullName,
          email,
          goal: notes || "",
          startDate: new Date(),
        },
      });
    }

    // 3. Find the service by title
    const selectedService = await prisma.service.findFirst({
      where: {
        title: {
          equals: service,
          mode: "insensitive",
        },
      },
    });

    if (!selectedService) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    // 4. Create the booking
    await prisma.booking.create({
      data: {
        clientId: client.id,
        serviceId: selectedService.id,
        date: parsedDateTime,
        status: "pending",
      },
    });

    // Confirmation to me
    await sendEmail({
      to: process.env.GMAIL_USER,
      subject: `New Booking from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email},
        Goal: ${notes}
        Service: ${service}
        Date: ${date}
        Time: ${time}
      `,
      html: `
        <h2>New Booking Received</h2>
        <p><strong>Name:</strong>${fullName}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Goal:</strong>${notes}</p>
        <p><strong>Service:</strong>${service}</p>
        <p><strong>Date:</strong>${date}</p>
        <p><strong>Time:</strong>${time}</p>
      `,
    });

    // Confirmation to client
    await sendEmail({
      to: email,
      subject: "Your Booking Confirmation",
      text: `
        Hi ${fullName},

        Thanks for booking a ${service} session! I'm looking forward to helping you reach your goals.

        Booking Details:
        - Service: ${service}
        - Date: ${date}
        - Time: ${time}
        - Notes: ${notes}

        If you have any questions, feel free to reply to this email.

        Talk soon,
        Adam
      `,
      html: `
        <h2>Hi ${fullName},</h2>
        <p>Thanks for booking a <strong>${service}</strong> session! I'm looking forward to helping you reach your goals.</p>
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Notes:</strong> ${notes}</li>
        </ul>
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Talk soon,<br />Adam</p>
      `,
    });

    return NextResponse.json({ message: "Booking submitted" }, { status: 200 });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { error: "Error submitting booking" },
      { status: 500 }
    );
  }
}

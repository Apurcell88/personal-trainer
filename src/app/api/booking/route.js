import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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
    console.log(service);
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

    return NextResponse.json({ message: "Booking submitted" }, { status: 200 });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { error: "Error submitting booking" },
      { status: 500 }
    );
  }
}

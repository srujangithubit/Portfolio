import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(20, "Share a bit more detail"),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // 1. Validate the incoming data strictly
    const validatedData = contactSchema.parse(payload);

    // 2. Here is where you would typically integrate with an email provider like Resend or SendGrid.
    // For now, we simulate a database insertion or email sending process and log the validated data.
    const messageRecord = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date().toISOString(),
    };

    console.log("====================================");
    console.log("🚀 NEW CONTACT MESSAGE RECEIVED 🚀");
    console.log("====================================");
    console.log(JSON.stringify(messageRecord, null, 2));
    console.log("====================================");

    return NextResponse.json(
      {
        success: true,
        message: "Message processed successfully",
        received: {
          id: messageRecord.id,
          name: messageRecord.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Failed to process contact submission:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

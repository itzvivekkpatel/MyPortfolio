import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const { name, email, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required." },
        { status: 400 }
      );
    }

    // Validate message length
    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Log to console (placeholder for EmailJS/Resend integration)
    console.log("📧 Contact form submission:");
    console.log(`   Name:    ${name}`);
    console.log(`   Email:   ${email}`);
    console.log(`   Message: ${message}`);

    // To integrate EmailJS, add your service/template/user IDs here:
    // await emailjs.send(serviceId, templateId, { name, email, message }, publicKey);

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

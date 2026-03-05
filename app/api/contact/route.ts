import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * POST /api/contact
 * Accepts a JSON body with name, email, subject, and message fields.
 * In a real application this would send an email or store the message.
 */
export async function POST(request: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, error: "All fields (name, email, subject, message) are required" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Invalid email address" },
      { status: 400 }
    );
  }

  // In a real app: send email, store in DB, etc.
  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json(
    {
      success: true,
      message: `Thank you, ${name}! Your message has been received and we will get back to you at ${email}.`,
    },
    { status: 200 }
  );
}

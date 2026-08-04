import { NextResponse } from "next/server";

// Minimal contact endpoint. It validates and logs the submission.
// To actually deliver messages, wire an email provider here (Resend,
// Postmark, SendGrid, Nodemailer, …) or forward to a webhook / CRM.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("New contact submission:", {
    name,
    email,
    company: String(body.company ?? ""),
    message,
  });

  return NextResponse.json({ ok: true });
}

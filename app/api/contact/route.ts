import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.message) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  // TODO: Connect this endpoint to the client's approved email service or CRM.
  console.info("Shivaflex form submission received", { formType: body.formType, email: body.email, company: body.company });
  return NextResponse.json({ ok: true });
}

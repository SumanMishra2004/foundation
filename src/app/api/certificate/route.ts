import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email")?.toLowerCase().trim();

  if (!email) {
    return NextResponse.json({ error: "Email parameter is required" }, { status: 400 });
  }

  try {
    const certificate = await client.fetch(
      `*[_type == "certificate" && lower(email) == $email][0]{
        name,
        email,
        role,
        presentationTitle,
        certificateCode
      }`,
      { email }
    );

    if (!certificate) {
      return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
    }

    return NextResponse.json(certificate);
  } catch (err: any) {
    console.error("Certificate fetch error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

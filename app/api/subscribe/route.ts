import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name } = (await req.json()) as { email?: string; name?: string };

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, message: "Email requerido" }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      return NextResponse.json(
        { ok: false, message: "Faltan MAILERLITE_API_KEY o MAILERLITE_GROUP_ID" },
        { status: 500 }
      );
    }

    const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: { name: name || "" },
        groups: [groupId],
      }),
    });

    const data = await mlRes.json().catch(() => null);

    if (!mlRes.ok) {
      return NextResponse.json(
        { ok: false, message: data?.message || "Error MailerLite", details: data },
        { status: mlRes.status }
      );
    }

    return NextResponse.json({ ok: true, message: "Suscrito correctamente" });
  } catch {
    return NextResponse.json({ ok: false, message: "Error inesperado" }, { status: 500 });
  }
}

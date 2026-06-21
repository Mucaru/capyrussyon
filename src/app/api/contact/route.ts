import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toAddress) {
      console.error(
        "Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable."
      );
      return NextResponse.json(
        { error: "Server belum dikonfigurasi untuk mengirim email." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Update sender domain after verifying your domain in Resend.
      // Until then, Resend's sandbox sender (onboarding@resend.dev) works for testing.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toAddress,
      replyTo: email,
      subject: `Pesan baru dari ${name} (lewat portfolio)`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Gagal mengirim email. Coba lagi nanti." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan tak terduga." },
      { status: 500 }
    );
  }
}

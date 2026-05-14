import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      response.cookies.set({
        name: "schemebot_admin_session",
        value: "1",
        httpOnly: true,
        path: "/",
        maxAge: 86400, // 24 hours
        sameSite: "lax",
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

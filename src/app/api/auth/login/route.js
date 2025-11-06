// /app/api/auth/login/route.js
import jwt from "jsonwebtoken";
import cookie from "cookie";

export async function POST(req) {
  try {
    const { name, password } = await req.json(); // <-- must match frontend
    const ADMIN_NAME = process.env.ADMIN_NAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (name !== ADMIN_NAME || password !== ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = jwt.sign({ name }, JWT_SECRET);

    return new Response(JSON.stringify({ message: "Logged in successfully" }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 365 * 10,
          path: "/",
        }),
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

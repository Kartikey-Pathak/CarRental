// app/admin/page.jsx
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import AdminPage from "./AdminPage"; // your existing client component

export default function AdminPageWrapper() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET;

  try {
    // Verify JWT
    jwt.verify(token, JWT_SECRET);

    // ✅ Token is valid → render AdminPage
    return <AdminPage />;
  } catch {
    // ❌ Token invalid or missing → redirect/login message
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">
          Unauthorized. Please{" "}
          <a href="/login" className="underline text-blue-600">
            login
          </a>.
        </p>
      </div>
    );
  }
}

"use client";
import { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!form.name || !form.password) return alert("Fill all fields!");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        // Notify parent Admin component
        if (onLoginSuccess) onLoginSuccess();
      } else alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-10 text-black">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border-2 outline-none p-2 rounded w-full mb-4 text-black border-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border-2 p-2 rounded outline-none w-full mb-4 text-black border-black"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full mb-5 cursor-pointer transition-all py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

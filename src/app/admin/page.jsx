"use client";

import { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import Login from "../login/page";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  // check cookies only on client
  useEffect(() => {
    if (document.cookie.includes("token=")) {
      setLoggedIn(true);
    }
  }, []);

  return loggedIn ? (
    <AdminPanel />
  ) : (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl mb-6 text-black">
          Please login to access Admin Panel
        </h1>
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      </div>
    </div>
  );
}

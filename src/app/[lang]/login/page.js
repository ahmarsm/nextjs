"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { lang } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      setIsLoading(false);
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(password)) {
      setError("Password must contain at least one special character");
      setIsLoading(false);
      return;
    }

    if (email === "ahmarsm@gmail.com" && password === "abc@1234") {
      setError("");
      router.push(`/${lang}/dashboard`);
    } else {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {setEmail(e.target.value);setError("");}}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value);setError("");}}
          />
        </div>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}
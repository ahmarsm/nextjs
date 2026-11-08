"use client";

import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "Ahmar",
    email: "ahmar@example.com",
    password: "12345678",
  });

  const [message, setMessage] = useState("");

  // Update form data when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setMessage(result.message);
    } catch (error) {
      setMessage("Something went wrong!");
    }
  };

  return (
    <main>
      <h1>Register User</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <br /><br />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <br /><br />

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </main>
  );
}

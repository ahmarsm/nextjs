
export async function POST(request) {
  // Read the data sent by the frontend
  const data = await request.json();

  console.log("Received data:", data);

  // Extract individual values
  const { name, email, password } = data;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  // Send response back to frontend
  return Response.json({
    success: true,
    message: "Registration successful!",
  });
}

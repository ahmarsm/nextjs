export async function GET() {
  return Response.json([
    {
      id: 101,
      name: "iPhone 17",
      price: 80000,
    },
    {
      id: 102,
      name: "Samsung Galaxy",
      price: 75000,
    },
  ]);
}
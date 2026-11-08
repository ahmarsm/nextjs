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


export async function POST(request) {
  const data = await request.json();

  return Response.json({
    message: "Product received successfully",
    receivedData: data,
  });
}

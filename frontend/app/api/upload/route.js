export const POST = async (req) => {
  // Simulate a delay like a real upload
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Return a fake success response
  return new Response(
    JSON.stringify({
      message: "File uploaded successfully (fake)",
      filename: "example.pdf",
    }),
    { status: 200 }
  );
};

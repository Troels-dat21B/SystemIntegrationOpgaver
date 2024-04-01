const http = require("http");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Send dummy data at regular intervals
  setInterval(() => {
    const data = `data: ${JSON.stringify({ message: "Hello, world!" })}\n\n`;
    res.write(data);
  }, 1000);

  // Send an initial dummy event to establish connection
  res.write("event: initial\n");
  res.write("data: Connection established\n\n");

  // Handle connection closure
  req.on("close", () => {
    console.log("Client disconnected");
    res.end();
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

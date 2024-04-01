const messageElement = document.getElementById("message");

// Connect to the server-sent events endpoint
const eventSource = new EventSource("/events");

// Handle incoming messages
eventSource.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  const message = data.message;
  messageElement.textContent = message;
});

// Handle connection open
eventSource.addEventListener("open", () => {
  console.log("Connection established");
});

// Handle connection error
eventSource.addEventListener("error", (error) => {
  console.error("Error:", error);
});

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

let registredWebhooks = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//FIND WEBHOOKS EKSEMPLER, OG SÆT FIKTIV DATA OP, SÅ EXPOSEE KAN TESTE ENDPOINTS OG FÅ VIST DATA TILBAGE

app.post("/register", (req, res) => {
  const { eventType, endpoint } = req.body;

  if (!eventType || !endpoint) {
    console.log(res);
    return res.status(400).send("Invalid request");
  }

  registredWebhooks[eventType] = endpoint;

  res.status(200).send(`Webhook for ${eventType} has been registered`);
});

app.post("/unregister", (req, res) => {
  const { eventType } = req.body;

  if (!eventType) {
    return res.status(400).send("Invalid request");
  }

  delete registredWebhooks[eventType];

  res.status(200).send(`Webhook for ${eventType} has been unregistered`);
});

app.get("/ping", (req, res) => {
  Object.values(registredWebhooks).forEach((endpoint) => {
    console.log(endpoint);
  });
  res.status(200).send("Pinged all registered webhooks" + JSON.stringify(registredWebhooks));
});

// Endpoint for simulating payment processed event
app.get("/simulate/payment-processed", (req, res) => {
  // Simulate payment processed event occurring
  setTimeout(() => {

    const eventType = "payment_processed";

    if (registredWebhooks[eventType]) {

      // Here, you would send a request to the registered endpoint
      console.log(`Simulating payment processed event`);

      // Simulated response
      // For demonstration purposes, sending response to webhook endpoint
      res.status(200).send(`Simulated ${eventType} event`);

    } else {

      console.log(`No webhook registered for event type '${eventType}'`);
      res
        .status(200)
        .send(`No webhook registered for event type '${eventType}'`);
    }
  }, 5000); // Simulating event every 5 seconds (adjust as needed)
});

// Endpoint for simulating new payment made event
app.get("/simulate/new-payment-made", (req, res) => {

  // Simulate new payment made event occurring
  setTimeout(() => {

    const eventType = "new_payment_made";

    if (registredWebhooks[eventType]) {

      // Here, you would send a request to the registered endpoint
      console.log(`Simulating new payment made event`);

      // Simulated response
      // For demonstration purposes, sending response to webhook endpoint
      res.status(200).send(`Simulated ${eventType} event`);

    } else {

      console.log(`No webhook registered for event type '${eventType}'`);
      res
        .status(200)
        .send(`No webhook registered for event type '${eventType}'`);
    }
  }, 10000); // Simulating event every 10 seconds (adjust as needed)
});

// Endpoint for simulating invoice send event
app.get("/simulate/invoice-send", (req, res) => {

  // Simulate invoice send event occurring
  setTimeout(() => {

    const eventType = "invoice_send";

    if (registredWebhooks[eventType]) {

      // Here, you would send a request to the registered endpoint
      console.log(`Simulating invoice send event`);

      // Simulated response
      // For demonstration purposes, sending response to webhook endpoint
      res.status(200).send(`Simulated ${eventType} event`);

    } else {
      console.log(`No webhook registered for event type '${eventType}'`);
      res
        .status(200)
        .send(`No webhook registered for event type '${eventType}'`);
    }
  }, 15000); // Simulating event every 15 seconds (adjust as needed)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

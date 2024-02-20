import express from "express";

const app = express();
const url = "http://127.0.0.1:8000/";

app.get("/requestFastAPI", async (req, res) => {
    const response = await fetch(`${url}fastapiData`);
    const result = await response.json();
    res.send({ data: result });
});

app.get("/expressData", (req, res) => {
    res.send({ message: "isRunning" });
});

app.get("/requestCsv", async (req, res) => {
    const response = await fetch(`${url}csv`);
    const result = await response.json();
    res.send({ data: result });
});

app.get("/requestJson", async (req, res) => {
    const response = await fetch(`${url}json`);
    const result = await response.json();
    res.send({ data: result });
});

app.get("/requestXml", async (req, res) => {
    const response = await fetch(`${url}xml`);
    const result = await response.json();
    res.send({ data: result });
});

app.get("/requestXml", async (req, res) => {
    const response = await fetch(`${url}xml`);
    const result = await response.json();
    res.send({ data: result });
});

app.get("/requestYaml", async (req, res) => {
    const response = await fetch(`${url}yaml`);
    const result = await response.json();
    res.send({ data: result });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
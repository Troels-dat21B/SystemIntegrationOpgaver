import express from "express";

const app = express(); //Server instans

/* app.get("/", (req, res) => {
    res.send("Hello World");
}); */ //Dette er standarden for get requests

app.get("/", (req, res) => {
    res.send({message: "Hello World"}); //java script object
    
});

app.get("/otherRoute", (req, res) => {
    res.send({message: "Other Route"});
});

app.post("/postRoute", (req, res) => {  //Post request
    res.send({message: "Post Route"});
});
const PORT = 8080; //Porten som serveren skal køre på
app.listen(PORT, () => console.log("Server is running on port:", PORT)); //Starter appen på port 8080
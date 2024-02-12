import express from "express";
import fs from "fs";


const app = express(); //Server instans

/* app.get("/", (req, res) => {
    res.send("Hello World");
}); */ //Dette er standarden for get requests

const folder = fs.readdirSync("../../01_Assignment/File_Formats"); //Finder filerne i mappen

app.get("/", (req, res) => {
    res.send({
        message: "skriv følgende efter '/' for at få vist de andre routes:"
            + "txtRoute, "
            + "yamlRoute, "
            + "jsonRoute, "
            + "csvRoute, "
            + "docRoute, "
            + "xmlRoute."
    }); //java script object
    
});

//txt fil
app.get("/txtRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[0]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    res.send(fileContent);
});

//yaml fil
app.get("/yamlRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[1]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    res.send(fileContent);
});

//json fil
app.get("/jsonRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[2]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    res.send(fileContent);
});

//csv fil
app.get("/csvRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[3]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    res.send(fileContent);
});

//doc fil
app.get("/docRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[4]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    res.send(fileContent);
});

//xml fil
app.get("/xmlRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[5]}`; //Finder filen i mappen
    console.log(fs.readFileSync(string, "utf-8").toString());
    const fileContent = fs.readFileSync(string, "utf-8").toString();
    res.send(fileContent);
});


/* app.post("/postRoute", (req, res) => {  //Post request
    res.send({message: "Post Route"});
}); */


const PORT = 8080; //Porten som serveren skal køre på
app.listen(PORT, () => console.log("Server is running on port:", PORT)); //Starter appen på port 8080
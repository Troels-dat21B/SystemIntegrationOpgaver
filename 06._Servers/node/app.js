import express, { json } from "express";
import fs from "fs";
import yaml from "js-yaml";
import csvParser from "csv-parser";
import xml2js from "xml2js"


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
    //const fileContent = parse(string);
    const fileContent = fs.readFileSync(string, "utf-8");
    const jsonData = {fileContent};
    res.send(jsonData);
});

//yaml fil
app.get("/yamlRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[1]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    const jsonData = yaml.load(fileContent);
    res.send(jsonData);
});

//json fil
app.get("/jsonRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[2]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    const jsonData = JSON.parse(fileContent);
    res.send(jsonData);
});

//csv fil
app.get("/csvRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[3]}`; //Finder filen i mappen
    const fileContent = [];
    fs.createReadStream(string) //Opretter en read stream
        .pipe(csvParser()) //Piper det til csvParser
        .on("data", (row) => { //Når der er data i streamen
            fileContent.push(row); //Pusher dataen til fileContent
        })
        .on("end", () => { //Når der ikke er mere data i streamen
            res.send(fileContent);//Sender fileContent (Eller udføre en anden handling)
        });
});


//xml fil
app.get("/xmlRoute", (req, res) => {
    const string =  `../../01_Assignment/File_Formats/${folder[4]}`; //Finder filen i mappen
    const fileContent = fs.readFileSync(string, "utf-8");
    xml2js.parseString(fileContent, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});


/* app.post("/postRoute", (req, res) => {  //Post request
    res.send({message: "Post Route"});
}); */


const PORT = 8080; //Porten som serveren skal køre på
app.listen(PORT, () => console.log("Server is running on port:", PORT)); //Starter appen på port 8080
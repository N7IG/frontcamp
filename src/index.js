const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const DB_PATH = "./database/db.json";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/news", function(request, response){
    console.log("GET request");
    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        response.send(data);
    })
});

app.get("/news/:id", function(request, response){
    const id = request.params.id;
    console.log("GET request with parameter id = " + id);

    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const dataObject = JSON.parse(data);        
        response.send(JSON.stringify(dataObject[id]));
    })
});

app.put("/news/:id", function(request, response){
    const id = request.params.id;
    console.log("GET request with parameter id = " + id);

    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const dataObject = JSON.parse(data);  
        dataObject[id] = request.body;
        fs.writeFile(DB_PATH, JSON.stringify(dataObject), (err, data, next) => {
            if (err) {
                next(err);
            } else { 
                response.send(dataObject);
            }
        })
    })
});

app.post("/news", function(request, response){
    console.log("POST request");
    console.log("body", request.body);

    fs.writeFile(DB_PATH, JSON.stringify(request.body), (err, data, next) => {
        if (err) {
            next(err);
        } else { 
            response.send(request.body);
        }
    })
});

app.delete("/news/:id", function(request, response){
    const id = request.params.id;  
    
    fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const dataObject = JSON.parse(data);  
        delete dataObject[id];

        fs.writeFile(DB_PATH, JSON.stringify(dataObject), (err, data, next) => {
            if (err) {
                next(err);
            } else { 
                response.send(dataObject);
            }
        })
    })
});

app.listen(3000);
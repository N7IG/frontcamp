const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let db = require("../db/db")

app.get("/news", function(request, response){
    console.log("GET request");
    
    response.send(db.news);
});

app.get("/news/:id", function(request, response){
    const id = request.params.id;

    console.log("GET request with parameter id = " + id);

    response.send(db.news.id);
});

app.put("/news/:id", function(request, response){
    const id = request.params.id;

    console.log("GET request with parameter id = " + id);

    db.news.id = request.body

    response.send(db.news.id);
});

app.post("/news", function(request, response){
    console.log("POST request");
    console.log("body", request.body);

    db.news = request.body

    response.send(db.news);
});

app.delete("/news/:id", function(request, response){
    const id = request.params.id;   

    db.news = db.news.filter(function(value, index){
        return index != id - 1;
    });

    console.log("DELETE request with parameter id = " + id);

    response.send(db.news);
});

app.listen(3000);
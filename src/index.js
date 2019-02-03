const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const filename = "./results.log";
const { createLogger, format, transports } = require("winston");
const mongoose = require("mongoose");
const newsModel = require("../mongoose/news.model");
const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        format.json()
    ),
    transports: [
        new transports.Console({
            level: "info",
            format: format.combine(
                format.colorize(),
                format.printf(
                    info => `${info.timestamp} ${info.level}: ${info.message}`
                )
            )
        }),
        new transports.File({ filename })
    ]
});

mongoose.connect("mongodb://localhost/newsdb", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/news", function(request, response) {
    logger.info("URL: '/news', GET request");

    newsModel.find({}).exec((err, news) => {
        if (err) {
            response.send("Error", err);
        } else {
            response.json(news);
        }
    });
});

app.get("/news/:id", function(request, response) {
    const id = request.params.id;
    logger.info(`URL: '/news${id}', GET request with parameter id = ${id}`);

    newsModel.findOne({ _id: id }).exec((err, news) => {
        if (err) {
            response.send("Error", err);
        } else {
            response.json(news);
        }
    });
});

app.put("/news/:id", function(request, response) {
    const id = request.params.id;
    logger.info(`URL: '/news${id}', PUT request with parameter id = ${id}`);

    newsModel.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                title: request.body.title,
                author: request.body.author,
                category: request.body.category
            }
        },
        { upsert: true },
        (err, news) => {
            if (err) {
                response.send("Error", err);
            } else {
                response.send(news);
            }
        }
    );
});

app.post("/news", function(request, response) {
    logger.info(`URL: '/news', PUT request`);

    newsModel.create(request.body, (err, news) => {
        if (err) {
            response.send("Error", err);
        } else {
            console.log(news);
            response.send(news);
        }
    });
});

app.delete("/news/:id", function(request, response) {
    const id = request.params.id;

    logger.info(`URL: '/news${id}', DELETE request with parameter id = ${id}`);

    newsModel.findOneAndDelete({ _id: id }, (err, news) => {
        if (err) {
            response.send("Error", err);
        } else {
            response.send(news);
        }
    });
});

app.listen(3000);

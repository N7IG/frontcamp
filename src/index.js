const constants = require("./constants")
const express = require("express");
const app = express();

app.all("*", function(request, response){
    response.send(constants.SAMPLE_RESPONSE);
});

app.listen(3000);
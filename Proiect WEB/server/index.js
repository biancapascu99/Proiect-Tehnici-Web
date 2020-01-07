const express = require('express')
const fs = require('fs');
const commentsFile = require('./stocare_comentarii.json')
const app = express()
const port = 3000

var commentsArray = commentsFile.comments;

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body);
    commentsArray.push(req.body);
    var stringReq = JSON.stringify(commentsFile);

    fs.writeFile("stocare_comentarii.json", stringReq, 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
        res.send({ Status: 'OK' });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
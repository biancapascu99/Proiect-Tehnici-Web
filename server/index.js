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

app.get('/', (req, res) => {

    fs.readFile('stocare_comentarii.json', (err, data) => {
        if (err) throw err;
        let comments = JSON.parse(data);
        console.log(comments);
        res.send(comments);
    });
})

app.post('/', (req, res) => {
    console.log(req.body);
    commentsArray.unshift(req.body);
    var stringReq = JSON.stringify(commentsFile);

    fs.writeFile("stocare_comentarii.json", stringReq, 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
        res.send({ Status: 'OK', lastComment: req.body });
    });
})

app.post('/delete', (req, res) => {
    console.log("ID de sters", req.body);
    var stringReq = commentsFile;
    console.log(stringReq, "STRIG REQ")
    for (var i = 0; i < stringReq.comments.length; i++) {
        console.log(req.body.id, " ", stringReq.comments[i].id);
        if (req.body.id == stringReq.comments[i].id) {
            console.log("da");
            var deSters = i;
            break;
        }
    }
    stringReq.comments.splice(deSters, 1);

    var stringReqText = JSON.stringify(stringReq);
    console.log(22222222, stringReqText)

    fs.writeFile("stocare_comentarii.json", stringReqText, 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
        res.send({ Status: 'OK', comments: stringReq.comments });
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
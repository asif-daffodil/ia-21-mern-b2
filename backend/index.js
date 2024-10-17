const express = require('express');
const app = express();
const port = 5000;

// cors
const cors = require('cors');
app.use(cors());

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// server start
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

// json data
app.get("/json", (req, res) => {
    res.json({ name: "John Doe", age: 25 });
});

// params
app.get("/user/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// not mandatory params
app.get("/student/:name?", (req, res) => {
    res.send(`Student Name: ${req.params.name ?? "No Name"}`);
});

// query params
app.get("/employee", (req, res) => {
    res.send(`Employee ID: ${req.query.id}`);
});
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const joiningForm = require('./models/joiningForm.js');
const connectToMongo = require('./dbConnect');

const app = express();
const port = 80;

// Express related stuff 
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded()); // Helps to bring the form data by using POST request
app.use(express.json()); // converts to json

// Pug related stuff 
app.set('view engine', 'pug'); // Setting the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views diresctory

//Endpoints
app.get("/", (req, res) => {
    res.status(200).render('index.pug')
})

app.post("/", async (req, res) => {
    const myData = new joiningForm(req.body);
    await myData.save()
        .then(() => {
            setTimeout(() => {
                res.status(200).render('index.pug')
            }, 1000);
        }).catch((err) => {
            res.status(400).send(err);
        });
})

app.get("/mission", (req, res) => {
    res.status(200).render('mission.pug')
})

app.get("/about", (req, res) => {
    res.status(200).render('about.pug')
})

app.get("/contact", (req, res) => {
    res.status(200).render('contact.pug')
})

app.post("/contact", (req, res) => {
    alert("Your requset has been submited successfully")
    data = req.body;
    let var1 = "";
    let outputData = "";
    for (const info in data) {
        var1 = `${info} : ${data[info]}\n`;
        outputData += var1;
    }
    fs.appendFile('outputContact.txt', `\n${outputData}`, (err) => {
        if (err) throw err;
    });
})

// Connect to the database
connectToMongo();

// Start the server 
app.listen(port, () => {
    console.log(`The application is running on http://127.0.0.1:${port}`);
})

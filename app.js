const express = require('express');
const path = require('path');
const joiningForm = require('./models/joiningForm.js');
const contactForm = require('./models/contactForm.js');
const connectToMongo = require('./config/dbConnect.js');
// const fs = require('fs');

const app = express();
const port = 80;
connectToMongo(); // Connect to the database

// Express related stuff 
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded()); // Helps to bring the form data by using POST request

// Pug related stuff 
app.set('view engine', 'pug'); // Setting the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views diresctory

//Endpoints
app.get("/", (req, res) => {
    res.status(200).render('home.pug');
})

app.post("/", async (req, res) => {
    const myData = new joiningForm(req.body);
    await myData.save()
        .then(() => {
            res.send("Yor form has been submitted successfully");
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

app.post("/contact", async (req, res) => {
    const myData = new contactForm(req.body);
    await myData.save()
        .then(() => {
            res.send("Yor issue has been successfuly recorded and will be solved soon");
        }).catch((err) => {
            res.status(400).send(err);
        });
    // data = req.body;
    // let var1 = "";
    // let outputData = "";
    // for (const info in data) {
    //     var1 = `${info} : ${data[info]}\n`;
    //     outputData += var1;
    // }
    // fs.appendFile('outputContact.txt', `\n${outputData}`, (err) => {
    //     if (err) throw err;
    // });
})

// Start the server 
app.listen(port, () => {
    console.log(`The application is running on http://127.0.0.1:${port}`);
})

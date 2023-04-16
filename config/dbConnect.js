const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect('mongodb+srv://bgmanu:EztszEpZkJ2Zbrvf@bharatdanceacademy.6tkfjyk.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log("Database connected successfully");
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = connectToMongo;

// mongosh command 
// mongosh "mongodb+srv://bharatdanceacademy.6tkfjyk.mongodb.net/myFirstDatabase" --apiVersion 1 --username bgmanu
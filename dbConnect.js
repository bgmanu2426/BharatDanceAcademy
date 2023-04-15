const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/BharatDanceAcademy')
        .then(() => {
            console.log("Database connected successfully");
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = connectToMongo;
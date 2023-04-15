const mongoose = require('mongoose');
const { Schema } = mongoose;

const joinSchema = new Schema({
    name: String,
    email: String,
    age: String,
    gender: String,
    danceskills: String,
    address: String,
});

module.exports = mongoose.model('joiningForm', joinSchema)
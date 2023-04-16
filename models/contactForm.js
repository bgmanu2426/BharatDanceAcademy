const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    email: String,
    issue: String,
    description: String,
});

module.exports = mongoose.model('contactForm', contactSchema)
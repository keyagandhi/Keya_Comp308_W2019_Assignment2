let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    fullName: String,
    email: String,
    contactNumber: String,
    message: String
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);
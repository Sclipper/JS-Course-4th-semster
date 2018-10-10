const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let JobSchema = new Schema({
    type: String,
    company: String,
    companyUrl: String
});

let UserSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    created: {type: Date, default: Date.now},
    lastUpdated: Date,
    job: [JobSchema]
});

module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const validator = require("validator");

const { Schema, model } = mongoose;
const client = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validator: validator.isEmail, // Validate email using the isEmail function
    message: "Invalid email address",
  },
  phone: {
    type: Number,
    unique: true,
    required: true
   
  },
});

const clients = model("users", client);
module.exports = clients;

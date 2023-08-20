const mongoose = require("mongoose");
const clients = require('../models/contact')

const creatUsers = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    //find based on email
    const findEmail = await clients.findOne({ email: email });
    const findPhone = await clients.findOne({ phone: phone });
    const regex = /^\d{11}$/;
    // create new user

    if (findEmail) {
      res.status(400).json({ message: "email already exist" });
    } else if (!regex.test(phone)) {
      res.status(400).json({ message: "invalid phone number" });
    } else if (findPhone) {
      res.status(400).json({ message: "phone number already exist" });
    } else {
      const creatclient = await clients.create({
        name,
        email,
        phone,
      });
      res
        .status(201)
        .json({ data: creatclient, message: "application successfull" });
    }
  } catch (error) {
    return res.status(500).json({ error, message: error });
  }
};

const getUsers = async (req, res) => {
  const getClients = await clients.find();
  try {
    res.status(201).json({ data: getClients });
  } catch (err) {
    const error = `cant find user: ${err.message}`;
    res.status(404).json(error);
  }
};

module.exports = {
  creatUsers,
  getUsers,
};

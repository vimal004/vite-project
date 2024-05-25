const express = require("express");
const mongoose = require("mongoose");
const { type } = require("os");
const userrouter = express.Router();
userrouter.use(express.json());

mongoose
  .connect("mongodb+srv://2004vimal:zaq1%40wsx@cluster0.6tktuqx.mongodb.net/")
  .then(() => {
    console.log("Mongo DB Connected!");
  })
  .catch((e) => {
    console.log(e);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = mongoose.model("User", userSchema);

userrouter.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const response = await newUser.save();
    res.status(201).send(response);
    console.log(response);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to create user", details: error.message });
    console.error(error);
  }
});

module.exports = userrouter;

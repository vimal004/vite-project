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

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
  })
);

userrouter.post("/", async (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

module.exports = userrouter;

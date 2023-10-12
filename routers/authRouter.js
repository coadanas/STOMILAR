const express = require("express");
const userModel = require("../model/userModel");

const authRouter = express.Router();

authRouter
.route("/")
.get(getContact)
.post(postSignUp);

function getContact(req, res) {
  res.render("contact.hbs")
}

async function postSignUp(req, res) {
  try {
    let obj = req.body;
    let user = await userModel.create(obj);
    res.render("contact.hbs");
    console.log(user);
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = authRouter;
const express = require("express");
const userModel = require("../model/userModel");
const postRouter = express.Router();

postRouter.get("/branding-design", (req, res)=> {
  res.render("../post/branding.hbs");
});
postRouter.get("/graphic-design", (req, res)=> {
  res.render("../post/graphic.hbs");
});
postRouter.get("/web-devlopment", (req, res)=> {
  res.render("../post/web.hbs");
});

module.exports = postRouter;
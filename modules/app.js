const http = require("http");

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
// ======= port, hostname ===========
const port = 5325;
const hostname = "0.0.0.0";
const server = http.createServer(app);
// ====== SERVER LISTEING =======
server.listen(port, hostname, (req, res)=> {
  console.log(`http://${hostname}:${port}`);
});
// encoded url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// STATIC PATH -(public)
const staticPath = path.join(__dirname, "../tamplates/public");
app.use(express.static(staticPath));
// VIEW ENGINE & VIEW PATH
const viewPath = path.join(__dirname, "../tamplates/views");
app.set("view engine", "hbs");
app.set("views", viewPath);
// PARTIAL PATH -(partials)
const partialPath = path.join(__dirname, "../tamplates/partials");
hbs.registerPartials(partialPath);

// HOME ROUTER
app.get("/", (req, res)=> {
  res.render("index.hbs");
});

// CONTACT US TOUTER
const authRouter = require("../routers/authRouter");
app.use("/contact-us", authRouter);
// POST US TOUTER
const postRouter = require("../routers/postRouter");
app.use("/post", postRouter);
  
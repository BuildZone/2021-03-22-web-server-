const path = require("path");
require("dotenv").config();
const profilesRoutes = require("./routes/profiles");
const profilesImageRoutes = require("./routes/profileImage");
const uploadRoutes = require("./routes/upload");

const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const paperRoutes = require("./routes/pastpapers");
const PORT = 3000; //port number to run express
const PORTS = 3000;
const api = require("./routes/api");
const video = require("./routes/video");
const app = express(); //instance of express
var Admin = require("./models/Admin");
var profileImage =require("./models/profileImage")
var Paper = require("./models/grade06paper");//paper
var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const pastpaper = require("./routes/pastpapers");

app.use(cors());

app.use(bodyParser.json()); //to handle json data

app.use("/api", api);
app.use("/video", video);
app.use("/papers", pastpaper);
app.use("/profiles", profilesRoutes);
app.use("/profileImage", profilesImageRoutes);
app.get("/", function (req, res) {
  res.send("Server Works"); //checking statement
});

mongoose
  .connect(
    "mongodb+srv://sachithdb:1996sachith@cluster0.pv6dl.mongodb.net/eventsdb?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORTS, console.log(`Server is running on port ${PORTS}`));
  })
  .catch((err) => console.log(`Could not connect to database server`, err));

app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  console.log(req.body);

  var AdminData = req.body;
  var admin = new Admin(AdminData);
  admin.save((error, result) => {
    if (error) console.log("AdminData", AdminData);
    console.log("save data sucess");
    res.sendStatus(200);
  });
});


app.post("/paper", (req, res) => {
  console.log(req.body);
var AdminData = req.body;
var admin = new Paper(AdminData);
admin.save((error, result) => {
  if (error) console.log("AdminData", AdminData);
  console.log("save paper sucess");
  res.sendStatus(200);
});
});
















app.post("/login", (req, res) => {
  var AdminData = req.body;

  Admin.findOne({ email: AdminData.email }, (error, Admin) => {
    if (error) {
      console.log(error);
    } else if (!Admin) {
      res.status(401).send("Invalid email");
    } else if (Admin.password !== AdminData.password) {
      res.status(401).send("Invalid password");
    } else {
      let payload = { subject: Admin._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});



app.use("/images", express.static(path.join("images")));

app.use("/api/profiles", profilesRoutes);

app.use("/pastpapers", express.static(path.join("pastpapers")));

app.use("/api/pastpapers", paperRoutes);

app.use("/videos", express.static(path.join("videos")));

app.use("/api/upload", uploadRoutes);


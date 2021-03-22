const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const Pastpaper = require("../models/pastpaper");
const Profile = require("../models/profile");
const mongoose = require("mongoose");


const Teacher = require('../models/teacher');

const teacher = require('../models/teacher')
const db =
  "mongodb+srv://sachithdb:1996sachith@cluster0.pv6dl.mongodb.net/eventsdb?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("Connected to mongodb");
  }
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];

  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else if (!user) {
      res.status(401).send("Invalid email");
    } else if (user.password !== userData.password) {
      res.status(401).send("Invalid password");
    } else {
      let payload = { subject: user._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});
router.get("/userdetails", function (req, res) {
  console.log("Get user Details");
  User.find({}).exec(function (err, userdetails) {
    if (err) {
      console.error("Error!" + err);
    } else {
      res.json(userdetails);
    }
  });
});



router.get('/teachers', function(req,res){

  let TeacherData = req.body


  console.log('get request for teachers');
  Teacher.find({})
  .exec(function(err, teachers){
      if(err){
          console.log("Error retrieving teachers");
      }else{
          console.log('Succesfully retrieved')
          res.json(teachers);
      }
  })
})

router.post('/teacher', function(req, res){
  let teacherData = req.body;
  let teacher = new Teacher(teacherData);

  teacher.save((error, insertedTeacher) =>{
      if(error){
          console.log(error)
      } else {
          return;
      }
  })

});

// user.save((error, registeredUser) => {
//     if(error){
//         console.log(error)
//     } else {
//         let payload = { subject: registeredUser._id}
//         let token = jwt.sign(payload, 'secretKey')
//         res.status(200).send({token})
//     }
// } )


router.put('/teacher:id', function(req,res){
  console.log('Update a Teacher');
  Teacher.findByIdAndUpdate(req.params.id,
      {
      $set:{name:req.body.name, subject:req.body.subject, area: req.body.area, grade: req.body.grade,
           email:req.body.email, Telephone:req.body.Telephone, description:req.body.description }
      },
      {
          new: true
      },
      function(err, updatedTeacher){
          if(err){
              res.send("Error updating teacher");
          } else {
              res.json(updatedTeacher);
          }
      });
});


router.delete('/teacher:id', function(req, res){
  console.log('Delete a teacher');
  Teacher.findByIdAndRemove(req.params.id, function(err, deletedTeacher){
      if(err){
          res.send("Error deleting teacher");
      } else {
          res.json(deletedTeacher);
      }
  });
});










/*
router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "sachith",
      description: "Subject : Maths",
      area: "Wellawaya",
    },
    {
      _id: "2",
      name: "Bhagya",
      description: "Subject : Science",
      area: "Rathnapura",
    },
    {
      _id: "3",
      name: "Dhammika",
      description: "Subject : English",
      area: "Kurunegala",
    },
    {
      _id: "4",
      name: "Hansaka",
      description: "Subject : Technolody",
      area: "Beliatta",
    },
    {
      _id: "5",
      name: "Nalinda",
      description: "Subject : ICT",
      area: "Balangoda",
    },
  ];

  res.json(events);
});
*/
router.get("/special", verifyToken, (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Grade 06",
      description: "Learn Now",
    },
    {
      _id: "2",
      name: "Grade 07",
      description: "Learn Now",
    },
    {
      _id: "3",
      name: "Grade 08",
      description: "Learn Now",
    },
    {
      _id: "4",
      name: "Grade 09",
      description: "Learn Now",
    },
    {
      _id: "5",
      name: "Grade 10",
      description: "Learn Now",
    },
  ];

  res.json(events);
}); 
router.delete("/profiles/:id", function (req, res) {
  console.log("delete request for ads");
  Profile.findByIdAndRemove(req.params.id, function (err, deleteProfiles) {
    if (err) {
      res.send("Error!" + err);
    } else {
      res.json(deleteProfiles);
    }
  });
});

router.put("/profiles/:id", function (req, res) {
  console.log("approve for  update");
  Profile.findByIdAndUpdate(
    req.params.id,
    {
      $set: { name: req.body.name, imagepath: req.body.imagepath },
    },
    {
      new: true,
    },
    function (err, updateProfiles) {
      if (err) {
        res.send("Error!" + err);
      } else {
        res.json(updateProfiles);
      }
    }
  );
});


router.get("/pastpapers", function (req, res) {
  console.log("Get request for all pastpapers");
  Pastpaper.find({}).exec(function (err, pastpapers) {
    if (err) {
      console.error("Error!" + err);
    } else {
      res.json(pastpapers);
    }
  });
});

module.exports = router;

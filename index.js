const EducationTable = require('./models/education'); // Import the User model
const SkillTable = require('./models/skill'); // Import the User model
const ExperienceTable = require('./models/experience'); // Import the User model

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());
console.log(app)
// const db = require('./db');

// let MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

const mongoose = require('mongoose');
const Education = require('./models/education');
// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/learning'; // Replace with your MongoDB URI
mongoose.connect(mongoURI)// { useNewUrlParser: true, useUnifiedTopology: true }
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const router = express.Router();


const PORT = process.env.PORT || 8080;
const skill = require("./routers/skills")

app.use("",skill);


app.listen(PORT, () => {
    console.log('server listening on port 8080')
})

app.get('/', async (req, res) => {
    try {
      const educations = await EducationTable.find();
      res.send(educations);
    } catch (error) {
      res.status(500).send(error);
    }
  });

// app.get('/',async (req, res) => {
//     // res.json(education_static);
//     let collection = await mongoose.collection("records");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// })

// app.post('/', async (req, res) => {
//     const education = new EducationTable(req.body);
//     try {
//       await education.save();
//       res.status(201).send(education);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   });


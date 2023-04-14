const express = require("express");
const mongoose = require("mongoose");
const User = require("./schemas/models");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://kalpeshmahale:Kalpesh10%4012@cluster0.rbtcuje.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/data", async (req, res) => {
  const myData = await User.find({});
  res.status(200).json({ myData });
});

app.post("/adddata", async (req, res) => {
  try {
    console.log(req.body.name);
    let name = req.body.name;
    let LastName = req.body.lname;
    let Email = req.body.email;
    let newUser = await User.create({
      name: name,
      LastName: LastName,
      Email: Email,
    });
    res.status(200).json({ newUser });
  } catch (e) {
    console.log(e);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let deleteUsersByid = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ deleteUsersByid });
  } catch (e) {
    console.log(e);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json({ user });
  } catch (e) {
    console.log(e);
  }
});

app.put("/edit/:id", async (req, res) => {
  try {
    let name = req.body.name;
    let LastName = req.body.lname;
    let Email = req.body.email;

    const data = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { name: name, LastName: LastName, Email: Email },
      { new: true }
    );

    res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log("Start");
});

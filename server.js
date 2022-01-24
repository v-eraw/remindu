const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const { resourceUsage } = require("process");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("data.csv");

MongoClient.connect(
  //TODO make a new reminder collection
  "mongodb+srv://inventory-tracker:test@cluster0.yzfmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
)
  .then((client) => {
    const db = client.db("inventory-tracker");
    const reminderCollection = db.collection("reminder");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.listen(3000, () => {
      console.log("Listening on 3000");
    });
    app.set("view engine", "ejs");

    app.get("/", (req, res) => {
      db.collection("reminder")
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { inventory: results });
        })
        .catch((error) => console.error(error));
    });

    app.post("/reminder/:id", (req, res) => {
      console.log(req.body);
      reminderCollection
        .findOneAndUpdate(
          { name: req.params.name },
          {
            $set: {
              name: req.body.name,
              info: req.body.info,
              quantity: req.body.quantity,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          res.redirect("/");
        });
    });

    app.post("/reminder", (req, res) => {
      reminderCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    app.post("/reminder/delete/:id", (req, res) => {
      reminderCollection
        .deleteOne({ name: req.params.name })
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    app.get("/reminder/csv/export", (req, res) => {
      reminderCollection.find({}).toArray((err, data) => {
        fastcsv
          .write(data, { headers: true })
          .on("finish", function () {
            console.log("Write to data.csv successfully!");
          })
          .pipe(ws);
      });
    });
  })
  .catch(console.error);

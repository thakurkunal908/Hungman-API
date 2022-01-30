const express = require("express");
const data_animals = require("./animals.json");
const data_places = require("./places.json");
const data_things = require("./things.json");
const utils = require("./utils");

const route = express.Router();

//animals
route.get("/animals", (req, res) => {
  if (data_animals.length) {
    return res.send(data_animals);
  }
  res.status(500);
  res.send({ err: "Internal Server Error" });
});

route.get("/animal", (req, res) => {
  if (data_animals.length) {
    let index = utils.getId(0, data_animals.length - 1);
    res.status(200);
    return res.send(data_animals[index]);
  }
  res.status(500);
  res.send({ err: "Internal Server Error" });
});

// Places

route.get("/places", (req, res) => {
  if (data_places.length) {
    return res.send(data_places);
  }
  res.status(500);
  res.send({ err: "Internal Server Error" });
});

route.get("/place", (req, res) => {
  if (data_places.length) {
    let index = utils.getId(0, data_places.length - 1);
    res.status(200);
    return res.send(data_places[index]);
  }
  res.status(500);
  res.send({ err: "Internal Server Error" });
});

//things

route.get("/things", (req, res) => {
  if (data_things.length) {
    return res.send(data_things);
  }
  res.status(500);
  res.send({ err: "Internal Server Error" });
});

route.get("/thing", (req, res) => {
  if (data_things.length) {
    let index = utils.getId(0, data_things.length - 1);
    res.status(200);
    return res.send(data_things[index]);
  }
  res.status(500);
  res.send({ err: "Internal Server Error" });
});

module.exports = route;

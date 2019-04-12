const express = require("express");
const bp = require("body-parser");
const animalDb = require("./animals.json");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// get everything
app.get("/cats", (req, res) => {
  res.json(animalDb.cats);
});

app.get("/dogs", (req, res) => {
  res.json(animalDb.dogs);
});

// get just one
app.get("/cats/:id", (req, res) => {
  const catData = animalDb.cats.filter(c => c.id == req.params.id);
  if (catData.length < 1) {
    res.status(404).json({});
  } else {
    res.json(catData[0]);
  }
});

app.get("/dogs/:id", (req, res) => {
  const dogData = animalDb.dogs.filter(d => d.id == req.params.id);
  if (dogData.length < 1) {
    res.status(404).json({});
  } else {
    res.json(dogData[0]);
  }
});

// add one
app.post("/cats", (req, res) => {
  const payload = req.body;

  if (!payload) {
    return res.status(400).json({ msg: "No data found" });
  }

  if (!payload.name) {
    return res.status(400).json({ msg: "Must have a name for cat" });
  }

  // last id
  const newId = animalDb.cats[animalDb.cats.length - 1]["id"] + 1;
  payload.id = newId;
  animalDb.cats.push(payload);

  return res.status(201).json({});
});

// deleting one
app.delete("/cats/:id", (req, res) => {
  const newCats = animalDb.cats.filter(c => c.id != parseInt(req.params.id));
  animalDb.cats = newCats;
  return res.status(200).json({});
});

// updating one
app.put("/cats/:id", (req, res) => {
  const payload = req.body;
  const catData = {
    id: parseInt(req.params.id),
    name: payload.name,
    fav: payload.fav
  };

  let catIndex = -1;
  for (let i = 0; i < animalDb.cats.length; i++) {
    if (animalDb.cats[i]["id"] == req.params.id) {
      catIndex = i;
    }
  }

  if (catIndex == -1) {
    return res.status(404).json({});
  }

  animalDb.cats[catIndex] = catData;

  return res.status(200).json({});
});

app.listen(3000, err => {
  if (err) {
    console.log(`Err: err`);
  }
  console.log(`Msg: App running on port 3000`);
});

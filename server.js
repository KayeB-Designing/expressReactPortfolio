// 4.c. Import Dependencies
const express = require("express");
const cors = require("cors");

// 4.c. Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// 4.c. Create our app object
const app = express();

// 4.c. set up middleware
app.use(cors());

// 4.c. home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// 4.c. route for retrieving projects
app.get("/projects", (req, res) => {
  // 4.c. send projects via JSON
  res.json(projects);
});

// 4.c. route for retrieving about info
app.get("/about", (req, res) => {
  // 4.c. send projects via JSON
  res.json(about);
});

// 4.c. declare a variable for our port number
const PORT = process.env.PORT || 4000;

// 4.c. turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
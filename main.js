const mongoose = require("mongoose");
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.options('*', cors());

/* From files */
const { MONGODB_URL } = require("./config");
const taskRoutes = require("./routes/tasks");

app.use(express.json());

// Task Routes
app.use("/api/tasks", taskRoutes);

// Middeware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Conect to te DB
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return app.listen(3300);
  })
  .then(() => console.log("server running at 3300"))
  .catch((err) => console.log(err.message));

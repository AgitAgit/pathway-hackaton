const express = require("express");
const { json } = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const { checkCollectionEmpty } = require("./injectData.js");
const usersRouter = require("./routes/usersRoute.js");
const trainingRouter = require("./routes/trainingRoute.js");
const professionsRouter = require("./routes/professionsRoute.js");
// const postsRouter = require("./routes/postsRoute.js");
// const commentsRouter = require("./routes/commentsRoute.js");
const centralizedErrorHandler = require("./middleware/centralizedErrorHandler.js");
const { addTrainingArr } = require("./utils/seed.js");

dotenv.config();

const uri = process.env.URI;

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database. Checking documents...");
    // return checkCollectionEmpty(); // Wait for checkCollectionEmpty to finish
    // addTrainingArr();
  })
  .catch((error) => {
    console.error(
      "Error connecting to the database or running operations:",
      error
    );
  });

app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true,
  })
);

app.use(json());

app.use("/api/users", usersRouter);
app.use("/api/training", trainingRouter);
app.use("/api/professions", professionsRouter);
// app.use("/api/posts", postsRouter);
// app.use("/api/comments", commentsRouter);

app.get("/api/status", (req, res) => {
  res.send({
    message: "Server is UP",
  });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
});

app.use((err, req, res, next) => centralizedErrorHandler(err, req, res, next));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

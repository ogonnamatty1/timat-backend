console.log("working");
// dependecies installed
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// port 
// const port = process.env.PORT||3000
//   IMPORTING MODELS PATH 
// const clients = require('./models/contact');

const dotenv = require("dotenv");
dotenv.config();
// port
// const port = process.env.PORT||3000
//   IMPORTING MODELS PATH
// const users = require('./models/contact');
// const router = require('./routes/usersRoute')

// connecting database
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const contactRoutes = require("./routes/usersRoute");

app.use("/api/timatech/apply", contactRoutes);

// route not found global error
app.use((req, res) => {
  const error = new Error("URL not found");
  error.status = 404;
  res.status(error.status).json({
    error: error.message,
  });
});

// creatin our port

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running ${process.env.PORT}`);
});

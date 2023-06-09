const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
//connect database
connection.once("open", () => {
  console.log("Mongodb Connection Success !", PORT);
});

const mmseRoutes = require("./Routes/mmseRoutes")
const gameRoutes = require("./Routes/gameRoute")
const durationRoutes = require("./Routes/durationRoutes")

app.use("/MMSE", mmseRoutes)
app.use("/Game", gameRoutes)
app.use("/Duration", durationRoutes)

app.listen(PORT, () => {
  console.log(`server is up and running on port:${PORT}`);
})
const express = require("express");
const app = express();
const { connectDB } = require("./utils/db");
require("dotenv").config();
// routes
const darazroute = require("./routes/darazRoute");
app.use(express.json());
// Function for Connecting with the db
connectDB();

app.use("/categories", darazroute);
// function for starting server
app.listen(process.env.PORT, () => {
  console.log(`Server Running at port: ${process.env.PORT} Happy Hacking!!!!`);
});

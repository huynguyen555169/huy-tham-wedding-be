const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const port = process.env.PORT || 3001;

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"]
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOpts));

routes(app);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

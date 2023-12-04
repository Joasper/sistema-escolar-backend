const express = require("express");
const bodyParser = require("body-parser");
const { ConectionDB } = require("./Database/config");
//require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
ConectionDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("Public"));
app.use("/api/estudiante", require("./Routes/Estudiante"));
app.use("/api/tutores", require("./Routes/Tutores"));
app.listen("2000", () => {
  console.log("Server running on port 2000");
});

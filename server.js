require('dotenv').config()
const express = require("express"); //common js
const connectDB = require("./config/db");
const app = express();
const path = require('path');

connectDB();
app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/public", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to Imzan Khan's Resume API" })
);

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/resume", require("./routes/resume"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

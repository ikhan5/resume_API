const express = require("express"); //common js
const connectDB = require("./config/db");
const app = express();
const path = require("path");

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

var server = app.listen(process.env.PORT || 5000, function() {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});

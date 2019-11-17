const express = require("express"); //common js

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to Imzan Khan's Resume API" })
);

app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/resume',require('./routes/resume'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

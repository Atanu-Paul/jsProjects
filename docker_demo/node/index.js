const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome Route 1" });
});

app.get("/route-2", (req, res) => {
  res.status(200).json({ message: "Welcome Route 2" });
});
app.listen(PORT, () => {
  console.log(`Express server running on  localhost:${PORT}`);
});

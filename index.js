const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./db/connect");
const port = 3000;
const app = express();

connectDb();

const allowedOrigins = ["http://localhost:4200"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "100mb",
    parameterLimit: 100000,
  })
);

app.use("/api/rest", require("./routes/restaurantRoutes"));

app.get("/", (req, res) => {
  return res.send("Waayu Test API");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

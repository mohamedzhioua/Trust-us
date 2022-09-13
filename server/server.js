const express = require("express");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const UsersContoller = require("./Controllers/UsersController")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
db();


// routing 
app.get("/", (req, res) => {
    res.json({ Hello: "World" });
  });
  
app.post("/signup", UsersContoller.signup);

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
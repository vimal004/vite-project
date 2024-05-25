const express = require("express");
const router = require("./home");
const userrouter = require("./userroutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors);
app.use("/", router);
app.use("/api/users", userrouter);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});

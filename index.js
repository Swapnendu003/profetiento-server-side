const express = require("express");
const app = express();
const cors = require("cors");
const upskillroutes = require("./routes/upskilllingRoutes");
const networkroutes = require("./routes/networkingRoutes");



app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use ("/upskill", upskillroutes);
app.use ("/network", networkroutes);

app.get("/", (req, res) => {
    res.send("Allah is everywhere");
    console.log("Allah is everywhere");
    }
);

app.listen(process.env.PORT || 3000, () => {
    console.log("Your Server is running");
  });

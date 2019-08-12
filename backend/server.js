const express = require("express");
const app = express();

app.use("/images", express.static(__dirname + "/images")); // Files in local folder uploads have endpoints as /images/x

//test endpoint
app.get("/", (req, res) => {
  res.send("server test successful");
});

//_________________End of END POINTS____________________
app.listen(4000, "0.0.0.0", () => {
  // REMOTE SERVER/DROPLET
  console.log("Running on port 4000 , 0.0.0.0");
});

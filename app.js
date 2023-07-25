const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000;

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: './WebSite' });
});

app.listen(80, () => {
  console.log(`Now listening on port ${80}`);
});

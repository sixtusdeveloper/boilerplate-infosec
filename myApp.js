const express = require("express");
const helmet = require("helmet");
const app = express();

module.exports = app;
const api = require("./server.js");

// Mount helmet.hidePoweredBy() middleware
app.use(helmet.hidePoweredBy());

// Mitigate the Risk of Clickjacking with helmet.frameguard()
app.use(helmet.frameguard({ action: "deny" }));

app.use(express.static("public"));
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

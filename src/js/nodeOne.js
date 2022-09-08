//** === Call Express Js  Server === */
const express = require("express");

//** === Create App => Server === */
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Client! Welcome of World Web!");
});

//** ===> Call Server and Output/port ===  */
app.listen(8080, () => {
  console.log("Hello World!");
  console.log("My text of Course Node Js and VideoGames!!");
  console.log("Very Happy for Me!! Love programming!");
});

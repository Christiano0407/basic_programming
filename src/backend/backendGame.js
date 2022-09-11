//** === Backend Express Call Server ===  */
const express = require("express");

//** === Create App Backend Mokepon Game === */
const app = express();

//*! === Call Request and Response === Client === */
app.get("/", (req, res) => {
  res.send("Welcome a Mokepon Game!");
});

//** === Call Server === */
app.listen(8080, () => {
  console.log("Hello!! Welcome Mokepon VideoGame!");
});

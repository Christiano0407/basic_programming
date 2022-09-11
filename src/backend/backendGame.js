//** === Backend Express Call Server ===  */
const express = require("express");

//** === Create App Backend Mokepon Game === */
const app = express();

//*? === Create List Players === */
const players = [];
//*? === Create Class Player => User */
class Player {
  constructor(id) {
    this.id = id;
  }
}

//*! === Call Request and Response === Client*/
//*! Create Endpoint => Rout */
app.get("/join", (req, res) => {
  const id = `${Math.random()}`;
  const player = new Player(id);
  players.push(player);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(id);
});
// === Access-Control-Allow-Origin: * ===

//** === Call Server === */
app.listen(8080, () => {
  console.log("Hello!! Welcome Mokepon VideoGame!");
});

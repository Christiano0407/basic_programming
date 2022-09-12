//** === Backend Express Call Server / CORS ===  */
const express = require("express");
const cors = require("cors");

//** === Create App Backend Mokepon Game === */
const app = express();
//*? === Use and Exit Problem of CORS (Router) */
app.use(cors());
//*? === Call o Use POST */
app.use(express.json());

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

//*! === Two Server / Req & Res === */
// :playerId => Call Var
app.post("/mokepon/:playerId", (req, res) => {
  const playerId = req.params.playerId || " ";
  console.log(players);
  console.log(playerId);
  res.end();
});

//** === === Call Server === ===*/
app.listen(8080, () => {
  console.log("Hello!! Welcome Mokepon VideoGame!");
});

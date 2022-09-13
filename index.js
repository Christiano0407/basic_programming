//** === Backend Express Call Server / CORS ===  */
const express = require("express");
const cors = require("cors");
const port = 8080;
const path = require("path");
const { dirname } = require("path");

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
  // = Method =
  assignMokepon(mokepon) {
    this.mokepon = mokepon;
  }
}

//*! === Call and Search All Carpet Public === */
//app.use(express.static("src"));
app.use(express.static(__dirname + "/src"));
//*! === ROOT General === */
/* app.get("/mokepon", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src/mokepon.html"));
}); */
/* app.get("/styleMokepon.css", (req, res) => {
  res.sendFile(__dirname + "/src/styleMokepon.css");
}); */

//*! === Create New Mokepon => ID */
class Mokepon {
  constructor(name) {
    this.name = name;
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

//*! === Two Server / Req & Res === Mandar a Backend === */
// :playerId => Call Var
app.post("/mokepon/:playerId", (req, res) => {
  const playerId = req.params.playerId || " ";
  const nameMokepon = req.body.mokepon || " ";
  const mokepon = new Mokepon(nameMokepon);
  const playerIndex = players.findIndex((player) => playerId === player);
  if (playerIndex >= 0) {
    players[playerIndex].assignMokepon(mokepon);
  }
  console.log(players);
  console.log(playerId);
  res.end();
});
// findIndex => Buscar si exist ==

//** === === Call Server === ===*/
app.listen(port, () => {
  console.log("Hello!! Welcome Mokepon VideoGame!", port);
});

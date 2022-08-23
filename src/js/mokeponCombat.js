//** === Combat Duel  Mokepon ===  */
//*? === Import & Const, Variable === */
import { playAttack } from "./mokeponAttack03.js";
import { enemyAttack } from "./mokeponAttack03.js";
import { divAttack } from "./mokeponAttack03.js";
import { divEnemyAttack } from "./mokeponAttack03.js";
import { idChild } from "./mokeponAttack03.js";
import { idChildTwo } from "./mokeponAttack03.js";

//*! === Lifes === */
const addLifePlayer = document.querySelector(`#lifePlayer`);
const addLifeEnemy = document.querySelector(`#lifeEnemy`);
let playerLife = 3;
let enemyLife = 3;
const idWinner = document.querySelector("#idWinner");
//*! === General Variable */
let textDuel;

//*? === Duel = Combat === */
export const combatDuel = () => {
  if (playAttack === enemyAttack) {
    textDuel = "Similar Power!!";
  } else if (
    playAttack === "Fire Finally!!" &&
    enemyAttack === "Arrow Attack"
  ) {
    textDuel = "Player: Winner";
    enemyLife--;
    addLifeEnemy.innerHTML = enemyLife;
  } else if (
    playAttack === "Water Bomb!!" &&
    enemyAttack === "Thunder Splash!!"
  ) {
    textDuel = "Player: Lose!!";
    playerLife--;
    addLifePlayer.innerHTML = playerLife;
  } else if (playAttack === "Rock Smash!!" && enemyAttack === "Rock Bottom") {
    textDuel = "Player: Winner!!";
    enemyLife--;
    addLifeEnemy.innerHTML = enemyLife;
  } else {
    console.log("Player: Your Lose!! Never, Never Game other part!");
    textDuel = "Player: Your Lose!";
    playerLife--;
    addLifePlayer.innerHTML = playerLife;
  }
  messageUser();
  messageAttack();
  winnerBattle();
};
//combatDuel();
//*! === Message */
function messageUser() {
  let paragraphUser = document.createElement("p");
  paragraphUser.textContent = `User select: ${playAttack} & ${textDuel}`;
  paragraphUser.className = "messageUser";
  paragraphUser.id = "idMessageUser";
  divAttack.appendChild(idChild);
  idChild.appendChild(paragraphUser);
}
function messageAttack() {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Enemy select: ${enemyAttack} & ${textDuel}`;
  paragraph.className = "messageEnemy";
  paragraph.id = "idMessageEnemy";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(paragraph);
}

//*! === Add Winner ==> === & Disabled Btn and Attack === */
const winnerBattle = () => {
  let combatWinner = document.querySelector(".combat-Win");
  if (playerLife == 0) {
    combatWinner.textContent = "Player: Your Lose!! & Enemy: Win!!😡";
    idWinner.appendChild(combatWinner);
    // = Disabled Player ==
    let btnSelectMascot = document.getElementById("IdBtnSelect");
    btnSelectMascot.disabled = true;
    // === Buttons  and Events ===
    let btnFire = document.querySelector(`#btnMokeponFire`);
    btnFire.disabled = true;
    let btnWater = document.querySelector(`#btnMokeponWater`);
    btnWater.disabled = true;
    let btnEarth = document.querySelector(`#btnMokeponEarth`);
    btnEarth.disabled = true;
    let btnNewGame = document.querySelector("#idNewGame");
    btnNewGame.style.display = "flex";
    let textNewGame = document.getElementById(`textNew`);
    textNewGame.style.display = "flex";
  } else if (enemyLife == 0) {
    combatWinner.textContent = "Player: Your Winner 😎!!";
    idWinner.appendChild(combatWinner);
  }
};

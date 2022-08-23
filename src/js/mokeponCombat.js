//** === Combat Duel  Mokepon ===  */
//*? === Import ==== Do not Repeat Yourself === */
import { playAttack } from "./mokeponAttack03.js";
import { enemyAttack } from "./mokeponAttack03.js";
import { divAttack } from "./mokeponAttack03.js";
import { divEnemyAttack } from "./mokeponAttack03.js";
import { idChild } from "./mokeponAttack03.js";
import { idChildTwo } from "./mokeponAttack03.js";
//*! === Lifes & Variables === */
const addLifePlayer = document.querySelector(`#lifePlayer`);
const addLifeEnemy = document.querySelector(`#lifeEnemy`);
const idWinner = document.querySelector("#idWinner");
const btnSelectMascot = document.getElementById("IdBtnSelect");
const btnFire = document.querySelector(`#btnMokeponFire`);
const btnWater = document.querySelector(`#btnMokeponWater`);
const btnEarth = document.querySelector(`#btnMokeponEarth`);
const btnNewGame = document.querySelector("#idNewGame");
const textNewGame = document.getElementById(`textNew`);
//*! === General Variable */
let playerLife = 3;
let enemyLife = 3;
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
    btnSelectMascot.disabled = true;
    // === Buttons  and Events ===
    btnFire.disabled = true;
    btnWater.disabled = true;
    btnEarth.disabled = true;
    btnNewGame.style.display = "flex";
    textNewGame.style.display = "flex";
  } else if (enemyLife == 0) {
    combatWinner.textContent = "Player: Your Winner 😎!!";
    idWinner.appendChild(combatWinner);
  }
};

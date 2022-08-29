//** === Combat Duel  Mokepon ===  */
//*? === Import ==== Do not Repeat Yourself === */
//import { playAttack } from "./mokeponAttack03.js";
//import { enemyAttack } from "./mokeponAttack03.js";
import { myMokepons } from "./classMokepon.js";
import { divAttack, enemyAttack } from "./mokeponAttack03.js";
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
let playAttack;
let enemyPowerAttack;
let playerLife = 3;
let enemyLife = 3;
let textDuel;

//*? === Duel = Combat === */
export const combatDuel = () => {
  if (myMokepons[enemyAttack].name === `MonsterFire`) {
    console.log("Winn");
  }
  //messageUser();
  //messageAttack();
  //winnerBattle();
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

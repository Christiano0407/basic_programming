//** ===  Random Enemy Attack === */
/* const randomAttack = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; */
//*? === Import === */
import { playerAttacks } from "./mokepon01.js";
import { allAttackEnemy } from "./mokepon01.js";
//*! === Const  */
const addLifePlayer = document.querySelector(`#lifePlayer`);
const addLifeEnemy = document.querySelector(`#lifeEnemy`);
const idWinner = document.querySelector("#idWinner");
const btnNewGame = document.querySelector("#idNewGame");
const textNewGame = document.getElementById(`textNew`);
const divAttack = document.querySelector(`#IdChildAttack`);
const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
const idChild = document.querySelector("#IDchild");
const idChildTwo = document.querySelector("#IDchildTwo");
const btnSelectMascot = document.getElementById("IdBtnSelect");
//*! === General Variable === */
let indexPlayer;
let indexEnemy;
let playerVictory = 0;
let enemyVictory = 0;
let playerLife = 3;
let enemyLife = 3;
//*TODO === === ===  04 */
//*! === Index */
function indexBothOfThemOpponent(player, enemy) {
  indexPlayer = playerAttacks[player];
  indexEnemy = allAttackEnemy[enemy];
}
//*! === Combat */
export const duelCombat = () => {
  for (let i = 0; i < playerAttacks.length; i++) {
    //console.log(playerAttacks[i]);
    if (playerAttacks[i] === allAttackEnemy[i]) {
      indexBothOfThemOpponent(i, i);
      createMessage("Nothing Win!");
      /* enemyLife--;
      addLifeEnemy = enemyLife; */
      //playerVictory++;
      //addLifePlayer = playerVictory;
    } else if (
      playerAttacks[i] === "fireAttack 🔥" &&
      allAttackEnemy[i] === "waterBomb 💧"
    ) {
      //createMessage("Player Winner");
      console.log("Player Lose!");
      indexBothOfThemOpponent(i, i);
      /* addLifePlayer.innerHTML = playerLife--; */
      enemyVictory += 1;
      addLifeEnemy.innerHTML = enemyVictory;
    } else if (
      playerAttacks[i] === "waterBomb 💧" &&
      allAttackEnemy[i] === "rockSmash 🦾"
    ) {
      console.log("Win");
      indexBothOfThemOpponent(i, i);
      /* addLifeEnemy.innerHTML = enemyLife--; */
      playerVictory += 1;
      addLifePlayer.innerHTML = playerVictory;
    } else if (
      playerAttacks[i] === "rockSmash 🦾" &&
      allAttackEnemy[i] === "fireAttack 🔥"
    ) {
      console.log("Lose!");
      indexBothOfThemOpponent(i, i);
      /*  addLifePlayer.innerHTML = playerLife--; */
      enemyVictory++;
      addLifeEnemy.innerHTML = enemyVictory;
    } else {
      console.log("Loser!");
      indexBothOfThemOpponent(i, i);
      /* addLifePlayer.innerHTML = playerLife--; */
      enemyVictory++;
      addLifePlayer.innerHTML = enemyVictory;
    }
  }
  // === Call ===
  winnerBattleLife();
  messageUser();
  messageAttack();
};

//*! === Message */
function messageUser() {
  let paragraphUser = document.createElement("p");
  paragraphUser.textContent = `User: ${playerAttacks} and ${indexPlayer}`;
  paragraphUser.className = "messageUser";
  paragraphUser.id = "idMessageUser";
  divAttack.append(idChild);
  idChild.append(paragraphUser);
}
function messageAttack() {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Enemy: ${allAttackEnemy} and ${indexEnemy}`;
  paragraph.className = "messageEnemy";
  paragraph.id = "idMessageEnemy";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(paragraph);
}

function createMessage(text) {
  let paragraphMessage = document.createElement("p");
  paragraphMessage.textContent = text;
  paragraphMessage.className = "messageCreate";
  paragraphMessage.id = "idMessageCreate";
  divAttack.append(idChild);
  idChild.append(paragraphMessage);
}

//*! === Add Winner ==> === & Disabled Btn and Attack === */
const winnerBattleLife = () => {
  let combatWinner = document.querySelector(".combat-Win");
  /* if (playerLife === 0) {
    combatWinner.textContent = "Player: Your Lose!! Your Enemy: Win!!😡";
    // = Disabled Player ==
    // === Buttons  and Events ===
  } else if (enemyLife === 0) {
    combatWinner.textContent = "Player: Your Winner 😎!!";
    idWinner.appendChild(combatWinner);
  } */
  if (playerVictory === enemyVictory) {
    combatWinner.textContent = "Nothing Winner!";
    //idWinner.appendChild(combatWinner);
  } else if (playerVictory > enemyVictory) {
    combatWinner.textContent = "User Player Win!!";
    //idWinner.appendChild(combatWinner);
  } else {
    combatWinner.textContent = "Your Lose!";
    //idWinner.appendChild(combatWinner);
  }
  btnSelectMascot.disabled = true;
  btnNewGame.style.display = "flex";
  textNewGame.style.display = "flex";
};

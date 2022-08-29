//** === Combat Duel  Mokepon ===  */
//*? === Import ==== Do not Repeat Yourself === */
import { myMokepons } from "./classMokepon.js";
import { playerAttacks } from "./mokepon01.js";
import { allAttackEnemy } from "./mokepon01.js";
//*! === Lifes & Variables === */
//** === Duel, Message and Variables === */
const divAttack = document.querySelector(`#IdChildAttack`);
const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
const idChild = document.querySelector("#IDchild");
const idChildTwo = document.querySelector("#IDchildTwo");
//*! === General Variable */
export let textDuel;

//*! === Message */
export function messageUser() {
  let paragraphUser = document.createElement("p");
  paragraphUser.textContent = `User select: ${playerAttacks} & ${textDuel}`;
  paragraphUser.className = "messageUser";
  paragraphUser.id = "idMessageUser";
  divAttack.appendChild(idChild);
  idChild.appendChild(paragraphUser);
}
export function messageAttack() {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Enemy select: ${allAttackEnemy} & ${textDuel}`;
  paragraph.className = "messageEnemy";
  paragraph.id = "idMessageEnemy";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(paragraph);
}



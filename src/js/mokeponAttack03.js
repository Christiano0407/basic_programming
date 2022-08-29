//** === Import */
/* import { combatDuel } from "./mokeponCombat.js"; */
import { myMokepons } from "./classMokepon.js";
//** === Duel, Message and Variables === */
export const divAttack = document.querySelector(`#IdChildAttack`);
export const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
export const idChild = document.querySelector("#IDchild");
export const idChildTwo = document.querySelector("#IDchildTwo");
//** === General Variables === */
export let playAttack;
export let enemyAttack;




//*! === ADD Images Child */
//*? === User */
function imageAttackFire() {
  let imageFire = document.createElement("img");
  imageFire.src =
    "https://cdn.weasyl.com/~queendin/submissions/1835618/002b7d86fd5ed251c80c41d8a2041ede23075c165b43868b6506a44cb4b47ae0/queendin-charmander-used-ember.png";
  imageFire.width = 100;
  imageFire.height = 100;
  imageFire.className = "fireImage";
  divAttack.appendChild(idChild);
  idChild.appendChild(imageFire);
}

//*! Random Enemy Attack === */
const randomAttack = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//*TODO === Mokepon Variables ===  ===  ===  ===  ===  === === === */
//** === Import  Conditionals === */
import { checkedAdd } from "./js/mokepon01.js";
//import { enemySelectAdd } from "./js/mokepon01";
//** == Import Attack */
import { fireAttack } from "./js/mokeponAttack03.js";
import { waterAttack } from "./js/mokeponAttack03.js";
import { earthAttack } from "./js/mokeponAttack03.js";
//import { combatDuel } from "./js/mokeponAttack03.js";

//*TODO ===  ===  Code === ===  === === === === === === === === === */
//** === Init Game === */
const initGame = () => {
  // == Display None ==
  let sectionOneAttack = document.getElementById("secSelectAttack");
  sectionOneAttack.style.display = "none";
  let attackImages = document.getElementById("secTwoAttack");
  attackImages.style.display = "none";
  let textNewGame = document.getElementById(`textNew`);
  textNewGame.style.display = "none";
  let idVersus = document.getElementById(`idVersus`);
  idVersus.style.display = "none";

  //> Btn ==
  let btnSelectMascot = document.getElementById("IdBtnSelect");
  btnSelectMascot.addEventListener(`click`, checkedAdd);
  // === Buttons  and Events ===
  let btnFire = document.querySelector(`#btnMokeponFire`);
  btnFire.addEventListener("click", fireAttack);
  let btnWater = document.querySelector(`#btnMokeponWater`);
  btnWater.addEventListener("click", waterAttack);
  let btnEarth = document.querySelector(`#btnMokeponEarth`);
  btnEarth.addEventListener("click", earthAttack);
  // === Refres & New Game ===
  let btnNewGame = document.querySelector("#idNewGame");
  btnNewGame.style.display = "none";
  let idChildMonster = document.querySelector(`#IdChildMonster`);
  idChildMonster.style.display = "none";
  let idMonsterEnemy = document.querySelector(`#idMonsterEnemy`);
  idMonsterEnemy.style.display = "none";
  //> Text Attack ===
  let textAttack = document.querySelector(`#idTextAttack`);
  textAttack.style.display = "none";
  let textAttackTwo = document.querySelector(`.textAttackTwo`);
  textAttackTwo.style.display = "none";

  // === Refresh ===
  btnNewGame.addEventListener(`click`, () => {
    refreshGame();
  });
};
//*TODO === ===  Attack === === === === === === === === === === ==== === === ===  */
//*! === Init New Game! === */
function refreshGame() {
  location.reload();
}
//** === === Init Game Window === === */
window.addEventListener("load", initGame);

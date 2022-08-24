//*TODO === Mokepon Variables === Don´t Repeat Yourself ===  ===  ===  ===  === === === */
//** === Import  Conditionals === */
import { checkedAdd } from "./js/mokepon01.js";
//** == Import Attack */
import { fireAttack } from "./js/mokeponAttack03.js";
import { waterAttack } from "./js/mokeponAttack03.js";
import { earthAttack } from "./js/mokeponAttack03.js";
//** === All Variables === */
const sectionOneAttack = document.getElementById("secSelectAttack");
const attackImages = document.getElementById("secTwoAttack");
const textNewGame = document.getElementById(`textNew`);
const idVersus = document.getElementById(`idVersus`);
const btnSelectMascot = document.getElementById("IdBtnSelect");
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
const btnFire = document.querySelector(`#btnMokeponFire`);
const btnWater = document.querySelector(`#btnMokeponWater`);
const btnEarth = document.querySelector(`#btnMokeponEarth`);
const btnNewGame = document.querySelector("#idNewGame");
const idChildMonster = document.querySelector(`#IdChildMonster`);
const idMonsterEnemy = document.querySelector(`#idMonsterEnemy`);
const textAttack = document.querySelector(`#idTextAttack`);
const textAttackTwo = document.querySelector(`.textAttackTwo`);

//*TODO ===  ===  Code === ===  === === === === === === === === === */
//** === Init Game === */
const initGame = () => {
  // == Display None ==
  sectionOneAttack.style.display = "none";
  attackImages.style.display = "none";
  textNewGame.style.display = "none";
  idVersus.style.display = "none";
  //> Btn ==
  btnSelectMascot.addEventListener(`click`, checkedAdd);
  // === Btn Select Monster ===
  btnSelectYourMonster.style.display = "none";
  // === Buttons  and Events ===
  btnFire.addEventListener("click", fireAttack);
  btnWater.addEventListener("click", waterAttack);
  btnEarth.addEventListener("click", earthAttack);
  // === Refres & New Game ===
  btnNewGame.style.display = "none";
  idChildMonster.style.display = "none";
  idMonsterEnemy.style.display = "none";
  //> Text Attack ===
  textAttack.style.display = "none";
  textAttackTwo.style.display = "none";
  // === Refresh ===
  btnNewGame.addEventListener(`click`, () => {
    refreshGame();
  });
};
//** === ===  Attack === === === === === === === === === === ==== === === ===  */
//*! === Init New Game! === */
function refreshGame() {
  location.reload();
}
//** === === Init Game Window === === */
window.addEventListener("load", initGame);

//*TODO === Mokepon Variables === Don´t Repeat Yourself ===  ===  ===  ===  === === === */
//** === Import  Conditionals === */
import { checkedAdd } from "./js/mokepon01.js";
//** === All Variables === */
const sectionOneAttack = document.getElementById("secSelectAttack");
const attackImages = document.getElementById("secTwoAttack");
const textNewGame = document.getElementById(`textNew`);
const idVersus = document.getElementById(`idVersus`);
const btnSelectMascot = document.getElementById("IdBtnSelect");
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
const btnNewGame = document.querySelector("#idNewGame");
const idChildMonster = document.querySelector(`#IdChildMonster`);
const idMonsterEnemy = document.querySelector(`#idMonsterEnemy`);
const textAttack = document.querySelector(`#idTextAttack`);
const textAttackTwo = document.querySelector(`.textAttackTwo`);
const idMapSection = document.getElementById(`idMapSection`);

//*TODO ===  ===  Code === ===  === === === === === === === === === */
//** === Init Game === */
const initGame = () => {
  // >> Btn Init Game ==
  btnSelectMascot.addEventListener(`click`, checkedAdd);
  //> === Canvas
  idMapSection.style.display = "none";
  // == Display None ==
  sectionOneAttack.style.display = "none";
  attackImages.style.display = "none";
  textNewGame.style.display = "none";
  idVersus.style.display = "none";
  // >> Btn Select Monster ===
  btnSelectYourMonster.style.display = "none";
  // === Refresh & New Game ===
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

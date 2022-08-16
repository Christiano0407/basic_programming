//*TODO === Mokepon Variables ===  ===  ===  ===  ===  === === === */
//** === Import  Conditionals === */
import { checkedAdd } from "./js/mokepon01.js";
//import { enemySelectAdd } from "./js/mokepon01";
//** == Import Attack */
import { fireAttack } from "./js/mokeponAttack03.js";
import { waterAttack } from "./js/mokeponAttack03.js";
import { earthAttack } from "./js/mokeponAttack03.js";

//*TODO ===  ===  Code === ===  === === === === === === === === === */
//** === Init Game === */
const initGame = () => {
  let btnSelectMascot = document.getElementById("IdBtnSelect");
  btnSelectMascot.addEventListener(`click`, checkedAdd);
  // === Buttons  and Events ===
  let btnFire = document.querySelector(`#btnMokeponFire`);
  btnFire.addEventListener("click", fireAttack);
  let btnWater = document.querySelector(`#btnMokeponWater`);
  btnWater.addEventListener("click", waterAttack);
  let btnEarth = document.querySelector(`#btnMokeponEarth`);
  btnEarth.addEventListener("click", earthAttack);
};

//*TODO === ===  Attack === === === === === === === === === === ==== === === ===  */
//** === === Init Game Window === === */
window.addEventListener("load", initGame);

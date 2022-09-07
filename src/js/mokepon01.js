//*? === Imports === */
//** === Call POO === */
import { monsterFires, myMokepons } from "./classMokepon.js";
import { extraAttacks } from "./mokeponElements.js";
import { selectCanvasMokepon } from "./classMokepon.js";
//import { textDuel } from "./mokeponCombat.js";
//** === Call Btn === */
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
//** === Variables => Do not Repeat Yourself ===  */
const monsterAdd = document.getElementById(`monsterAdd`);
const idMascotTextSelect = document.getElementById(`idMascotSelect`);
const divBtn = document.getElementById(`divBtn`);
//** === Winner & Lifes ===  */
const btnSelectMascot = document.getElementById("IdBtnSelect");
//** === Checked & Select ===  */
/* const mokeponChecked = document.getElementById(`idMokeponChecked`); */
export const containerList = document.getElementById(`idMokeponList`);
const idTitleMokepon = document.getElementById(`idTitleMokepon`);

//* ===  General Variable ===  */
let playMonster = document.querySelector(`#playerMonster`); // Span del Player =
export let enemyMonster = document.querySelector("#enemyMonster");
let addMokepon;
let inputFire;
let inputWater;
let inputEarth;
export let nameMokeponPlayer;
/* export let allAttackMokepon; */
/* export let allButton; */
export let btnFire;
export let btnWater;
export let btnEarth;
export let playerAttacks = [];
export let allAttackEnemy = [];

//let enemyAttack = random(1, 3); //Random
//*! === Random All === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//*! ===> Enemy Attack Random Key === */
export let enemyAttack = random(0, myMokepons.length - 1); // POO => Mokepon

//*TODO === === === === === ===  01 */
//*! === User*/
export const checkedAdd = () => {
  myMokepons.forEach((mokepon) => {
    addMokepon = `
          <input type="radio" name="mascot" class="mokepon-Checked" id=${mokepon.name} />
    <label class="mokepon-card" id="idMokeponCard" for=${mokepon.name}>
          <img class="monsterFire-img" src=${mokepon.image} alt=${mokepon.name}>
          <div class="card-animation" id="idCardAnimation">
            <p class="label-text">${mokepon.name}</p>
          </div>
    </label>
     `;
    //> DOM ===
    monsterAdd.innerHTML += addMokepon;
  });
  checkedMokepon();
  btnSelectYourMonster.style.display = "flex";
  btnSelectMascot.disabled = true;
  btnSelectMascot.style.display = "none";
  idTitleMokepon.style.display = "none";
};
//*! === Select my Mokepon === */
const checkedMokepon = () => {
  //> === id POO === <
  inputFire = document.getElementById(`MonsterFire`);
  inputWater = document.getElementById(`WaterBomb`);
  inputEarth = document.getElementById(`PunchEarth`);
  btnSelectYourMonster.addEventListener("click", () => {
    if (inputFire.checked) {
      playMonster.innerHTML = inputFire.id;
      nameMokeponPlayer = inputFire.id;
      btnFire = document.querySelector(`#btnMokeponFire`);
      btnFire.addEventListener(`click`, extraAttacks);
    } else if (inputWater.checked) {
      playMonster.innerHTML = inputWater.id;
      nameMokeponPlayer = inputWater.id;
      btnWater = document.getElementById(`btnMokeponWater`);
      btnWater.addEventListener("click", extraAttacks);
    } else if (inputEarth.checked) {
      playMonster.innerHTML = inputEarth.id;
      nameMokeponPlayer = inputEarth.id;
      btnEarth = document.getElementById(`btnMokeponEarth`);
      btnEarth.addEventListener("click", extraAttacks);
    } else {
      alert("Sorry!! Your Not Select One. Please. select your Mokepon");
    }
    // === Call Enemy Attack ===
    // extraAttacks();
    // === CANVAS ===
    selectCanvasMokepon();

    //> === display >>>>>>>>>
    monsterAdd.style.display = "none";
    idMascotTextSelect.style.display = "none";
    divBtn.style.display = "none";
  });
};

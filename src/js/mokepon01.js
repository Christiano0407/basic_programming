//*? === Imports === */
//** === Call POO === */
import { monsterFires, myMokepons } from "./classMokepon.js";
import { messageUser } from "./mokeponCombat.js";
import { messageAttack } from "./mokeponCombat.js";
import { textDuel } from "./mokeponCombat.js";
//** === Call Btn === */
const btnSelectYourMonster = document.getElementById(`idSelectMonster`);
//** === Variables => Do not Repeat Yourself ===  */
const monsterAdd = document.getElementById(`monsterAdd`);
const idMascotTextSelect = document.getElementById(`idMascotSelect`);
const divBtn = document.getElementById(`divBtn`);
const sectionOneAttack = document.getElementById("secSelectAttack");
const textAttack = document.querySelector(`#idTextAttack`);
const textAttackTwo = document.querySelector(`.textAttackTwo`);
const attackImages = document.getElementById("secTwoAttack");
//** === Winner & Lifes ===  */
const addLifePlayer = document.querySelector(`#lifePlayer`);
const addLifeEnemy = document.querySelector(`#lifeEnemy`);
const idWinner = document.querySelector("#idWinner");
const btnSelectMascot = document.getElementById("IdBtnSelect");
const btnNewGame = document.querySelector("#idNewGame");
const textNewGame = document.getElementById(`textNew`);
//** === Checked & Select ===  */
/* const mokeponChecked = document.getElementById(`idMokeponChecked`); */
const containerList = document.getElementById(`idMokeponList`);
//* ===  General Variable ===  */
let playMonster = document.querySelector(`#playerMonster`); // Span del Player =
let enemyMonster = document.querySelector("#enemyMonster");
let addMokepon;
let inputFire;
let inputWater;
let inputEarth;
let nameMokeponPlayer;
let allAttackMokepon;
let btnFire;
let btnWater;
let btnEarth;
let allButton;
let playerLife = 3;
let enemyLife = 3;
export let playerAttacks = [];
export let allAttackEnemy = [];
//let enemyAttack = random(1, 3); //Random
let enemyAttack = random(0, myMokepons.length - 1); // POO => Mokepon

//*! === User*/
export const checkedAdd = () => {
  myMokepons.forEach((mokepon) => {
    addMokepon = `
          <input type="radio" name="mascot" class="mokepon-Checked" id=${mokepon.name} />
    <label class="mokepon-card" id="idMokeponCard" for=${mokepon.name}>
          <img class="monsterFire-img" src=${mokepon.image} alt=${mokepon.name}>
          <p class="label-text">${mokepon.name}</p>
    </label>
     `;
    //> DOM ===
    monsterAdd.innerHTML += addMokepon;
  });
  checkedMokepon();
  btnSelectYourMonster.style.display = "flex";
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
      btnFire.addEventListener("click", extraAttacks);
    } else if (inputWater.checked) {
      playMonster.innerHTML = inputWater.id;
      nameMokeponPlayer = inputWater.id;
      extraAttacks();
    } else if (inputEarth.checked) {
      playMonster.innerHTML = inputEarth.id;
      nameMokeponPlayer = inputEarth.id;
      extraAttacks();
    } else {
      alert("Sorry!! Your Not Select One. Please. select your Mokepon");
    }
    btnSelectMascot.disabled = true;
    sectionOneAttack.style.display = "flex";
    textAttack.style.display = "flex";
    textAttackTwo.style.display = "flex";
    /* 
    idVersus.style.display = "flex";
    IdChildMonster.style.display = "flex";
    idMonsterEnemy.style.display = "flex";
     */
    // === Call Enemy Attack ===
    enemySelectAdd();
    //enemyRandomAttack();
    monsterAdd.style.display = "none";
    idMascotTextSelect.style.display = "none";
    divBtn.style.display = "none";
  });
};

//*! === Attack Player === */
function extraAttacks() {
  let powerAttack;
  myMokepons.forEach((mokepon) => {
    if (nameMokeponPlayer === mokepon.name) {
      powerAttack = mokepon.attack;
    }
    //console.log(powerAttack);
  });
  allAttacks(powerAttack);
}

//function userContainerAttacks
//*! === Add ALL Attack & Btn === */
function allAttacks(powerAttack) {
  powerAttack.forEach((attack) => {
    allAttackMokepon = `
    <button id=${attack.id} class="btn btnMokepon BAttack">
            <p class="textMokepon">${attack.name}</p>
    </button>
    `;

    containerList.innerHTML += allAttackMokepon;
  });
  /* btnFire = document.querySelector(`#btnMokeponFire`); */
  btnWater = document.querySelector(`#btnMokeponWater`);
  btnEarth = document.querySelector(`#btnMokeponEarth`);
  allButton = document.querySelectorAll(`.BAttack`);
  attackSequence();
}
//*! === Attack */
function attackSequence() {
  allButton.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      //console.log(e.target.textContent);
      if (e.target.textContent === "fireAttack 🔥") {
        playerAttacks.push(`fireAttack🔥👿`);
        console.log(playerAttacks);
        button.style.background = `#EB1D36`;
      } else if (e.target.textContent === "waterBomb 💧") {
        playerAttacks.push("waterBomb 💧");
        button.style.background = "#00A19D";
      } else if (e.target.textContent === "rockSmash 🦾") {
        playerAttacks.push("rockSmash 🦾");
        button.style.background = "#77D970";
      } else {
        console.log("Add Player Attacks");
      }
      console.log(playerAttacks);
    });
  });
}
//*!  === === Enemy select Attack and Mokepon ===  === */
const enemySelectAdd = () => {
  enemyMonster.innerHTML = myMokepons[enemyAttack].name;
};

const attackRandomEnemy = () => {
  if (enemyAttack == 0 || enemyAttack == 1) {
    allAttackEnemy.push("fireAttack 🔥");
  } else if (enemyAttack == 3 || enemyAttack == 4) {
    allAttackEnemy.push("waterBomb 💧");
  } else {
    allAttackEnemy.push("rockSmash 🦾");
  }

  console.log(allAttackEnemy);
  duelCombat();
};
function duelCombat() {
  if (allAttackEnemy == playerAttacks) {
    textDuel = "not Winner";
  } else if (
    playerAttacks == "fireAttack 🔥" &&
    allAttackEnemy == "rockSmash 🦾"
  ) {
    textDuel = "Winner!!";
    messageUser();
    enemyLife--;
  } else if (
    playerAttacks == "waterBomb 💧" &&
    allAttackEnemy == "fireAttack 🔥"
  ) {
    textDuel = "Winner!!";
    messageUser();
    messageAttack();
    enemyLife--;
  } else {
    textDuel = "Your Lose!!";
    messageUser();
    messageAttack();
    playerLife--;
  }
  winnerBattle();
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

//** === Random Function === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

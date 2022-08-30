//*? === Imports === */
//** === Call POO === */
import { monsterFires, myMokepons } from "./classMokepon.js";
//import { textDuel } from "./mokeponCombat.js";
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
//** ===  */
const divAttack = document.querySelector(`#IdChildAttack`);
const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
const idChild = document.querySelector("#IDchild");
const idChildTwo = document.querySelector("#IDchildTwo");
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
let allButton;
let btnFire;
let btnWater;
let btnEarth;
let playerVictory = 0;
let enemyVictory = 0;
let playerLife = 3;
let enemyLife = 3;
let playerAttacks = [];
let allAttackEnemy = [];
let attackMokeponEnemy;
let indexPlayer;
let indexEnemy;
//let enemyAttack = random(1, 3); //Random
//*! === Random All === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
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
    btnSelectMascot.disabled = true;
    sectionOneAttack.style.display = "flex";
    textAttack.style.display = "flex";
    textAttackTwo.style.display = "flex";
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
  allButton = document.querySelectorAll(`.BAttack`);
  attackSequence();
}
//*! === Attack and Color Btn === */
function attackSequence() {
  allButton.forEach((button) => {
    button.addEventListener(`click`, (e) => {
      e.preventDefault();
      //console.log(e.target.textContent);
      if (e.target.textContent === "fireAttack 🔥") {
        playerAttacks.push(`fireAttack🔥👿`);
        //console.log(playerAttacks);
        button.style.background = `#EB1D36`;
        button.disabled = true;
        btnFire.disabled = true;
      } else if (e.target.textContent === "waterBomb 💧") {
        playerAttacks.push("waterBomb 💧");
        button.style.background = "#00A19D";
        button.disabled = true;
        btnWater.disabled = true;
      } else if (e.target.textContent === "rockSmash 🦾") {
        playerAttacks.push("rockSmash 🦾");
        button.style.background = "#77D970";
        button.disabled = true;
        btnEarth.disabled = true;
      } else if (e.target.textContent === "fireFinally 🧨") {
        playerAttacks.push("fireFinally 🧨👿");
        button.style.background = `#EB1D75`;
        button.disabled = true;
      } else {
        console.log("Please, Add New Player Attack");
      }
      console.log(playerAttacks);
      attackRandomEnemy();
    });
  });
}
//*!  === === Enemy select Attack and Mokepon ===  === */
const enemySelectAdd = () => {
  enemyMonster.innerHTML = myMokepons[enemyAttack].name;
  attackMokeponEnemy = myMokepons[enemyAttack].attack;
  //attackSequence();
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
  initBattleWar();
};
//*! === Init Battle */
function initBattleWar() {
  if (playerAttacks.length === 5) {
    duelCombat();
  }
  secTwoAttack.style.display = "flex";
}
//*! === Index */
function indexBothOfThemOpponent(player, enemy) {
  indexPlayer = playerAttacks[player];
  indexEnemy = allAttackEnemy[enemy];
}
//*! === Combat */
function duelCombat() {
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
}

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

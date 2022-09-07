//** === Attack Videogame === */
//*? === Import === */
import { myMokepons } from "./classMokepon.js";
import { nameMokeponPlayer } from "./mokepon01.js";
import { playerAttacks, enemyAttack } from "./mokepon01.js";
import { containerList, enemyMonster, allAttackEnemy } from "./mokepon01.js";
import { duelCombat } from "./mokeponAttack03.js";
import { btnFire, btnWater, btnEarth } from "./mokepon01.js";
//*! === Mokepon Monsters Variables === */
const attackImages = document.getElementById("secTwoAttack");
const idButtonUserAttack = document.querySelector("#idBtnUserAttack");
//*! === Variable General === */
let attackMokeponEnemy;
let allAttackMokepon;
let allButton;
//*! === User */
/* export const fireAdd = () => {
  const img = document.createElement("img");
  img.src =
    "https://media.redadn.es/imagenes/pokemaster_338177_pn2.jpg";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divMonster.appendChild(img);
};
 */
//*TODO === === === 02 */
//*! === Attack Player === */
export const extraAttacks = () => {
  let powerAttack;
  /*  for (let i = 0; i < myMokepons.length; i++) {
    if (nameMokeponPlayer === myMokepons[i].name) {
      powerAttack = myMokepons[i].attack;
    }
  } */
  myMokepons.forEach((mokepon) => {
    if (nameMokeponPlayer === mokepon.name) {
      powerAttack = mokepon.attack;
    }
  });
  allAttacks(powerAttack);
};

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
  idButtonUserAttack.style.display = "none";
}
//*! === Attack and Color Btn / And Btn Original Color === */
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
      } else {
        console.log("Please, Add New Player Attack");
      }
      btnColorFire();
      btnColorWater();
      btnColorEarth();
      console.log(playerAttacks);
      attackRandomEnemy();
    });
  });
}

//** === === Conditional Btn Color === === */
//*! === Btn Fire Color === */
function btnColorFire() {
  allButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent === "fireFinally 🧨") {
        playerAttacks.push("fireFinally 🧨👿");
        button.style.background = `#E50000`;
        button.style.color = "#f2f2f2";
        button.disabled = true;
      } else if (e.target.textContent === "bombFire 🎇") {
        playerAttacks.push("bombFire 🎇");
        button.style.background = "#990000";
        button.disabled = true;
      } else if (e.target.textContent === "volcanoBomb 🌋") {
        playerAttacks.push("volcanoBomb 🌋");
        button.style.background = "#A60000";
        button.disabled = true;
      } else if (e.target.textContent === "rockFire 🥌") {
        playerAttacks.push("rockFire 🥌");
        button.style.background = "#7F0000";
        button.disabled = true;
      }
    });
  });
}
//*! === Btn Water Color === */
function btnColorWater() {
  allButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent === "splash ♒") {
        playerAttacks.push("splash ♒");
        button.style.background = "#0A42C4";
        button.disabled = true;
      } else if (e.target.textContent === "smashSplash 🤽‍♂️") {
        playerAttacks.push("smashSplash 🤽‍♂️");
        button.style.background = "#0061AD";
        button.disabled = true;
      } else if (e.target.textContent === "nightWave 👿") {
        playerAttacks.push("nightWave 👿");
        button.style.background = "#0AA5C4";
        button.disabled = true;
      } else if (e.target.textContent === "airSmall 🛩") {
        playerAttacks.push("airSmall 🛩");
        button.style.background = "#09BAA8";
        button.disabled = true;
      }
    });
  });
}
//*! === Btn Earth Color === */
function btnColorEarth() {
  allButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent === "plantsAttack 🌾") {
        playerAttacks.push("plantsAttack 🌾");
        button.style.background = "#3B7302";
        button.disabled = true;
      } else if (e.target.textContent === "BombAir 💣") {
        playerAttacks.push("BombAir 💣");
        button.style.background = "#65A603";
        button.disabled = true;
      } else if (e.target.textContent === "redBomb 💣") {
        playerAttacks.push("redBomb 💣");
        button.style.background = "#9BBF65";
        button.disabled = true;
      } else if ((e.target.textContent = "waterEarth 🚰")) {
        playerAttacks.push("waterEarth 🚰");
        button.style.background = "#EBF2B3";
        button.disabled = true;
      }
    });
  });
}

//*TODO === === === 03 === === === */
//*!  === === Enemy select Attack and Mokepon ===  === */
export const enemySelectAdd = () => {
  enemyMonster.innerHTML = myMokepons[enemyAttack].name;
  attackMokeponEnemy = myMokepons[enemyAttack].attack;
  //attackSequence();
};
//*!  === Attack Random Enemy === */
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
  //attackImages.style.display = "flex";
}

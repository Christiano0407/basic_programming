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
//*TODO === === === 03 */
//*!  === === Enemy select Attack and Mokepon ===  === */
export const enemySelectAdd = () => {
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
  //attackImages.style.display = "flex";
}

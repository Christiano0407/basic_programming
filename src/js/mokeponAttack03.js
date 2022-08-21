//** === Duel, Message and Variables === */
const divAttack = document.querySelector(`#IdChildAttack`);
const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
const idChild = document.querySelector("#IDchild");
const idChildTwo = document.querySelector("#IDchildTwo");
//** === Lifes === */
const addLifePlayer = document.querySelector(`#lifePlayer`);
const addLifeEnemy = document.querySelector(`#lifeEnemy`);
let playerLife = 3;
let enemyLife = 3;
const idWinner = document.querySelector("#idWinner");
//** === General Variables === */
let playAttack;
let enemyAttack;
let textDuel;
//let imageAttack;

//*? === Function Attack Fire, Water and Earth === */
export const fireAttack = () => {
  playAttack = "Fire Finally!!";
  imageAttackFire(); // Images
  //messageUser(); // Message
  combatDuel(); // Combat
};
export const waterAttack = () => {
  playAttack = "Water Bomb!!";
  imageAttackWater();
  //messageUser();
  combatDuel();
};
export const earthAttack = () => {
  playAttack = "Rock Smash!!";
  imageAttackEarth();
  //messageUser();
  combatDuel();
};

export const enemyRandomAttack = () => {
  let enemyAttackRandomPower = randomAttack(1, 3);

  if (enemyAttackRandomPower == 1) {
    enemyAttack = "Arrow Attack";
    imageAttackEnemyOne();
    //messageAttack();
  } else if (enemyAttackRandomPower == 2) {
    enemyAttack = "Thunder Splash!!";
    imageAttackEnemyTwo();
    //messageAttack();
  } else if (enemyAttackRandomPower == 3) {
    enemyAttack = "Rock Bottom";
    imageAttackEnemyThree();
    //messageAttack();
  } else {
    console.log("Your not a power!");
  }
};

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
function imageAttackWater() {
  let imageWater = document.createElement("img");
  imageWater.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkToZhxZR43t__w21C1WQsVnuD6BuiQB4Pw&usqp=CAU";
  imageWater.width = 100;
  imageWater.height = 100;
  imageWater.className = "waterImage";
  divAttack.appendChild(idChild);
  idChild.appendChild(imageWater);
}
function imageAttackEarth() {
  let imageRock = document.createElement("img");
  imageRock.src =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/695f7949-df76-4452-bdf0-130afea52f21/de5cmx5-0793a732-e3e3-40f3-9187-941d090e9503.png/v1/fill/w_1192,h_670,q_70,strp/pikachu_s_quick_attack_by_pokemonsketchartist_de5cmx5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzY5NWY3OTQ5LWRmNzYtNDQ1Mi1iZGYwLTEzMGFmZWE1MmYyMVwvZGU1Y214NS0wNzkzYTczMi1lM2UzLTQwZjMtOTE4Ny05NDFkMDkwZTk1MDMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CJ1yp_U7peIP7ISYt5FxDFfURYhgeHhou7YEVEg8rfw";
  imageRock.width = 100;
  imageRock.height = 100;
  imageRock.className = "rockImage";
  divAttack.appendChild(idChild);
  idChild.appendChild(imageRock);
}
//*? === Enemy */
function imageAttackEnemyOne() {
  let imageEnemyOne = document.createElement("img");
  imageEnemyOne.src =
    "https://images.saymedia-content.com/.image/t_share/MTc0NDU3OTEyMjUxNTkwMjc4/best-pokemon-attack-types.png";
  imageEnemyOne.width = 100;
  imageEnemyOne.height = 100;
  imageEnemyOne.className = "arrowImage";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(imageEnemyOne);
}
function imageAttackEnemyTwo() {
  let imageEnemyTwo = document.createElement("img");
  imageEnemyTwo.src =
    "https://images.saymedia-content.com/.image/t_share/MTc0NDU3NjUyNjc0NzY2NDcw/worst-pokemon-attacks-of-all-time.png";
  imageEnemyTwo.width = 100;
  imageEnemyTwo.height = 100;
  imageEnemyTwo.className = "enemyImageOne";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(imageEnemyTwo);
}
function imageAttackEnemyThree() {
  let imageEnemyThree = document.createElement("img");
  imageEnemyThree.src =
    "https://media.comicbook.com/2017/06/bulbasaur-attack-1003665.jpg";
  imageEnemyThree.width = 100;
  imageEnemyThree.height = 100;
  imageEnemyThree.className = "enemyImageThree";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(imageEnemyThree);
}

//*! Random Enemy Attack === */
const randomAttack = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//*! === Duel = Combat === */
const combatDuel = () => {
  if (playAttack === enemyAttack) {
    textDuel = "Similar Power!!";
  } else if (
    playAttack === "Fire Finally!!" &&
    enemyAttack === "Arrow Attack"
  ) {
    textDuel = "Player: Winner";
    enemyLife--;
    addLifeEnemy.innerHTML = enemyLife;
  } else if (
    playAttack === "Water Bomb!!" &&
    enemyAttack === "Thunder Splash!!"
  ) {
    textDuel = "Player: Lose!!";
    playerLife--;
    addLifePlayer.innerHTML = playerLife;
  } else if (playAttack === "Rock Smash!!" && enemyAttack === "Rock Bottom") {
    textDuel = "Player: Winner!!";
    enemyLife--;
    addLifeEnemy.innerHTML = enemyLife;
  } else {
    console.log("Player: Your Lose!! Never, Never Game other part!");
    textDuel = "Player: Your Lose!";
    playerLife--;
    addLifePlayer.innerHTML = playerLife;
  }
  messageUser();
  messageAttack();
  winnerBattle();
};
//combatDuel();
//*! === Message */
function messageUser() {
  let paragraphUser = document.createElement("p");
  paragraphUser.textContent = `User select: ${playAttack} & ${textDuel}`;
  paragraphUser.className = "messageUser";
  divAttack.appendChild(idChild);
  idChild.appendChild(paragraphUser);
}
function messageAttack() {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Enemy select: ${enemyAttack} & ${textDuel}`;
  paragraph.className = "messageEnemy";
  divEnemyAttack.appendChild(idChildTwo);
  idChildTwo.appendChild(paragraph);
}

//*! === Add Winner ==> === & Disabled Btn and Attack === */
const winnerBattle = () => {
  let combatWinner = document.querySelector(".combat-Win");
  if (playerLife == 0) {
    combatWinner.textContent = "Player: Your Lose!! & Enemy: Win!!😡";
    idWinner.appendChild(combatWinner);
    // = Disabled Player ==
    let btnSelectMascot = document.getElementById("IdBtnSelect");
    btnSelectMascot.disabled = true;
    // === Buttons  and Events ===
    let btnFire = document.querySelector(`#btnMokeponFire`);
    btnFire.disabled = true;
    let btnWater = document.querySelector(`#btnMokeponWater`);
    btnWater.disabled = true;
    let btnEarth = document.querySelector(`#btnMokeponEarth`);
    btnEarth.disabled = true;
    let btnNewGame = document.querySelector("#idNewGame");
    btnNewGame.style.display = "flex";
    let textNewGame = document.getElementById(`textNew`);
    textNewGame.style.display = "flex";
  } else if (enemyLife == 0) {
    combatWinner.textContent = "Player: Your Winner 😎!!";
    idWinner.appendChild(combatWinner);
  }
};

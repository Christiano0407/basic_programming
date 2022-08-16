//** === Attack */
const divAttack = document.querySelector(`#IdChildAttack`);
const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
let playAttack;
let enemyAttack;
//let imageAttack;

//*? === Function Attack Fire, Water and Earth === */
export const fireAttack = () => {
  playAttack = "Fire Finally!!";
  imageAttackFire();
  messageUser();
};
export const waterAttack = () => {
  playAttack = "Water Bomb!!";
  imageAttackWater();
  messageUser();
};
export const earthAttack = () => {
  playAttack = "Rock Smash!!";
  imageAttackEarth();
  messageUser();
};

export const enemyRandomAttack = () => {
  let enemyAttackRandomPower = randomAttack(1, 3);

  if (enemyAttackRandomPower == 1) {
    enemyAttack = "Arrow Attack";
    imageAttackEnemyOne();
    messageAttack();
  } else if (enemyAttackRandomPower == 2) {
    enemyAttack = "Thunder Splash!!";
    imageAttackEnemyTwo();
    messageAttack();
  } else if (enemyAttackRandomPower == 3) {
    enemyAttack == "Rock Bottom";
    imageAttackEnemyThree();
    messageAttack();
  } else {
    console.log("Your not a power!");
  }
};

//*! === ADD Images Child */
//*? === User */
function imageAttackFire() {
  let imageFire = document.createElement("img");
  imageFire.src =
    "https://images.unsplash.com/photo-1583248352195-d3a8e766edf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
  imageFire.width = 100;
  imageFire.height = 100;
  imageFire.className = "fireImage";
  divAttack.appendChild(imageFire);
}
function imageAttackWater() {
  let imageWater = document.createElement("img");
  imageWater.src =
    "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80";
  imageWater.width = 100;
  imageWater.height = 100;
  imageWater.className = "waterImage";
  divAttack.appendChild(imageWater);
}
function imageAttackEarth() {
  let imageRock = document.createElement("img");
  imageRock.src =
    "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  imageRock.width = 100;
  imageRock.height = 100;
  imageRock.className = "rockImage";
  divAttack.appendChild(imageRock);
}
//*? === Enemy */
function imageAttackEnemyOne() {
  let imageEnemyOne = document.createElement("img");
  imageEnemyOne.src =
    "https://images.unsplash.com/photo-1563705655508-d8915da702f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
  imageEnemyOne.width = 100;
  imageEnemyOne.height = 100;
  imageEnemyOne.className = "arrowImage";
  divEnemyAttack.appendChild(imageEnemyOne);
}
function imageAttackEnemyTwo() {
  let imageEnemyTwo = document.createElement("img");
  imageEnemyTwo.src =
    "https://images.unsplash.com/photo-1530380774715-d5418b22b2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  imageEnemyTwo.width = 100;
  imageEnemyTwo.height = 100;
  imageEnemyTwo.className = "enemyImageOne";
  divEnemyAttack.appendChild(imageEnemyTwo);
}
function imageAttackEnemyThree() {
  let imageEnemyThree = document.createElement("img");
  imageEnemyThree.src =
    "https://images.unsplash.com/photo-1514771206769-bd41b0138cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  imageEnemyThree.width = 100;
  imageEnemyThree.height = 100;
  imageEnemyThree.className = "enemyImageThree";
  divEnemyAttack.appendChild(imageEnemyThree);
}

//*! Random Enemy Attack === */
const randomAttack = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//*! === Message */
function messageUser() {
  let paragraphUser = document.createElement("p");
  paragraphUser.textContent = `User select: ${playAttack}`;
  paragraphUser.className = "messageUser";
  divAttack.appendChild(paragraphUser);
}
function messageAttack() {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Enemy select: ${enemyAttack}`;
  paragraph.className = "messageEnemy";
  divEnemyAttack.appendChild(paragraph);
}

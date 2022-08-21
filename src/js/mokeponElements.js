//** === Add Child Elements */
//*! === Mokepon Monsters */
const divMonster = document.querySelector(`#IdChildMonster`);
const divEnemy = document.querySelector("#idMonsterEnemy");

//*! === User */
export const fireAdd = () => {
  const img = document.createElement("img");
  img.src =
    /*   "https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"; */
    "https://media.redadn.es/imagenes/pokemaster_338177_pn2.jpg";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divMonster.appendChild(img);
};
export const waterAdd = () => {
  const img = document.createElement("img");
  img.src =
    /*  "https://images.unsplash.com/photo-1596743343697-bd2c1e5a8c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"; */
    "https://alfabetajuega.com/hero/2019/03/Squirtle-Looking-Happy.jpg?width=1200&aspect_ratio=1200:631";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divMonster.appendChild(img);
};
export const earthAdd = () => {
  const img = document.createElement("img");
  img.src =
    /*   "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg"; */
    "https://dam.smashmexico.com.mx/wp-content/uploads/2017/09/03144141/trend-una-arana-con-la-forma-de-pikachu-si-existe-cover.jpg";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divMonster.appendChild(img);
};
//*! === Enemy */
export const enemyOne = () => {
  const img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/4188296/pexels-photo-4188296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divEnemy.appendChild(img);
};
export const enemyTwo = () => {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1609845768806-767fcfc317b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divEnemy.appendChild(img);
};
export const enemyThree = () => {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1590955559496-50316bd28ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80";
  img.width = 100;
  img.height = 100;
  img.className = "monsterImg";
  divEnemy.appendChild(img);
};

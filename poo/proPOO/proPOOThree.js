//*TODO === ===  === Part 03 ===  === ===  */
//*? === Shallow Copy */
const people01 = {
  name: "Luisa",
  country: "Mexico-City",
  town: {
    city: "New York",
    work: "Journalist",
  },
};

const people02 = {};

//*! === > For() < === */

/* for (prop in people01) {
  people02[prop] = people01[prop];
} */

//*! === > Method < ===  */
const people03 = Object.assign({}, people01);

const people04 = Object.create(people01);

//*! === ===  > Call  */
//console.log(people02);
//console.log((people02.name = "Alma"));
//console.log(people02);
//console.log(people01);

//console.log(people03);
//console.log((people03.name = "Natalia"));
//console.log(people01);
//console.log(people03);

//console.log(people04);
//console.log((people04.name = "Pamela"));
//console.log(people04);
//console.log(people01);

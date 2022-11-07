//** === === POO ( Programming Oriented Object ) PRO === ===  */

//*!=== Static */
class Hello {
  static sound() {
    return "Hello Sound!!";
  }
}

//*! === Object.Keys() === */
const object = {
  name: "Frank",
  age: 25,
  country: "Spain",
};

//*! === Object.getOwnPropertyNames() === */
const people = {
  name: "Alma",
  country: "Germany",
  age: 25
};

//*! === Object.entries() === */
const person = {
  name: "Tanya",
  country: "British",
  age: 35,
};


//**TODO === === === === Call === === === === */
//*? Call Static */
console.log(Hello.sound());
//*? Call Object.Keys */
console.log(Object.keys(object));
//*? Call Object.getOwnPropertyNames() */
console.log(Object.getOwnPropertyNames(people));
//*? Call Object.entries() */
console.log(Object.entries(person));
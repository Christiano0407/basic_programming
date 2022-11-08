//*TODO === ===  === Part 03 ===  === ===  */
//*? === > Shallow Copy */
const people01 = {
  name: "Luisa",
  country: "Mexico-City",
  town: {
    city: "New York",
    work: "Journalist",
  },
  addNewCountry() {
    this.country = "United-State";
  },
};
//console.log(people01);

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

//*? === Method JSON === > JSON.parse ("text" Format => JSON) & JSON.stringify (JSON => String = "text") < === */
const modifyOne = JSON.stringify(people01);
//console.log(modifyOne);

const modifyTwo = JSON.parse(modifyOne);
//console.log(modifyTwo);

//*? === > Recursividad (Recursive) (Call Inside other function) < === */
let numbers = 1;

const loop = (number) => {
  console.log(number);
  if (number < 5) {
    return loop(number + 1);
  }
  return 5;
};

//console.log(loop(numbers));

//*? === Deep Copy & Recursive ===  */
const people05 = ["Maria", "Mau", "Polo", "Luisa"];

function isObject(subject) {
  return typeof subject == "Object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsObject) {
    copySubject = {};
  } else if (subjectIsArray) {
    copySubject = [];
  } else {
    return subject;
  }

  /* copySubject.forEach((key) => {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      deepCopy(subject[key]);
    }

    if (subjectIsArray) {
      copySubject.push(subject[key]);
    }

    return copySubject[key] == subject[key];
  }); */

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}
//console.log(deepCopy(people01));
//console.log(deepCopy(people05));

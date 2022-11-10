//*TODO === === === > POO FOUR === === < === */

//*? ==> Abstraction / Encapsulamiento / Not Prototypes <== */

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

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approveCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
    linkedin: undefined,
  },
};

const person1 = deepCopy(studentBase);
/* Object.defineProperty(person1, "name", {
  value: "Alma",
  enumerable: true,
  writable: true,
  configurable: false,
}); */
//*? === Evitar que se Editen o Borren */
Object.seal(person1);
Object.isSealed(person1);
Object.isFrozen(person1);
//console.log(person1);

//** === Factory Pattern & RORO === */
function createPlaySoccer({ name, country, team }) {
  return {
    name,
    country,
    team,
  };
}

const jimenez = createPlaySoccer({
  name: "Jiménez",
  country: "México",
  team: "Wolverhamptom",
});
console.log(jimenez);

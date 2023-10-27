
// const person = {
//     firstName : 'Zeliha',
//     lastName :'Sahin',
//     age : 32,
//     country :'Turkey',
//     city:'Ankara',
// }
// console.log(person);


// console.log(person.firstName);

// console.log(person['firstName']);


// ! Level-1----------------
// const dog = {
// name : 'Daisy',
// legs : 'tall',
// age :'5',
// bark : function(){
//     return  'woof woof'
// }
// }

// console.log(dog);
// console.log(dog.legs);
// console.log(dog['name']);
// console.log(dog.bark());
// console.log(dog['age']);
// console.log(Object.values(dog));
// console.log(Object.keys(dog));


// dog.breed = 'lady'
// dog.getDogInfo = function(){
//     return `${this.name} is ${this.age} and ${this.breed}
// and bark name is ${this.bark()}`
// }

// console.log(dog.getDogInfo());

// ! Level----2----

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let winner;
// let max = 0;

// console.log();

// for (const property in users) {
//   if (users[property].skills.length > max) {
//     max = users[property].skills.length;
//     winner = property;
//   }
// }
// console.log(winner);

// const newUsers = Object.assign({},users)
// newUsers.name = 'Zeliha'

// console.log(newUsers);

// for (const property in users) {
  // if (users[property].skills.indexOf("MongoDB", "Express")) {
  //   max = users[property].skills.length;
  //   winner = property;
  // }

//   if(users[property].skills.indexOf("MongoDB") !== -1){
//     console.log(users[property]);
//   }
// }


// ! level--3






const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

for(const user in users){
 
  if(user.skills === 'MongoDB' && 'Express' && 'React' && 'Node')
        {console.log(user);
        }
      
  
  
}

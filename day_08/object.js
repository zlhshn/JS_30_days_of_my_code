
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

const personAccount = {}

personAccount.firstname = 'zeliha'
personAccount.lastName = 'sahin'
personAccount.incomes = "0$"
personAccount.expenses = "250$" 
personAccount.accountInfo=  function(){
      return  ` ${this.incomes} - ${this.expenses}`
}


console.log(personAccount.accountInfo());
console.log(Object.entries(personAccount));
console.log(Object.keys(personAccount));
console.log(Object.values(personAccount));

  
personAccount.totalIncome = function(){
    let tincome = 0
    let values = this.incomes
}



const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// const names = ['Asabeneh', 'Brook', 'David', 'John']
// let [firstPerson, , thirdPerson, fourthPerson] = names

// console.log(thirdPerson);
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

//   const [frontend,backend] = fullStack

//   console.log(frontend);

// const names = [undefined, 'Brook' , 'David']

// let [ firstPerson =  'zeliha ', secondPerson, thirdPerson, fourthPerson] = names

// console.log(fourthPerson);
// console.log(typeof secondPerson);

// const nums = [1,2,3,4,5,6,7,8,9]
// console.log(typeof nums);

// const [num1,num2,num3,num4, ...rest] = nums

// console.log(num1);
// console.log(typeof num2);

// console.log(typeof rest);

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country,city] of countries) {
//     console.log(country,city);
// }

// for (const c of countries) {
//     console.log(c);
// }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }

//   let { width , height , a} = rectangle

//   console.log(width);

//   let { width : w, height: h} = rectangle

//   console.log(h);

// const rect = {
//   width: 20,
//   height: 10,
// };

// const calculatePerimeter = (rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };

// console.log(calculatePerimeter(rect));

// const todoList = [
//     {
//       task:'Prepare JS Test',
//       time:'4/1/2020 8:30',
//       completed:true
//     },
//     {
//       task:'Give JS Test',
//       time:'4/1/2020 10:00',
//       completed:false
//     },
//     {
//       task:'Assess Test Result',
//       time:'4/1/2020 1:00',
//       completed:false
//     }
//     ]

//     for (const {task, time, completed} of todoList){
//       console.log(task, time, completed)
//     }

//     for(const list of todoList){

//         console.log(list.task);
//     }

// const sum = (...args)=> {
//     console.log(args);
// }

// sum(1,3,4)

// ! -Level-1---
// const constants = [2.72, 3.14, 9.81, 37, 100]

// let [e,pi, gravity,humanBodyTemp,waterBoiling] = constants

// console.log(gravity);

// // soru-2
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// const [fin,est,sw,den,nor] = countries

// console.log(fin);

// soru-3

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
//   }

//   const {width,height,area,perimeter} = rectangle

//   console.log(height);

//   for (const rec in rectangle) {
//     console.log(rec);
//   }

// const constants = [2.72, 3.14, 9.81, 37, 100]

// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// console.log(gravity);

// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// const [fin, est, sw, den, nor] = countries

// console.log(fin);

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   // perimeter: 60
// }

// const {width,height,area,perimeter= 50} = rectangle

// console.log(height);
// console.log(perimeter);

// ! level-2

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

users.forEach((element) => {
  const { name, scores, skills, age } = element;
  console.log(name);
  console.log(scores);
  console.log(skills);
  console.log(age);
});

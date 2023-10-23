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

const sum = (...args)=> {
    console.log(args);
}


sum(1,3,4)
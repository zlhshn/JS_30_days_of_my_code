
// * Boolean 

// let isLightOn = true
// let isRaining = false

// let  falseValue = 4>3
// console.log(falseValue);

// * Null

// let empty = null

// console.log(typeof empty);

// * Aritmethic Operators

// let num1 = 4

// let num2 = 7

// console.log(`${num1+num2}`);

// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1**num2);

// const PI = 3.14
// let radius = 100

// let areaOfCircle = PI*radius**2

// console.log(areaOfCircle);


// const gravity = 9.81

// let mass = 75

// let weight = mass*gravity

// console.log(weight);

// * Comparison operator

// console.log(3<4);
// console.log(4===4);
// console.log('5' === 5);
// console.log(3 != 7);
// console.log(3 !== '3');
// console.log(0 == false);
// console.log(NaN == NaN);
// console.log(undefined == undefined);
// console.log(3 === 3) 
// console.log('python'.length < 'dragon'.length);


// * Ternary Operation

// let isRainning = false

//  isRainning ? console.log('rain coat') : console.log('no need anytinhg');


// * Window Methods --prompt --confirm-- alert

// alert('message')
// alert('Welcome to 30DaysOfJavaScript')

// prompt('required text', 'optional text')

// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// const agree = confirm('are you continue Y/N')

// * Date object

// get ile başlayanlar method--getFullYear--getDate

// const now = new Date()

// console.log(now.getHours());

// console.log(now.getTime());

// const allSeconds = Date.now()

// console.log(allSeconds);

// const month = now.getMonth() // return month(0 - 11)
// console.log(month);


// ! Level -1

// const fisrtName ='zeliha'

// const isMarried = false

// console.log(typeof isMarried);

// truty = true, '.', 23
// falsy = 0, 0n ,false, '', null,undefined,NaN,``

// console.log(4 != '4');

// console.log(new Date().getFullYear());
// console.log(new Date().getDate());

// const allSecond = Date.now(19/1990)
// console.log(allSecond);

// !Level-2

// const base = +prompt('enter base')

// const height =+prompt('enter height')

// console.log(`the area of triangle is ${0.5*base*height}`);


// soru -9

// const hours = +prompt('enter weekly hours')

// const rate = +prompt('enter rate per hour')

// console.log(`Your weekly earning is ${hours*rate}`);


// soru -11

// let myFirstName = 'zeliha'

// let myLastName = 'sahin'

// console.log(myLastName.length == myFirstName.length);


// soru-15
// const now = new Date();
// const options = {
 
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   hour12: true,
//   year:'2-digit',
// };

// const humanReadableTime = now.toLocaleTimeString('en-US');

// console.log(humanReadableTime);

// !Level-3

// function formatTwoDigits(number) {
//     return number < 10 ? `0${number}` : number;
//   }
  
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = formatTwoDigits(now.getMonth() + 1); // Adding 1 because months are 0-based.
//   const day = formatTwoDigits(now.getDate());
//   const hours = formatTwoDigits(now.getHours());
//   const minutes = formatTwoDigits(now.getMinutes())
  
//   const humanReadableTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  
//   console.log(humanReadableTime);
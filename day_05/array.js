// array oluşturma yolları

// const arr = Array()

// console.log(arr);

// const  arr2 = new Array()

// console.log(arr2);

// const arr3 = []

// console.log(arr3);

// const numbers = [3,4,56,78,900,5.8]
// console.log(numbers);
// console.log(numbers.length);

// const arr4 = ['asabeneh' , 23, true, {country:'Turkey', city: 'malatya'},
// {skils :['html','css','js','react']}]
// console.log(arr4);

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript);

// let companiesString = '1, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies)
// console.log(companies[3].toLowerCase());
// console.log(Number(companies[0]));

// console.log(companies.length-1);

// const shoppingCart = [
//     'Milk',
//     'Mango',
//     'Tomato',
//     'Potato',
//     'Avocado',
//     'Meat',
//     'Eggs',
//     'Sugar'
//   ] 

//   console.log(shoppingCart);
//   console.log(shoppingCart[0]);
  
//   shoppingCart[3] = 'choclate'

//   console.log(shoppingCart);

// * Array Methods

// const arr = Array(4)
// console.log(arr);

// const arr5 = Array(3).fill(9)

// console.log(arr5);

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(4));


// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5));

// console.log((numbers.toString()));


// console.log(numbers.join('.'))

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice()
// console.log(numbers)  

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0,1)
// console.log(numbers) 

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers);

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray = [firstNums,secondNums]
// console.log(arrayOfArray);
// console.log(arrayOfArray[0]);

// ! Level-1

// const arr7 = Array(5)
// const arr8 = new Array()
// const arr9 = []

// console.log(arr7.length);

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//  console.log(countries[0]);
//  console.log(countries[countries.length-1]);
//  console.log(countries.length);
//  console.log(countries[(countries.length -1)/2]);

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// itCompanies = companiesString.split(',')
// console.log(itCompanies);
// console.log(itCompanies.length);

// console.log(itCompanies instanceof Array);
// console.log(Array.isArray(itCompanies));

// let dailyActivities = ['eat', 'work', 'sleep'];

// add an element at the end
// const newLength = dailyActivities.push('exercise','sport');
// console.log(dailyActivities);
// console.log(dailyActivities.pop());
// console.log(dailyActivities);

// const languages1 = ["JavaScript", "Python", "Java"];
// const languages2 = ["C", "C++"];

// console.log(languages1.concat(languages2));



// !sort() içine function alabilir

// const numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log(numbers);

// console.log(numbers.splice());


// ! splice methode delete and insert and update

let scores = [ 15, 21, 18, 42, 17];
let deletedScores = scores.splice(0, 3);
console.log(scores); // [42, 17]
console.log(deletedScores); // [15, 21, 18]

let colors = ['red', 'green', 'blue'];
let deletedColors = colors.splice(3, 0, 'purple', 'orange');
console.log(colors); // ['red', 'green', 'purple', 'orange', 'blue']
console.log(deletedColors); // [] nothing deleted


let colors1 = ['red', 'green', 'purple', 'orange', 'blue'];
let deletedColors1 = colors1.splice(3, 1, 'pink');
console.log(colors); // ['red', 'green', 'purple', 'pink', 'blue']
console.log(deletedColors1); // ['orange'] is deleted
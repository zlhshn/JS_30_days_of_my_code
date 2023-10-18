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
// console.log(countries.indexOf('Albania'));
// console.log(countries.indexOf('Finland'));
// console.log(countries.lastIndexOf('Kenya'));



// *soru-6-7-8-9-10-11-12
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[itCompanies.length-1]);
// console.log(itCompanies[(itCompanies.length-1)/2]);
// for(let i= 0; i<itCompanies.length;i++){
//     console.log(itCompanies[i].toUpperCase());
// }

// console.log(itCompanies.join(','));

// * soru-13

// let index = itCompanies.indexOf('Google')
// if(index===-1){
//     console.log('not exist');
// }else{
//     console.log('exist array');
// }
// itCompanies.includes('Facebook') ?  console.log('you have') : console.log('do not');



// *soru-14-tekrar bak
// let itCompanies = ["Microsoft", "Google", "Facebook", "Amazon", "Apple"];
// let filterCompanies = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   let len = (itCompanies[i].match(/o/gi) || []).length;
//   if (len > 1) {
//     filterCompanies.push(itCompanies[i]);
//   }
// }
// console.log(filterCompanies);
 

// for(i=0; i<= companis.length ; i++){

// if((companis[i].match(/o/gi)).length>=2){
//     console.log(companis[i]);
// }
// }


// *soru-15-16-17-18-19

// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(0,3));
// console.log(itCompanies.slice(itCompanies.length-3));

// console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1));

// *soru 20-21-22-23

// let itCompanie = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// console.log(itCompanie.shift());
// console.log(itCompanie);

// console.log(itCompanie.splice((itCompanie.length-1)/2,1));
// console.log(itCompanie);

// console.log(itCompanie.pop());
// console.log(itCompanie);

// console.log(itCompanie.splice());








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



// !sort() içine function alabilir-preclass

// const numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log(numbers);

// console.log(numbers.splice());


// ! splice methode delete and insert and update-preclass

// let scores = [ 15, 21, 18, 42, 17];
// let deletedScores = scores.splice(0, 3);
// console.log(scores); // [42, 17]
// console.log(deletedScores); // [15, 21, 18]

// let colors = ['red', 'green', 'blue'];
// let deletedColors = colors.splice(3, 0, 'purple', 'orange');
// console.log(colors); // ['red', 'green', 'purple', 'orange', 'blue']
// console.log(deletedColors); // [] nothing deleted


// let colors1 = ['red', 'green', 'purple', 'orange', 'blue'];
// let deletedColors1 = colors1.splice(3, 1, 'pink');
// console.log(colors); // ['red', 'green', 'purple', 'pink', 'blue']
// console.log(deletedColors1); // ['orange'] is deleted





// const arr = Array()
// const arr1 = new Array()
// const arr2 = [] 

// console.log(typeof arr);
// console.log(typeof arr1);
// console.log(typeof arr2);

// console.log(arr);

// const numbers = [5,6,7,2.4,5]
// console.log(numbers);
// console.log(numbers.length);
// console.clear()

// const arr5 = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ]

// console.log(object);

// console.log(arr5);
// console.log(arr5.length);

// let js = 'Java script'

// console.log(js.split('a',2));

// const fruits = ['banana', 'orange', 'mango', 'lemon']

// console.log(fruits[0][0],fruits[2]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length-1]);
// console.log(fruits.length);

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   console.log(webTechs);
// console.clear()

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
// console.log(countries);
//   countries[14] = 'Turkey'
//   console.log(countries);

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList  = [7,8,9]

// const fourtList = firstList.concat(secondList,thirdList)

// console.log(fourtList);

// const numbers = [1, 2, 3, 4, 5,'banana']

// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf('apple'));
// console.log(numbers.indexOf('banana'));

// const fruits = ['banana','apple', 'orange', 'banana', 'mango', 'lemon','apple','banana']

// console.log(fruits.indexOf('banana',4));
// console.log(fruits.lastIndexOf('banana',6));
// console.log(fruits.includes('apple'));
// console.log(fruits.includes('banana'));

// console.log(Array.isArray(fruits));
// console.log(fruits.toString());

// const name1 = 'Zeliha'
// console.log(Array.isArray(name1));


// let index = fruits.indexOf(prompt('enter a fruits').toLowerCase())

// index === -1 ? console.log('not exist') : console.log('index of fruits');

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   console.log(webTechs.slice(webTechs.length-1));

// console.log(webTechs.slice().reverse());
// console.log(webTechs);



//   console.log(webTechs.join('-'));
//   console.log(webTechs);


// const myArr = ['a','b','c']

// console.log(Array.isArray(myArr));

// console.log(myArr instanceof Array);

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0,1)
// console.log(numbers) 

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 'a', 'b', 'c')  
// console.log(numbers);

// let scores = [ 15, 21, 18, 42, 17];
// // let deletedScores = scores.splice(0,1);
// console.log(scores.splice(2,1));
// console.log(scores);

// let colors = ['red', 'green','blue'];
// let deletedColors = colors.splice(2, 0, 'purple', 'orange');
// console.log(colors);

// let colors = ['red', 'green', 'purple', 'orange', 'blue'];
// let deletedColors = colors.splice(3,5);
// console.log(colors);

// const arr  = ['item1', 'item2','item3']
// console.log(arr.pop());
// console.log(arr);

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6,7)
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers)

const numbers = [1,0,11,11,12,23,56,2,3,101,110]
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);
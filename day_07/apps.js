
// function printFullName(){
//     let firstName ='Zeliha'
//     let lastName = 'Sahin'
//     let space = ' '
//     let fullName = firstName + space + lastName 
//    console.log(fullName);
// }

// let city = ' Ankara'

// console.log(printFullName() + city);

// printFullName() + city;


// function addTwoNumbers(){
//     let num1 = +prompt('enter a number')
//     let num2 = +prompt('enter a number')
//     return num1 + num2
// }

// console.log((addTwoNumbers()));


// function square(num){
// let area = Math.PI*num*num
// return area
// }

// function sumTwoNumbers(num1,num2){
//     let sum = num1+num2
//    return sum
// }

// console.log(sumTwoNumbers(4,6));

// function printFullName(firstName, lastName){
//     return `${firstName} ${lastName}`
// }

// console.log(printFullName('zeliha','sahin'));

// document.write(printFullName('zeliha','sahin'))



// function sumArrayValues(arr){
//     let sum = 0 
//     for (let i= 0; i< =arr.l){
    
//         sum = sum + arr[i]
//     }
//     return sum;
// }
// const numbers = [ 1,2,3,4 ]
// console.log(sumArrayValues(numbers));

// const areaOfCircle = (radius) => {
//     let area = Math.
// }

// function  sumAll(){

//     let sum = 0
//     for( let i=0; i<arguments.length;i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(sumAll(3,4,5,6,7,8,));

// const sumAllNums = (...args) => {
//     let sum = 0
// }

// (function(n){
//     console.log(n*n);
// })(4)

// console.log(object);

// function fullName(){
//     console.log('Zeliha');
// }

// fullName()

// function fullName(name,surname){
//     console.log(`My name is ${name} + ${surname}`);
// }

// fullName('Zeliha','Sahin')



// function addNumbers(x,y){
//     return x+y
// }

// console.log(addNumbers(5,4));

// function areaOfRectangle(l,w){
//    let area = l*w
//     return area;
// }

// let city = ' Ankara'

// console.log(areaOfRectangle(4,6)+ city);



// ! declaration function
// function perimeterOfRectangle(l,w){
//     const perimeter = 2*(l+w)
//     return perimeter
// }
// console.log(perimeterOfRectangle(5,10));


// ! Arrow function
// const volum = (l,w,h) => {
//     let hacim = l*w*h
//     return hacim

// }
// console.log(volum(3,2,4));


// ! Expression function

// let  volume = function(l,w,h){
//     return l*w*h
// }
// console.log(volume(2,3,6));


// ! Self-invoking function

// 1.yöntem
// (function(l,w,h){
//     console.log(l*w*h); 
// })(2,6,5)

// 2.yöntem

// let square = (function(l,w,h){
//    return l*w*h; 
// })(2,6,5)

// console.log(square);




// ? Level-1-10.soru Anonyms function


// const speed = function(x,t){
//   let  v = x/t
//     return v
// }

// console.log(speed(1000,50));




// *Level 2-----10.Soru
//* Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.


// 1.yöntem
//  const sumOfNumbers =function (){
//   let sum = 0
//   for(let i= 0; i < arguments.length;i++){
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sumOfNumbers(1,2,3,6,8));

// 2.yöntem
// const sumOfNumber = (...args) =>{
//   sum = 0

// // const element of args

//   for(let i = 0; i<args.length;i++){   
//     sum += args[i]
//   }
//   return sum
// }
// console.log(sumOfNumber(1,2,1,));


//*  Level-2 ----11.soru
// *Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that  range.


// const sumOfOdds = function(){
//   let sum_odd = 0
//   for(let i = 0; i<arguments.length;i++){
   
//     arguments[i] %2 ? sum_odd +=arguments[i] : ''
//   }
//     return sum_odd
  
// }

// console.log(sumOfOdds(1,2,9,6,4));




// * Level-2----12.soru
//* Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.


// const sumOfEvens = function(){
//   let sum_even = 0
//   for(let i = 0; i<arguments.length;i++){

//    if(arguments[i]%2 == 0){
//       sum_even += arguments[i]
//    }
//   }
//     return sum_even
  
// }

// console.log(sumOfEvens(1,8,5,6,4));





// *Level-3----15.soru
// *Write a function called isPrime, which checks if a number is prime number.

// 1.çözüm
// const isPrime = function(){

//  let a=Number(prompt("Asal olup olmadiğini öğrenmek istediğiniz sayiyi giriniz:")) ;

//  let b=0 ;

//   for (i=1;i<=a;i++) {

//         if (a%i==0) {

//            b++} }
//             ;
//         if( b==2) {

//         console.log("Girdiğiniz sayi asaldir") }
//           else {
//         console.log("Girdiğiniz sayi asal değildir.")
//        }
// }
// console.log(isPrime());

// *Level-3 ----16.soru 

// const unique = function(...args){

//   args = Array.from(args)

//   for(let i = 0; i<args.length;i++){
//        if (args.indexOf(args[i]) !== i){
//         return 'not a unique args'
//        }
   
//       }
//       return ' unique args';
// }

// console.log(unique(3,'dizi',9,7,'g',7));


// const higherOrder = n =>{
//     const doSomeThing = m =>{
//         const doWhatEver= t =>{
//             return 2* n +3 * m +t
//         }
//         return doWhatEver
//     }
//     return doSomeThing
// }

// console.log(higherOrder(2)(3)(10));

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// const newSentence = countries.reduce((sum,country)=> countries.push )


// console.log(newSentence);

const newSentence = countries.reduce((sum,country)=>sum+","+country)

const newSentence2 = newSentence.replace(newSentence.lastIndexOf(','),'and')


console.log(newSentence);
console.log(newSentence2);

const cost = products.reduce((sum,x)=> sum +x)
console.log(products);


// const sumNumbers = numbers.reduce((sum,num) => sum +num,0)
// console.log(sumNumbers);



// countries.forEach((country)=> console.log(country))
// names.forEach((number)=>console.log(number))

// countryUpper = countries.map((country)=> country.toLocaleUpperCase())
// console.log(countryUpper)

// countryLenght = countries.map((country)=> country.length)
// console.log(countryLenght);

// console.log(numbers.map((number)=>number**2))

// namesUpper = names.map((name)=> name.toUpperCase())
// console.log(namesUpper);

// nameProduct = products.map((product)=> `${product.product}: ${product.price}` )

// console.log(nameProduct);

// const land = countries.filter((country) =>
//   country.toLowerCase().includes("land")
// );
// console.log(land);

// const charSix = countries.filter((country) => country.length === 6);
// console.log(charSix);

// const charSixx = countries.filter((country) => country.length>= 6);
// console.log(charSixx);

// const startE = countries.filter((country) => country.startsWith('E'));
// console.log(startE);

// const price = products.filter((product,i)=> products[i].price>0)
// console.log(price);

// const arr = [2,4,true,'a','b']
// console.log(arr.filter((str)=> typeof str === String));


// const arr = [1,2,true,'a','b']
// const getStringLists = (arr)=>{
//   return arr.filter((str)=> typeof str === "string")
// }
// console.log(getStringLists(arr));

// ! level---2


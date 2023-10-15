
// console.log(countries);
// console.log(webTechs);

// !Level--2 
// *soru-2

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// console.log(text.replace(/[.,]/gi,''));
// let textArr = text.split(' ')
// console.log(textArr);
// console.log(textArr.length);


// *soru--3
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// console.log(shoppingCart.push('Bread'));
// console.log(shoppingCart);
// console.log(shoppingCart.shift());
// console.log(shoppingCart);
// console.log(shoppingCart.unshift('Sugar'));
// console.log(shoppingCart);

// *soru-4

// countries.includes('Ethiopia') ? console.log('ETHIOPIA'): countries.push('Ethiopia')

// *soru-5
// webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess'): webTechs.unshift('Sass') && console.log(webTechs);

// *soru6

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack= frontEnd.concat(backEnd)

// console.log(fullStack)

// ! level--3----

// *soru 1--son şıkkı yapamadım

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// console.log(ages.sort());

// console.log(ages[0]);
// console.log(ages.length);
// console.log(ages[ages.length-1]);
// const median = (ages[ages.length/2] +ages[ages.length/2 +1]) / 2
// console.log(median);

// let sum = 0
// let count = 0
// while(count<ages.length){
//     sum += ages[count]
//     count++
// }

// console.log(sum);

// console.log(ages[(ages.length-1)]- ages[0]);



// *soru--2

// console.log(countries.length);

// console.log(countries[((countries.length-1)/2)]);

// *soru--3


// if(countries.length%2){
//     countries.splice((((countries.length-1)/2)),0,'Turkey')
//     console.log(countries);
// }else{
//     let middle = Math.ceil(countries.length/2)
//     let firstHalf = countries.slice(0,middle+1)
//     let secondHalf = countries.slice(middle+1)
//     console.log(firstHalf);
//     console.log(secondHalf);
// }
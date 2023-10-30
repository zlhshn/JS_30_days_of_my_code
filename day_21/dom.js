
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles);
console.log(allTitles.length);



for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
  }


  let firstTitle = document.getElementById('first-title')
  console.log(firstTitle) // <h1>First Title</h1>


  

//   const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }


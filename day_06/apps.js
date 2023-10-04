// for(let i = 0 ; i<= 5; i++){

//     console.log(i);
// }


// for(let i = 0; i <= 7; i++){
//     console.log(`${i} * ${i} = ${i*i}`) ;
// }

// for(let num = 2 ; num<= 50 ; num++){
//     console.log(`${1000/num}`);
// }

// const countries = ['Finland', 'Sweden', 'Denmark' , 'Norway' , 'Iceland']

// const newArr = []
//  for(let i=0; i<countries.length; i++){
//     countries.push(countries[i].toUpperCase())
//  }
//  console.log(newArr);



const oddOrEven=[10,11,12,13,14,15,16,17,18,19,20,21]
let even=[]
let odd=[]
let sum =0
let sumo =0
for(let i=0;i<oddOrEven.length;i++){
    if(oddOrEven[i]%2==0){
       even.push(oddOrEven[i])
       sum = sum + oddOrEven[i]
       
    }else{odd.push(oddOrEven[i])
        sumo = sum + oddOrEven[i]
    }
}
console.log(`cift sayilar: ${even},
bu sayilarin toplami: ${sum}`);
console.log(`tek sayilar: ${odd},
bu sayilarin toplami: ${sumo}`);

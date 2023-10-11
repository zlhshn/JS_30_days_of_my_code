
// ! driver licence

// !driver licence

// const age= Number(prompt("Enter your age:"))

//  if(age>=18){console.log("You are old enough to drive.");
// }else{console.log(`You are left with ${18-age} years to drive.`)}

// let string = 'Javascript'

// let firstLetter = string[0]
// console.log(firstLetter);

// let lastLetter = string[9]
// console.log(lastLetter);
// string[6]
// console.log(string[5]);
// let string = '30 Days Of JavaScript'

// console.log(string.charCodeAt(9));
// console.log(string.charCodeAt(string.length -1));
// let string = '30 '
// console.log(string.concat('girl ', 'and ', 'boy '));

// // ?trim()


// let string  = '        string    '

// console.log(string.trim());

// let nums = [1,2,4,9]

// let numbers  = [1,2,4,9]

// console.log(nums === numbers);
// const PI = Math.PI

// console.log(Math.round(PI));
// console.log(Math.ceil(PI));
// console.log(Math.floor(PI));
// console.log(Math.trunc(PI));

// console.log(Math.max(2,345,567,2,-8));
// console.log(Math.min(2,345,567,2,-8));

// console.log(Math.abs(89));
// console.log(Math.sqrt(90));
// console.log(Math.pow(8,3));


// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
// console.log(Math.log(2))        // 0.6931471805599453
// console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
// console.log(Math.LN2)           // 0.6931471805599453
// console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
// console.log((Math.sin(0)));
// Math.sin(60)

// Math.cos(0)
// Math.cos(60)


// ? String
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// console.log(quotWithBackTick);

// console.log('this is a backslahs\\');

// let string = '       Java   Script      '
// console.log(string[5]);

// console.log(string[string.length -1]);

// let upper = string.toUpperCase();

// console.log(upper);

// console.log(string.substr(3,4));
// console.log(string.substring(3,4));
// console.log(string.split('a'));
// console.log(string.trim());


// let string = '30 Days Of JavaScript'

// let string = 'I Love JavaScript. 209 If you do not love JavaScript what else can you love.'
// console.log(string.match(/\d+/g))   

// console.log(string.indexOf(6));
// console.log(string[string.length -1]);

// 
// ! Exercise--1 

// ? level-1

// const challenge = '30 ,40 Days Of JAvaScript'
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toLowerCase());
// console.log(challenge.toUpperCase());
// console.log(challenge.substring(3,9))
// console.log(challenge.substr(5,2));
// console.log(challenge.slice(-5,18));
// console.log(challenge.includes('Script'));
// console.log(challenge.split(' '));

// const arr ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// const newArr = arr.split(',')

// console.log(newArr);

// console.log(challenge.replace('JavaScript', 'Python'));

// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt(challenge.indexOf('J')));
// console.log(challenge.indexOf('a'));
// console.log(challenge.lastIndexOf('a'));

// const sen1 = 'You cannot end a 123 sentence with  Because because because is a conjunction'

// console.log(sen1.indexOf('because'));
// console.log(sen1.lastIndexOf('because'));
// console.log(sen1.search(/because/gi));
// console.log(sen1.search(/123/gi));

// const challen = '    30 Days Of JavaScript ,,,,,,     '
// console.log(challen.trim());

// console.log(challenge.endsWith('pt'));

// console.log(challenge.match(/a/gi));
// console.log(challenge.match(/\d/g));

// console.log('30 Days'.concat(' of' +' JS' ));
// console.log('js'.repeat(20));

// ? Level - 2

// console.log('The quote There is no exercise \\ better for the heart \t than \n reaching down and lifting people up. by John Holmes teaches\
//  us to help one another.')

// console.log("Love is not patronizing and charity isn\'t about pity,\nit is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// console.log(typeof Number('10'));
// console.log(typeof 10);

// console.log('10' === 10);

// console.log(parseFloat('9.8'));

// console.log('9.8' == 10);
// console.log(Math.round('9.8')=== 10);


// console.log('python'.includes('on'),'jargon'.includes('on'));

// console.log(Math.round(Math.random()*100));

// const num = Math.random()
// console.log(num);
// const randomNumber = Math.floor( num* 50) + 50
// console.log(randomNumber);

// const num3 = Math.random()

// const randomNumber3 = Math.floor( num3* 256) 

// console.log(randomNumber3);

// const num3 = Math.random()

// const randomNumber3 = Math.floor( num3* 351)  +50

// console.log(randomNumber3);

// const word = 'Javascript'

// let leng = Math.round(Math.random() * 9)

// console.log(word[leng]);


// let word = 'You cannot end a sentence with because because because is a conjunction'

// console.log(word.substr(word.indexOf('because'),'because '.length*3));

// let word1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(word1.match(/love/g).length);

// ! Level - 3 3.soru yarım kaldı

// let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// sentence = sentence.replace(/@/g,'')
// sentence = sentence.replace(/%/g,'')
// sentence = sentence.replace(/$/g,'')
// sentence = sentence.replace(/&/g,'')
// sentence = sentence.replace(/#/g,'')

// const cleanedSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, '')

// console.log(cleanedSentence);


// console.log((cleanedSentence.match(/I/g).length));


// ?soru -4-eksik

// const newSentence ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// console.log(newSentence.match(/\d+/g));
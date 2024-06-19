const name = "yash"
const paisa = 50

console.log(name + paisa + " Value");

console.log(`Hello my name is ${name} and my repo count is ${paisa}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
// console.log(newString);
// 
const anotherString = gameName.split("t")
// console.log(anotherString);

const newStringOne = "   Yash    "
// console.log(newStringOne.trimLeft());
// console.log(newStringOne.trimRight());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))
// // 
// console.log(gameName.split('-'));
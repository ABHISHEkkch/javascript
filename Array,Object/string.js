const name= "Abhishek"
const repocount= 40

// anoter way to declare String-- it is a object
const gameName= new String('Abhishek')

// console.log(name.length);
// console.log(name[2])
// console.log(name.indexOf('s'))
// console.log(name.toUpperCase());
// const newstring= gameName.substring(0,4)
// console.log(newstring);
// console.log(gameName.slice(-9,2))

// console.log(gameName.search('h'));


// const Newstring= "    Abhi    " ;
// console.log(Newstring)
// console.log(Newstring.trim());  //it removes all white spaces  from string


const url="https://Abhi.com/Abhi%20/choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('Abhi')); //finds substring in string

console.log(url.split('/')) //it splits string on the basis of particular character





// console.log(name + repocount + "Value");
// better way
console.log(`my name is ${name} and my repo count is ${repocount}`);



//  Q1     
let str = "123";
console.log(Number(str) + 7); 
/////////////////////////////////////////
//  Q2 
let value = 0
function checkValue(value){
   if (!value) {
     return"invalid"
   } else {
    return "valid"
   }
}
console.log(function checkyalue(value)); 
//////////////////////////////////////////
//  Q3
for (let i = 1; i <=10 ; i++) {
   if (i%2===0) {
    continue
   } else {
    console.log(i)
   }
    
}
////////////////////////////////////////
//  Q4
let numbers = [5, 4, 3, 2, 1];

console.log(numbers.filter((num) => {
    return num % 2 === 0;
}));
//////////////////////////////////////////
//  Q5
let Num1 = [1, 2, 3]
let Num2 = [4, 5, 6]
function mergeArrays(Num1, Num2){
let result = [...Num1, ...Num2]
return result;}
console.log( mergeArrays([1, 2, 3],[4, 5, 6] ))
////////////////////////////////////////////
//  Q6
function getDay(day){
switch (day) {
    case 1 :
        return "Sunday"
        break;
    case 2 :
        return "Monday"
        break;
    case 3 : 
        return "Tuseday"
        break;
    case 4 :
        return "Wensday"
        break;
    case 5 :
        return "Thursday"
        break;
    case 6 :
        return "Friday"
        break;
    case 7 :
        return "Sutrday"
        break;
    default:
        return "invaild day"
        break;
}}
console.log(getDay(2))
///////////////////////////////////////
//  Q7
let words = ["a", "ab", "abc"];
let result = words.map(function(word) {
 return word.length;
});
console.log(result);
////////////////////////////////////////////
//  Q8
function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }
}
console.log(checkNumber(15))
/////////////////////////////////////////
//  Q9
const square = (num) => {
  return num * num;
};

console.log(square(5));
////////////////////////////////////
//  Q10
function getPersonInfo(person) {
  const { name, age } = person;

  return `${name} is ${age} years old`;
}

const person = { name: 'John', age: 25 };

console.log(getPersonInfo(person));
////////////////////////////////////////
//  Q11
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
////////////////////////////////////////
//  Q12
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

getData().then((result) => {
  console.log(result);
});
///////////////////////////////////////////
//  Q13
function findLargest(numbers) {
  return Math.max(...numbers);
}

console.log(findLargest([1, 3, 7, 2, 4]));
////////////////////////////////////////////
//  Q14
function getKeys(obj) {
  return Object.keys(obj);
}

const person = { name: "John", age: 30 };

console.log(getKeys(person));
////////////////////////////////////////////
//  Q15
function splitWords(str) {
  return str.split(" ");
}

console.log(splitWords("The quick brown fox"));

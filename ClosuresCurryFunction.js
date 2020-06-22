/*Problem #1
Use a closure to create multiple functions for adding a prefix to a name.
The prefix could be Doctor, Duchess, Sir, and so on.
const prefixSir = addPrefix("Sir");
Problem #3
Use closures to create multiple functions for adding both a prefix and a suffix to a name.
*/
// function addPrefix(prefix) {
//   return function (name) {
//     return `Hi ${prefix} ${name}.`;
//   }
// }
const addPrefix = (prefix) => {
  return (name) => {
    return (suffix) => {
      return `Hi ${prefix} ${name} ${suffix}.`;
    }

  }
}

const nameWithPrefix = addPrefix("Doctor")("Den")("Junior");
//console.log(nameWithPrefix);






//Problem #4
//Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:

const addMulti = (number1) => {
  return (number2) => {
    return `Add two number  ${number1 + number2}  Multiple two number  ${number1 * number2}`
  }
}


const addTwoMultiThree = addMulti(2)(3)
console.log(addTwoMultiThree);











//------------------------------------------------------------------------
/*
Problem #2
Use a closure to create multiple functions for making various animal noises. 
For example, it should be possible to do the following:
const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
*/


function soundMaker(sound) {
  return function (animal) {
    return (`${sound} is made by ${animal}`)
  }
}



const lionSound = soundMaker("roar")("lion");// roar is made by undefinded


const mouseSound = soundMaker("squeak")("mouse");


// console.log(mouseSound);
// console.log(lionSound);





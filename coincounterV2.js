/*
Part 2
Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies).
*/

//pennies(nickels(dimes(quarters(userAmount))))

//const newUserAmt = Math.floor(100 * userAmt);
const coins = [];
const quarters = (userAmount) => {
  const amt = userAmount;
  if (amt / 25 < 1) {
    return amt;
  } else {
    coins.push("25");
    return quarters(amt - 25);//[amt - 25]
  }
};

const dimes = (element) => {
  const amt = element;
  if (amt / 10 < 1) {
    return amt;
  } else {
    coins.push("10");
    return dimes(amt - 10);
  }
};

const nickels = (element) => {
  const amt = element;
  if (amt / 5 < 1) {
    return amt;
  } else {
    coins.push("5");
    return dimes(amt - 5);
  }
};
const pennies = (element) => {
  const amt = element;
  if (amt / 1 < 1) {
    return amt;
  } else {
    coins.push("1");
    return dimes(amt - 1);
  }

}
pennies(nickels(dimes(quarters(50))));
console.log("this is the result " + coins);


// 
// /*const multiplier = (numberToMultiplyBy) => {
//   return (numberToMultiply) => {
//     return numberToMultiplyBy * numberToMultiply;
//   }
// } */

// const coinCounter = (userAmount) => {
//   return (userAmount) => {
//     const quarter = userAmount / 25;
//     const reminderDimes = userAmount % 25;
//     return (reminderDimes) =>{
//       const dime = userAmount / 25;
//     const reminderNick = userAmount % 25;

//     }
//   }
// }







// // const coinCounter = (change) => {

// //     if(change = 0)
// //     {
// //         return;
// //     }
// //     if (change % .25 == 0)
// //     {
// //         return quarter++ && (change - 0.25)
// //     }


// // }










// function aThingIMaybeLike(howMuchILikeIt) {
//     return function(thing) {
//       return function(reason) {
//         return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
//       }
//     }
//   }
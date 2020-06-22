/*
Problem #1
Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".
*/

const reverseString = (str) => {
  if (str.length === 0)
    return "";
  else {
    return reverseString(str.slice(1)) + " " + str[0];
  }

}

const str = "I am a cat";
const strArray = str.split(" ");
const result = reverseString(strArray);

// console.log(result)







/*
Problem #2
Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:

"red green refactor red green refactor red green refactor"
*/






const printing = (str, number) => {

  if (number === 0) {
    return "";
  } else {

    return str + " " + printing(str, --number);
  }
}


const three = printing("red green refactor", 3)

console.log(three)




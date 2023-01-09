// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]

// RED
describe ("shuffledColors", () => {
  it("returns an array with the first item removed and the rest shuffled", () => {
    expect(shuffledColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffledColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
}
)

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// GREEN
// create a function that takes in an array, removes the first element, and returns the remaining elements shuffled
// input: an array of strings
// output: an array of those same strings with the first removed and the rest shuffled
// use .slice() to remove the item in the 0th index from the array by specifying a start point and only showing the elements from that starting position
// use .sort() along with Math.random() to shuffle the rest of the list

const shuffledColors = (arr) => {
  let newArr = arr.slice(1)
  return newArr.sort((a, b) => 0.5 - Math.random())
}
console.log(shuffledColors(colors1))
// output: [ 'pink', 'yellow', 'green', 'blue' ]
console.log(shuffledColors(colors2))
// output: [ 'indigo', 'periwinkle', 'ochre', 'saffron', 'aquamarine' ]

// note: I was able to come to the .sort() along with Math.random() method from researching online. This method makes sense to me-- rather than sorting from largest to smallest, it is taking the elements in order and sorting them based on a random index roll.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// RED
describe("endTally", () => {
  it("takes in an object of upvotes and downvotes and returns the end tally", () => {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})

// b) Create the function that makes the test pass.

// GREEN
// create a function that takes in an object containing upvote and downvote key value pairs and returns the end tally of the votes
// input: an object containing two key value pairs, where the key is 'upvote' and 'downvote' and the values are integers
// output: the end tally of the votes
// use Object.values() to turn the object values into an array
// use .reduce() to reduce those array values into their tallied form 

const endTally = (obj) => {
  let tally = Object.values(obj).reduce((a,b) => a - b)
  return tally
}

console.log(endTally(votes1))
// output: 11
console.log(endTally(votes2))
// output: -32

// Note: .reduce() is a new method for me, but it makes perfect sense. Similar to .sort(), .reduce() takes in a function and performs the action on an array. In this case, instead of sorting the array values, it reduces the items in the array to one stand-alone value after performing the action.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// RED
describe("noDuplicates", () => {
  it("takes in two arrays and returns one array with no duplicates", () => {
    expect(noDuplicates(combinedArrays)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

// GREEN
// create a function that takes in two arrays and returns one array with no duplicates
// input: two combined arrays
// output: one array with no duplicate values
// use .concat() to first combine the two arrays
// then use Set to automatically remove duplicates. 
let combinedArrays = dataArray1.concat(dataArray2)

const noDuplicates = () => {
  let combinedArrays = [...new Set([...dataArray1,...dataArray2])]
  return combinedArrays
}
console.log(noDuplicates(combinedArrays))
// output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// Note: I stumbled upon the 'new Set' method while researching ways to remove duplicates from a combined array. Originally I was going to use .filter() as I had seen used in another method, but after finding Set (which is a built in JS collector that does not support duplicate values), I was able to use that method and the stretch goal spread operator in the same breath.
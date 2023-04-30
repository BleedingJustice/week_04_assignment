
console.log(`Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.  
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed!
Question 1: Declaring Let and Const variables`)
  // pop will remove the last element "93"

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
  console.log(ages)
  ages.pop();
// console.log(ages.pop());

console.log(`1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`)
// the age 16 to the end of the array
console.log(ages)
  ages.push(16)
console.log(ages)

console.log("1c. Use a loop to iterate through the array and calculate the average age.")

let sum = 0
for (let i = 0; i < ages.length -1; i++) {
  sum += ages[i];
}
//use the () use first in caculation.
console.log(sum / (ages.length))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(`Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.`)

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names)

console.log("2a. Use a loop to iterate through the array and calculate the average number of letters per name.");
 
  // names.reduce(names.length / names)
  // set counter var to zero
  let = count = 0
  // loop through the array
  for (let i = 0; i < names.length; i++) {
    //add the number of letter is each name to count
    count += names[i].length; 
  }
  //print out thr count number of letters / the number of names
console.log(count/(names.length))

console.log("2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");

// starting out with a blank slate
let concat = ""
 
for (let i = 0; i < names.length; i++) {
  //this will adding the names to the concat string adding 1 space
  concat += names[i] +" ";
}
console.log(concat)

console.log("3. How do you access the last element of any array?  array.length -1")

console.log("4. How do you access the first element of any array?  array.length 0")

console.log("5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.")

//creating a new array called nameLength with blank
let nameLengths = []

//this will add the length of each name 
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length) 
}
console.log(nameLengths)


console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.")

//starting out with counter starting at zero
let counter = 0

//This will count all of the letters of all names
for (let i = 0; i < nameLengths.length; i++) {
  counter += nameLengths[i]; 
}
 console.log(counter)

 console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).")

 function repeatWord(word, n) {
  // idea is out temporary like sum concant
    let idea = ""
    // loop through # of times every loop adding word to idea
  for (let i = 1; i <= n; i++) {
      idea += word 
      
    }
    return idea
 }
console.log(repeatWord("Hello", 3))


console.log("8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.")

let fullName = "Eddie ";
fullName += "Davis";
console.log(fullName);

console.log("9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")

let item = [23, 19, 23, 64, 12, 81, 28, 93];

greater = item.every((item) => {
  return item => 100
})
console.log(greater)


console.log("10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.")

let avg = [23, 19, 23, 64, 12, 81, 28, 93];

function arrAvg(avg) {
  let total = 0;
    for(let i = 0; i < avg.length; i++) {
      total += avg[i];
    }
    return total / avg.length
}
console.log(arrAvg(avg))

console.log("11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.")

function greaterThan(arr1, arr2) {
    if (arrAvg(arr1) > arrAvg(arr2)) {
      return true
    }
    else{
      return false
    }
}
let a = [100,150,125]
let b = [13,25,61]
console.log(greaterThan(a,b))
console.log(greaterThan(b,a))
console.log(greaterThan(a,a))

console.log("12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.")

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket > 10.50) {
    return true
  }
  else {
    return false
  }
}
console.log(willBuyDrink(true, 15.00))
console.log(willBuyDrink(true, 8.00))
console.log(willBuyDrink(true, 10.50))
console.log(willBuyDrink(false, 20.00))

console.log("13.  Create a function of your own that solves a problem.") 

//too find if my band is better than your band in remembrance of my little bro

function battleOfBand(bandName) {
    if (bandName.toLowerCase() === "metallica") {
      return "sorry BK Bang Them Heads That Don't Bang RIP Cliff"
    }
    else {
      return "Knock Knock Time To Go Dave"
    }
}
console.log(battleOfBand("Metallica"))
console.log(battleOfBand("Megadeth"))
// console.log("In comments, write what the function does and why you created it.")
console.log("to tell everyone that likes Metallica, they are better than Megadeth. In remembrance to my little bro, since we would always debate this while he was alive, and it never got old, and I really miss that")



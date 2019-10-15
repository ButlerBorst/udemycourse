//Write a function that takes in a string and returns character counts.

//Simple examples and questions to be asked

charCount("aaaaa"); // {a: 5}
charCount("hello"); // {h:1, e:3, l:2, o:0}


// or would the output have all the letters of the alphabet and we're just incrementing each instance?
// {a: , b: , c: , d: , e: ...}


charCount("my phone number is 1232321!")

// can our input contain numbers?

charCount("Hello hi")
//are we storing uppercases?

charCount(""

//what is desired to be returned from an empty string: undefined, null, nan etc...

//interview // QUESTION:
// charCount('my PIN number is 12323!')
// no spaces or punctuation it doesn't count
// everything must be lowercased and it will return numbers

//make new object at beginning
//lowercase the whole string
//loop over the whole string
//if letter is a key in the object then increase the value by 1
//else add the key with a value of 1


//need to use regex for other character types
function charCount(string){
  let result = {};
  for(let i = 0; i < string.length; i++){
    let char = string[i].toLowerCase
    if(/[a-x0-9]/.test(char)){
    if(result[char] > 0){
      result[char] + 1
    }
    else {
      result[char] = 1
    }
   }
  }
  return result
}

// not sure if using the regular expression cost extra time or space
//could refactor to a for of style loops
// could also use a method charCodeAt()

function charCount(string){
  let result = {};
  for(const char of string){
    char = char.toLowerCase
    if(/[a-x0-9]/.test(char)){
    result[char] = ++result[char] || 1
   }
  }
  return result
}

//could use a helper function that usese charCodeAt and call the helper in the main

function charCount(string){
  var result = {};
  for(var char of string){
    if(alphanumericChar(char)){
      char = char.toLowerCase
      result[char] = ++result[char] || 1
   }
  }
  return result
}

function alphanumericChar(char){
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
  }
  return true;
};

function intersection(array1, array2){
    array1.filter(value => array2.includes(value))
}


// write a function that returns true if 1 array contains the squares of another array
// aka ([1,2,3], [4,9,1]) == true
// must be the same frequency


//this version is O^2 which is quadratic  relationship
//instead we will use a frequency counter and reduce the time  complexity to O(n)
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
      return false
    }
    console.log(arr2)
    arr2.splice(correctIndex, 1)
  }
  return true
}

// frequency counter example
//  2 loops  is vastly better than a nested loop
// also must faster to acccess the information if it's contained within and object
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  return true
}


//challenge problem using the frequency counter pattern to solve to see if an anagram is valid
// ex: ('cat', 'act') = true
//if the string object .includes the char of string 1 then it should return true

//solution not using a frequency counter but is pretty clever
//QuickSort appears to use a simple two-way partition so its time complexity can be described as Θ(n log(n)) in the average case. Quicksort's space complexity is O(log(n)). InsertionSort uses the usual nested for loop so its time complexity is O(n^2) and its space complexity is O(1) because it sorts the array in place.
// Might actually be a better solution?

function anagram(string1, string2){
  if(string1.length !== string2.length){
    return false
  }
  let string1Sort = string1.split("").sort().join("")
  let string2Sort = string2.split("").sort().join("")
    if(string1Sort == string2Sort){
      return true
  }
  }

  //solution using a frequency counter pattern

  function anagram(string1, string2){
    if(string1.length !== string2.length){
      return false
    }
    const lookUp = {}
    for(let i = 0; i < string1.length; i++){
      let letter = string1[i]

      // this line of code checks to see if the string contains the letter. If it does then we increase the value of that letter by 1. Otherwise we set the value to 1
      lookUp[string1] ? lookUp[string1] += 1 : lookUp[letter] = 1
    }
    for(let i = 0; i < string2.length; i++){
      let letter = string2[i]
      // if the letter doesnt exist or the letter is zero then there is no anagram presetn
      if(!lookUp[letter]){
        return false
      } else {
        lookUp[letter] -= 1
      }
    }
    return true
  }


  //given solution

  function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
  console.log(countNum1)
  console.log(countNum2)
  return true;
}

//We actually don't need to sort to check the frequency of digits. So i was wrong to think i needed top implement any sort of sort for this problem.

//returns this in the console
//{1: 1, 2: 1, 8: 1}


//basically a copy of the previous frequency counter example except at the beginning there changing the integer type. next were returning false if the two strings aren't the same length.

// we create two new objects to store data about the two strings digit frequency.

//3 seperate for loops to pick through the data. the first two are used to set the keys of both objects. and the third is to compare the keys between the two objects.




//Next example

//are there duplicates which accepts a variable number of arugments, and checks whether there are any duplicates among the arguments passed in. YHou can solce this using the frequency counter pattern OR the mutiple pointers pattern.

//areThereDuplicates(1, 2, 3) false
//areThereDuplicates(1, 2, 2) true
//areThereDuplicates('a', 'b', 'c', 'b') true

//we could implement almost identical code to the last problems and do a conditional at the end that checks if any key has a value greater than 1

function areThereDuplicates(arguments){
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false
}

//previous multiple pointer example
//function countUniqueValues(arr){
  //could put a quick check at the beginnning
  //if(arr === 0){
  //return 0
//}
  // let i = 0
  // for(let j = 1; j < arr.length; j ++){
  //   if(arr[i] !== arr[j]){
  //     i++
  //     arr[i] = arr[j]
  //   }
  // }
  // return i + 1
  //this accounts for the first number being a unique number on its own
  //however this doesn't account for the array being empty
}
// how to solve with the multiple pointers solution

function areThereDuplicatesUsingMutliplePointers(args){
  args.sort((a,b) => a > b);
  let start = 0
  let next = 1
  while(next < args.length){
    if(args[start] === args[next]){
      return true
    }
    start ++
    next ++
  }
  return false
}

//this is super simply just creating two pointers 1 index apart and incrementing the pointers in the loop and checking to see if they are equal to one another

function oneLinerSolution(args){
  return new Set(args).size !== args.length
}

//this is pretty legit because new Set will not include duplicates. So if there are duplicated the size of the Set structure will be less than the length of the arguments themselves.

//Write a function called averagePair. Given a sorted array of integers and a target average, determine if ther eis a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//using a multiple pointers method we could create two counters. the first one doesnt increment till all the logic of j has been met.
//increase j within the loop
//increase i outside of the loop

function averagePair(arr, num){
  let start = 0
  let next = 1
  while(next < arr.length){
    if((arr[start] + arr[next])/2 = num){
      return true
    }
    next ++
    else {
      start ++
    }
return false
}
}

//was actually done using a pointer at the beginning and a pointer at the end
//also is assuming the array of numbers is already ordered which i forgot before trying to solve the problem

function averagePair(arr, num){
  let start = 0
  let end = arr.length - 1
  while(start < end){
    let avg = (arr[start] + arr[end]) / 2
    if(avg === num) return true
    else if(avg < num) start ++
    else end --
  }
  return false
}

//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string from a subsequence of the character in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2){
  let i = 0
  let j = 0
  if(!str1) return true
  while(j < str2.length){
    if(str2[j] === str1[i]) i ++
    if(i === str1.length) return true
    j++
  }
  return false
}

//pretty clever to use i as the counter for the sequence. and because the subSequence has to be in order we know that the length of the sub (str1) needs to equal i

//how to solve recursively?

function isSubsequence(str1, str2){
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0] return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}

//super genius because str 1's length will be zero at some point if the function gets run recursively over and over or return false.

//if the two letters are equal we rerun the function one step up
//if they are equal we restart the equation one step up

// if they arent equal we need to restart the equation with only str 2 one step up to check again whether there is a sequence.

//Sliding Window

//given an array of integeres and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//Note that a subarray must consist of consecutive elements from the orinal array. in the first example [100, 200, 300] is a sub array of the original but [100, 300] is not.

// previous example used

function maxSubarraySum(arr, num){
  let maxSum = 0
  let tempSum = 0
  if(arr.length < num){
    return null
  }
  // the first loop is setting maxSum to the first window sum which is determined by the num arguement
  for(let i = 0; i < num; i++){
    maxSum += arr[i]
  }
  tempSum = maxSum
  // the next for loop is running till the last window which is being dictated by the conditions  withtin the for loop. by setting i = num we stop the loop short when the window reaches the end of the array length.
  for(let i = num; i < arr.length; i ++){
    tempSum = tempSun - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
    //this line above is just updating the max if it is in fact larger. using math .max is an easy way. you could also do an if statement like the previous example to check if (tempSum > maxSum)
  }
  return maxSum
}

// write a function called minSubArrayLen which  accepts two parameters-  an array of integers and a positive integers.

//This function should return the minimal length of a contiguoius subarray of which the sum is greater than or eqaul to the integer passed to the function. if there isn't one return 0.
//Write a function called same frequency. Given two positive integers find out if the two numbers have the same frequency of digits.
//run time must be O(n) so no nested for loops

//Sample input:
// sameFrequency(128, 812) this is true

//What i'd like to do is sort both numbers and check to see if they are equal. If they are equal return true otherewise return false.

//example frequency counter. NOT solution
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



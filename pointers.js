// MULTIPLE POINTERS

//creating pointers or values that correspond to an index or position and move towards the beginnning, end , or middle based on a certain condition.

// Very  efficient for solving problems with minimal space complexity as well

// first example

// write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn't exist

// example that has time complexity of On^2 and space complexity of - 0(1)

function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return (arr[i], arr[j])
      }
    }
  }
}

//because the array is sorted with the smallest number in index 0 and the largest number at the end of the array we can use the multiple pointers pattern

//refactored solution in O(n)
// O(1)

function sumZero(arr){
  let left = 0
  let right = arr.length - 1
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return(arr[left], arr[right])
    }
  } else if(sum > 0){
    right --
  } else{
    left ++
  }
  }
}



//implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//intended start: start one pointer at the start and another at start plus 1. if they are equal then we increment j. j will move until they are different. i will now increment by 1 and be replaced by the number j is now.


function countUniqueValues(arr){
  let i = 1
  let j = 1
  while(i < arr.length){
    if(i = j){
      j ++
    }
    else {
      i ++
  }
  return i
}
}

//might be on the right track
//given solution is below

function countUniqueValues(arr){
  //could put a quick check at the beginnning
  //if(arr === 0){
  //return 0
//}
  let i = 0
  for(let j = 1; j < arr.length; j ++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
  //this accounts for the first number being a unique number on its own
  //however this doesn't account for the array being empty
}

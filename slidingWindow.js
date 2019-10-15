//Sliding Window pattern
// this pattern involves creating a window which can  either be an array or number from one position to another

//Depending on a certain condition,  the window either increases  or closes (and  a new window is created)

//Very useful for keeping track of a subset of data in an array/stringetc.


//examples
// Write a function called max sub array sum which accepts an array of intergers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
//  set a variable equal to the sum of the window. if the next window of n is larger than the previous windows sum then set that variable equal to the new sum and continue
maxSubarraySum([1,2,3,2,8,1,5], 2)

//this approach is O(n^2)
function maxSubarraySum(arr, num){
  if(num > arr.length){
    return null
  }
  //if the num given is larger than the array lenght then there is nothing to actually check.
  const max = -Infinity;
  for(let i = 0; i < arr.length - num + 1; i ++){
    // we use this condition on for loops run time to account for the size of the window we are looking at to find the largest sum.
    let temp = 0
    for(let j = 0; j < num; j  ++){
      if(temp >  max){
        max = temp
      }
      // because on even the first time through temp will be greater than negative infinity temp and max will be reset to the sum of the first window. then the comparison between the next window and the first takes place.
    }
    return max
  }
}

//here is the refactored version with complexity of O(N)

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

//sliding window is a tricky way of instead of resumming the next window by using the other for loop in the previous example. We just subtract the first value of the window and add the next index above and then do a quick comparison

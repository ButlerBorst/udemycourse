//summing of an array from 1 - // NOTE:
// runtime is just O(n)
function addUpOne(n){
  let total = 0;
  for(let i = 0; i < n.length; i++){
  total += i
}
return total
}

//space complexity is 0(1) which is determined by the two declared variables total and i

//uses n number of operations to complete the algo. So if the number is 1000000 then we perform that many simple operations which in turn makes it slower

//runtime is O(1)
function addUpTwo(n){
  return n * (n+1)/2
}

//will always just perform three simple operations no matter the size of n.

//how to check for performance
// basically t1 is the start time of the program and t2 is the end time of the program which is in milliseconds so we divide by 1000 to get it in seconds
let t1 = performance.now()
addUpOne(1000000000)
let t2 = performance.now()
console.log(`The time elapsed ${(t1-t1)/10000)} seconds`
// logs 1.25 ish seconds


let t1 = performance.now()
addUpTwo(1000000000)
let t2 = performance.now()
console.log(`The time elapsed ${(t1-t1)/10000)} seconds`
// logs .0000001 seconds much faster
//


// is Big O Linear, Quadratic, Constant, or  something completely different


// nested for loops creates a runtime O(n^2)
function printingAllPairs(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(i, j)
    }
  }
}



//example to show a for loop that isn't O(n) but instead is O(1)
function logAtMostFive(n){
  for(let i = 0; i < Math.min(5, n); i++){
    console.log(i)
  }
}
//Math.min prevents the loop from being linear and instead stay at a constant

//space complexity example: doubling an arrays inputs
//takes up O(n) in space complexity because it's linearly proportional to the array length

function doubleSize(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i])
  }
  return newArr
}

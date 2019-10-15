function fizzBuzz(arr){
  if(arr.length === 0) return null

  for(let i = 0; i < arr.length; i ++){
    if(arr[i] % 5 === 0 && arr[i] % 3 ===  0){
      console.log('FizzBuzz')
    } else if(arr[i] % 5 === 0){
      console.log('Fizz')
    } else if(arr[i] % 3 === 0){
      console.log('Buzz')

    }
  }
}

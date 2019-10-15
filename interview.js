//dom manipulation. including css.
//data structures and algorithims
//cross browser platform testings.polyfill
//testing react with jest.



// create a list of buttons and one image. each button will have a corresponding image url that will populate the image tag

<div id="animals">
    <button>Dog</button>
    <button>Cat</button>
    <button>Goat</button>
    <button>Cow</button>
</div>

<div>
    <img id="animalImg" src="bird.jpg" alt="Animal image"/>
</div>

const AllButtons = document.getElementbyId('animals')

AllButtons.addEventListener('click', function(event) {
    if(event.target.type === 'button') {
      let animalName = event.target.innerText.toLowerCase()
      let imgTag = document.getElementbyId('animalImg')
      imgTag.src = animalName + '.jpg';

      // now remove the button from the DOM
      let removeButton = event.target.remove();

      let newSpan = document.createElement("span");
      newSpan.innerHTML = `The ${animalName} was removed from the DOM`;

      AllButtons.appendChild(newSpan);
    }
    return;
});


//following along with a youtube interview

//Can you explain the https handshake what happens between the client and the server?

//Request response protocal. Client-server type model. Web browser makes a request as http. Server returns response based on the code. Could return an html page. some json etc.

//CORS Policy

//a policy or procedure for allowing the servers to respond with your. prevents your website from sharing resources with another endpoint. 

//this keyword: is bound to the context of the function or class its defined in. can be binded sometimes not as expected if it's outside the block or function scope. 

//explain a closure: create a functional scope that contains it's own function. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

//Closures are composed with two environments: the inner and outer. The inner environment is where new, local variables are defined. The outer environment is where variables live that existed during the creation of the closure itself.

//issues that arise in closures:  closures cannot have access to the outer function's this keyword without some hacking. The quick and classical fix to this problem simply involves aliasing the object to a local variable of the outer environment instead.

//prototypes in javascript:

//== vs === 
//== just compares the value not the type === also evaluates type

// what is use strict: the code written inside eliminates the this cohersion. This can be cohersed to be value 

//NaN not a number: certain data types cannot be converted to number.  How to test to see if a value is equal to NaN: the type of NaN is a literal string. 

//define a promise in javascript. is a could way to provide clear asynchronous code. 

//what is callback hell. to many callbacks functions layered within one another. using promise can help callback hell. using generator function to write synchronous code. using the wait operator is a possibilities

//promise online definition:

//A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

//A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
// // A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

//node.js is a single threaded process?

//what is the typical first argumemt passed to a node.js callback handler? 

//its not as easy to catch exceptions by the main processes. by putting error first it's telling the developer there is a chance theirs an error withinthe module. 

//coding questions

//check to see if a string is a palindrome

//assume the value passed in is always a string.

function isPalindrome(string){
    let reverse = string.split("").reverse().join('');
    if(string === reverse) return true
    else return false
}

//count the number of occurences of a certain character within a string 

function numOfChars(char, string){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] === char){
            count ++
        }
    }
    return console.log(`${char}: ${count}`)
}

//exactly one number in a array is a duplcate. find the duplicate in the array

function findTheDuplicate(array){
    let obj = {}
    for(let i = 0; i < array.length; i++){
        if(!obj[array[i]]){
            obj[array[i]] = 1
        }
    } else {
        return array[i]
    }
}


//jiojijifa;w;;woijijijijoifa fjfijiejfiajeifjaeifjaewiofjwef

//jjjj   jjjj  jjjejfe
//jiejfef a;ij;jtijton


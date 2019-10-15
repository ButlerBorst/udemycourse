## Why does React need a root element?

//since react is all javascript it needs an element where it can render out its own DOM tree.
//JSX is a domain specific language

//the difference between state and prop.

//state: storing information internally/locally
//could be used to store a field value or toggling check boxes or info to be carried to another component

//props: is what is being passed to the component from the parent element.  Most  commonly used data in react

//What is Context?
//is like a global prop
//should only be used on something that is going to be everywhere throughout the application. Perhaps for translating text or something like that.

//What are the prop types and what are the benefits and drawbcks of them?

// -is a way for you to know what types a component is expecting

// - can become a problem when they become legacy documentation and forget to update them. Using .required on the wrong things  and .object instead of .shapeOf

//Which life cycle event is the most common  from your prespective?

//componentWillMount and componentDidMount
// maybe componentWillReceiveProps.

//When do you use a pure component versus and class component?

// - you would uses pure components when you want to optimise for performance
//- there is no reason to use a class component if your are not storing state  or a life cycle events.

//How does the React rendering work?
// - React listens for DOM updates and rerenders the  DOM  tree on every change

//-but it can do this very quickly because it uses component diffing which means that REACT checks if there ahs been a change to the component and only rerenders it if there is one.

//What is Redux?
//used as a cloud for REACT. Can store state for modification later. Can make it easier/faster to grab information from within the app.

//- it is built on the pub/sub pattern or Flux. You store state in a big object and use actions to change that state.


//Explain how Redux works in your own terms
//  - you declare a reducer that takes in an action and a state, when you dispatch an action the state gets updated an rerenders the DOM.

//When do use Redux?
//- you need some global state that is shared among differemt components
// - can be overkill on some smaller projects.

//What is a container component?
// - is a popular way to seperate the JSX from the logic of the component
// - only use is when component is doing more than showing some information or passing things to the view.

//What is a View component
// - is the 'dumb' part of a component where you simply put the passed in props or local state in to the jsx. The view is now seperated from the logic and some people will argue that it makes the view component reusable which can be rarely true.

//What components make for a good container candidate?
//- almost all components except for those that have no logic
// -the cost of the container can be greater that not using a container. could be an 'extra' step.

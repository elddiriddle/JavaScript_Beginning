// FUNCTIONS:

// keyword identifier(perameters){ <--open function body with '{'
//   function body b/t {} - do something = calulation, logic...
// } <--close function body with }
function getReminder(){ // declaration of a function is bound to its identifier or name
    console.log('Feed the dog') // body of the function between { }
}

//>>>>>>> Calling a Function <<<<<<<<<<<<<<<<<--------------------------+
function getTakeOutTheTrash(){
    console.log('Trash goes out on Tuesday');//<<---- use simicolon at end of line;
}
getTakeOutTheTrash(); //<<---- calling the function... identifier()


//>>>>>>> Parameters and Arguments <<<<<<<---------------------------------------+
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
sayThanks('Alley');


//>>>>>>> Default Parameters <<<<<<<----------------------------------------------+
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)














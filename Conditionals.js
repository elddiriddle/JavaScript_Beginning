// CONDITIONALS: 

// >>>>> if...Else Statements <<<<<<<------------------------+
if (True) {
    console.log('We should get a cat');
}  else {
    console.log('We should not get a cat');
}
// Prints: We should get a cat

// ====== another example =========

let catFoodOnSale = true;
catFoodOnSale = false;

if (catFoodOnSale) {
    console.log('Time to buy!');
} else {
    console.log("It's time to wait for a sale!"); // use ".." because of the appostofie in It's
}
// Prints: It's time to wait for a sale!

// >>>>>>>> Comparison Operators <<<<<<< --------------------+

let catMeowLevel = 9   // how loud the cat is when hungry. this will change the output.
if (catMeowLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('You can wait to eat')
}
// Prints: Time to eat!

// ====== another example =========

let cleanCatBox = 'full'
if (cleanCatBox === 'full') {
    console.log("It's time to clean the cat box");
} else {
    console.log('Clean it later');
}

// >>>>>>> Logical Operators <<<<<< --------------------------+
// the and operator (&&) ::: both conditions must be true for the whole condition to be true

let catMood = 'sleepy';
let playfulnessLevel = 6;
if (catMood === 'sleepy' && playfulnessLevel < 5 ) {
    console.log ('time to sleep');
} else {
    console.log('not bed time yet');
}
  






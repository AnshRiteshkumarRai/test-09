console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

//ANSH RITESHKUMAR RAI  
// STUDENT NUMBER:-200522153


// Step 2: Create a block scoped, immutable variable that stores an empty array

const myname1 = [];

// Step 3: Add the 3 people's names to the array
const myname2 = ["ansh","utsav","naimil"];

// Step 4: Remove the second array item from the array
Array.slice(1,1)
// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable

const uppercased = myname2.map(name=> name.toUpperCase);

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";

const image= document.querySelector('h2');

image.addEventListener("click", function(){
    console.log("img was click");
    alert("img was clicked");
});
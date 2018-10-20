      //Set global variables so they can be set later
      let   userInput       = document.querySelector('#userInput'),
      result          = document.querySelector('#result'),
      kButton         = document.querySelector('#kButton'),
      steps           = document.querySelector('#steps'),
      output          = document.querySelector('.output'),
      diferences      = "",
      smallNum        = "",
      largeNum        = "",
      smallest        = "",
      largest         = "";

 //Function for Kaprekar's constant computation
function kConstant(num) {

      //Turn integer into array of integers so that it may be sorted
      let numArray = (num).toString().split("");
      //Sort the array into descending order
      let largeArray = numArray.sort(function(a,b){
        return b - a;
      });
      //Sort the array into ascending order
      //creates a copy of the array so as to not alter the descending one
      let smallArray = numArray.slice().sort(function(a,b){
        return a - b;
      });
      //turn the arrays into strings and turn those strings to integers
      largeNum    = parseInt(largeArray.join(''));
      smallNum    = parseInt(smallArray.join(''));
      //calculate the diferenceserence between the numbers
      diferences  = largeNum - smallNum;
      //Return the diferences so that it may be used in function again if necessary
      return diferences;
  }
    //Button click sets it all off!
kButton.addEventListener("click", function(){
      let unique = userInput.value.toString().split("");
      if(userInput.value  === '' || (userInput.value  + '').length <4 || typeof Number(userInput.value ) !== 'number' || isNaN(userInput.value) || !uniqueValues(unique)){
        alert(`Please enter a four digits, digits must be a number and non-identical number also letters are not allowed `);
        return; 

        // check for duplicate
      }
    //Remove the output div from the previous calculation
  output.innerText  = "";
  let counter       = 1;
      diferences    = 0;
    //get the integer from the input box
      userInput     = userInput.value;
    //Run the function with the user input and turn it to number
      kConstant(Number(userInput));
    //Append the calculation to the page to show the progress of the function
      output.innerHTML += (largeNum + " - " + smallNum + " = " + diferences + "<br>");
    //Check that the constant hasn't been reach and continue to run the function
  while (diferences !== 6174 ){
       //Run the function again with the number it previously output with the difference
       kConstant(diferences);
       //Increment the counter
       counter++;
       //Append the subsquent calculations that occur during the while loop after the initial call of the function
       output.innerHTML += (largeNum + " - " + smallNum + " = " + diferences + "<br>");

      } 
        //display the output div after the function has run once
        result.style.display = 'block';
        // Insert the final counter number to show how many times the iteration ran
        steps.innerText = counter;  
})  

// function to remove unique values
function uniqueValues(arr) {
let i = 0;
for(let j = 1; j < arr.length; j++){
  if (arr[i] === arr[j]) {
    return;
  }else {
    i++;
    arr[i] = arr[j]
  }
}
return true;
}


    //Button function to clear
function Clear() {
  userInput = document.querySelector('#userInput'),
  userInput.value       = '';
  output.innerHTML      = '';
  result.style.display  = 'none';
}
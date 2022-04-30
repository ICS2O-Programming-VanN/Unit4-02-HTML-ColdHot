// This file contains the JS functions for index.html

'use strict';
/**
 * This function checks the temperature entered by the user and outputs back whether it was hot or cold out
 */
function judge() {
  // Constants
  const TEMP_BOUNDARY = 15;
  const SUPERNOVA = 1000000000000
  
  // Variables
  let celsius = parseFloat(document.getElementById('celsius').value) // Makes variable an integer

  // Output messages if the user got it or not
  let message = ""

  // IF statement, if the user entered a temperature higher than the temperature boundary but less than a supernova
  if (celsius >= TEMP_BOUNDARY && celsius < SUPERNOVA) {
    message = "It is rather hot out!"
    // If the user entered a temperature lower than the temperature boundary
  } else if (celsius < TEMP_BOUNDARY) {
    message = "It is rather cold out."
    // The user must have entered a temperature higher than that of a supernova...
  } else {
    message = "Something is not quite right...Either the Earth is on fire or you're a liar"
  }

  // Outputs back how the temperature is based off input and FIf..ElseIf..Else Statement
  document.getElementById('hot-or-cold').innerHTML = message
}
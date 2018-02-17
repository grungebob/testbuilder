// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //Diner's Club Conditional
  if (cardNumber[0] === '3' && cardNumber[1] === '8' && cardNumber.length === 14){
  	return "Diner's Club";
  } else if (cardNumber[0] === '3' && cardNumber[1] === '9' && cardNumber.length === 14){
  	return "Diner's Club";
  }

  //AmEx Conditionals
  if (cardNumber[0] === '3' && cardNumber[1] === '4' && cardNumber.length === 15){
  	return 'American Express';
  } else if (cardNumber[0] === '3' && cardNumber[1] === '7' && cardNumber.length === 15){
  	return 'American Express';
  } 

  //MasterCard Conditionals:
   if (cardNumber.length === 16){
    if (cardNumber[0] + cardNumber[1] === '51' || cardNumber[0] + cardNumber[1] === '52' || cardNumber[0] + cardNumber[1] === '53' || cardNumber[0] + cardNumber[1] === '54' || cardNumber[0] + cardNumber[1] === '55'){
      return 'MasterCard';
    } 
  }

  //Discover Conditionals:
  if (cardNumber.length === 16 || cardNumber.length === 19){
    if (cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '6011'){
      return 'Discover';
    } else if (cardNumber[0] + cardNumber[1] == '65'){
      return 'Discover';
    } else if (parseInt(cardNumber.slice(0, 3)) >= 644 && parseInt(cardNumber.slice(0, 3)) <= 649){
      return 'Discover';
    }
  }

  //Maestro Conditionals:
  if (cardNumber.length >= 12 && cardNumber.length <= 19){
    if (cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '5018'){
      return 'Maestro';
    } else if (cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '5020'){
      return 'Maestro';
    } else if (cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '5038'){
      return 'Maestro';
    } else if (cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '6304'){
      return 'Maestro';
    }
  }

  //Switch and Visa seem to have some overlapping card numbers, you should choose the network with the longer prefix.

  // Switch Conditionals:
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  if (cardNumber.slice(0, 4) === '4903' || cardNumber.slice(0, 4) === '4905' || cardNumber.slice(0, 4) === '4911' || cardNumber.slice(0, 4) === '4936') {
    if (cardNumber.length === 16 || cardNumber.length === 18  || cardNumber.length === 19){
      return 'Switch';
    }
  } else if (cardNumber.slice(0, 6) === '564182' || cardNumber.slice(0, 6) === '633110' || cardNumber.slice(0, 4) === '6333' || cardNumber.slice(0, 4) === '6759'){
      if (cardNumber.length === 16 || cardNumber.length === 18  || cardNumber.length === 19){
        return 'Switch';
      }   
}

  // Visa Conditionals
   if (cardNumber[0] === '4' && cardNumber.length === 13){
    return 'Visa';
  }  else if (cardNumber[0] === '4' && cardNumber.length === 16){
    if (cardNumber.slice(0, 4) === '4903'|| cardNumber.slice(0, 4) === '4905' || cardNumber.slice(0, 4) === '4911' || cardNumber.slice(0, 4) === '4936') {
      return 'Switch';
    } else {
      return 'Visa';
    }
  }  else if (cardNumber[0] === '4' && cardNumber.length === 19){
    if (cardNumber.slice(0, 4) === '4903' && cardNumber.slice(0, 4) === '4905' && cardNumber.slice(0, 4) === '4911' && cardNumber.slice(0, 4) === '4936') {
      return 'Switch';
    } else {
      return 'Visa';
    }
  }



  
  //China UnionPay Conditionals: prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19

  if (cardNumber.length >= 16 && cardNumber.length <= 19){
    if (parseInt(cardNumber.slice(0,6)) >= 622126 && parseInt(cardNumber.slice(0,6)) <= 622925){
        return 'China UnionPay';
      }
     else if (parseInt(cardNumber.slice(0,3)) >= 624 && parseInt(cardNumber.slice(0,3)) <= 626){
        return 'China UnionPay';
      }
     else if (parseInt(cardNumber.slice(0,4)) >= 6282 && parseInt(cardNumber.slice(0,4)) <= 6288){
        return 'China UnionPay';
      }
  
}


  // Failing all conditionals
  else {
    return 'Card not found.';
  }

};



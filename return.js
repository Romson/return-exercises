//isEven
function isEven(num) {
    if(num % 2 != 0) {
        return false;
    } else {
        return true;
    }
}
isEven(20);

//Factorial (for loop)
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num; 
}
factorial(5);

//Factorial (while loop)
function factorial(num) {
	var result = num;
	if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }	 
	return result; 
}
factorial(5);

//Factorial (recursion)
function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num === 0 || num === 1) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
  factorial(5);

  //Replace kebab-to_Snake_case
  function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}
kebabToSnake("Replace-kebab-to-Snake-case");
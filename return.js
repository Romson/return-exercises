//isEven
function isEven(num) {
    return num % 2 === 0;
}
isEven(20);

//isEven if/else
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven(20);

//Factorial (for loop i++)
function factorial(num) {
	var result = 1;    
	for (i = 2; i <= num; i++) {
        result *= i;
    }
    return result; 
}
factorial(5);

//Factorial (for loop i--)
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

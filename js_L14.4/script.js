function squaredNumbers1(number1, number2) {
    const squaredNumber1 = Math.pow(number1, 2);
    const squaredNumber2 = Math.pow(number2, 2);
    const addedNumbers = (squaredNumber1 + squaredNumber2);
    const outcome = Math.pow(addedNumbers, 2);
    return outcome;
};

console.log(squaredNumbers1(9, 33));

const squaredNumbers2 = function(number1, number2) {
    const squaredNumber1 = Math.pow(number1, 2);
    const squaredNumber2 = Math.pow(number2, 2);
    const addedNumbers = (squaredNumber1 + squaredNumber2);
    const outcome = Math.pow(addedNumbers, 2);
    return outcome;  
};

console.log(squaredNumbers2(9, 33));

const squaredNumbers3 = (number1, number2) => {
    const squaredNumber1 = Math.pow(number1, 2);
    const squaredNumber2 = Math.pow(number2, 2);
    const addedNumbers = (squaredNumber1 + squaredNumber2);
    const outcome = Math.pow(addedNumbers, 2);
    return outcome;  
};

console.log(squaredNumbers3(9, 33));
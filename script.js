// psuedocode:
// 1. pressing C clears and restarts the screen
// 2. pressing any of the digits before an operator concats them into a NUMBER. --> DONE
// 2.b -> a press on the point makes it a decimal but can only be pressed once per "number"
// 3. operator chooses which function we run --> DONE
// 4. second number added the same as step 2 --> DONE
// 5. Either a press on the "equal" to display the mathemtical result (--> DONE) OR a press on another operator, also calculates.
// 6. Unless the C is pressed, that calculated number is the new sum (so if we had 2+2 and then we press "x", it's going to be like we're multiplying a "4")

const screen = document.querySelector(".screen");
const field = document.querySelector(".data");

let operatorClicked = false
let numA = "";
let numB = "";
let operatorType = undefined;
let isCalc = false;
let decimalClicked = false;


const numButtons = document.querySelectorAll(".numBtn")
const decimalPoint = document.querySelector("#decimal")

decimalPoint.addEventListener("click", (e) => {
    if (decimalClicked == false) {
        field.textContent += e.target.textContent;
        decimalClicked = true;
    }
});

for (let i=0; i < numButtons.length; i++) {
    numButtons[i].addEventListener ("click", (e) => {
        console.log(isCalc);
        if (operatorClicked == false) {
            if (isCalc == true) {
                numA = "";
                numA = e.target.textContent;
                field.textContent = numA;
                numB = "";
                operatorType = undefined;
                operatorClicked = false;
                isCalc = false;
                decimalClicked = false;
            } else {
            numA = field.textContent += e.target.textContent;}}
        else {
            numB = field.textContent += e.target.textContent;
        } }) };

const operatorBtn = document.querySelectorAll(".opBtn")

for (let i=0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener ("click", (e) =>{
    if (numB !== "") {
        numA = operate(Number(numA), Number(numB), operatorType);
        numB = "";
        decimalClicked = false;
    }
    operatorClicked = true;
    operatorType = e.target.textContent;
    field.textContent = "";
})
}

function add (a, b) {
    return a + b;
}

function deduce (a, b) {
    return a - b;
}

function divide (a, b) {
    return a / b;
}

function multiply (a, b) {
    return a * b;
}

// operate Function

function operate(a, b, c) {
    if (c == "+") {
        return add(a,b);
    } else if (c == "-") {
        return deduce(a,b);
    } else if (c == "/") {
        return divide(a,b);
    } else {
        return multiply(a,b);
    }
}

// EQUALS button
const calculate = document.querySelector("#equal");

calculate.addEventListener("click", (e) => {
    console.log(numA, numB, operatorType);
    isCalc = true;
    field.textContent = operate(Number(numA), Number(numB), operatorType);
    numA = field.textContent
    operatorClicked = false;
    decimalClicked = false;
});


// CLEAR button
const clrBtn = document.querySelector("#clear")

clrBtn.addEventListener("click", (e) => {
    field.textContent = "";
    numA = "";
    numB = "";
    operatorClicked = false;
    operatorType = undefined;
    isCalc = false;
});

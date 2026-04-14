// psuedocode:
// 1. pressing C clears and restarts the screen
// 2. pressing any of the digits before an operator concats them into a NUMBER.
// 2.b -> a press on the point makes it a decimal but can only be pressed once per "number"
// 3. operator chooses which function we run
// 4. second number added the same as step 2
// 5. Either a press on the "equal" to display the mathemtical result OR a press on another operator, also calculates.
// 6. Unless the C is pressed, that calculated number is the new sum (so if we had 2+2 and then we press "x", it's going to be like we're multiplying a "4")

const screen = document.querySelector(".screen");
const field = document.querySelector(".data");

let operatorClicked = false
let numA = 0;
let numB = 0;
let operatorType = undefined;


const numButtons = document.querySelectorAll(".numButtons button")

for (let i=0; i < numButtons.length; i++) {
    numButtons[i].addEventListener ("click", (e) => {
        if (operatorClicked == false) {
            numA = field.textContent += e.target.textContent;}
        else {
            numB = field.textContent += e.target.textContent;
        } }) };

const operatorBtn = document.querySelectorAll(".operators button")

for (let i=0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener ("click", (e) =>{
        operatorClicked = true;
        operatorType = e.target.textContent;
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

const calculate = document.querySelector("#equal");

calculate.addEventListener("click", (e) =>{
    if (operatorType == "+") {
        field.textContent = add(numA, numB);
    } else if (operatorType == "-") {
        field.textContent = deduce(numA, numB);
    } else if (operatorType == "/") {
        field.textContent = divide(numA, numB);
    } else {
        field.textContent = multiply(numA, numB)
    }
});

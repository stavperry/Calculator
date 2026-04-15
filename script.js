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
    if (numB !== "") {
        numA = operate(Number(numA), Number(numB), operatorType);
        numB = "";
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
    field.textContent = operate(Number(numA), Number(numB), operatorType);
});


// CLEAR button
const clrBtn = document.querySelector("#clear")

clrBtn.addEventListener("click", (e) => {
    field.textContent = "";
    numA = "";
    numB = "";
    operatorClicked = false;
    operatorType = undefined;
});

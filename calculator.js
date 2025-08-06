function add(num1, num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let result = eval(num1) + eval(num2);
    document.getElementById("result").innerHTML = result
}

function subtract(num1, num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let result = eval(num1) - eval(num2);
    document.getElementById("result").innerHTML = result
}

function multiply(num1, num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let result = eval(num1) * eval(num2);
    document.getElementById("result").innerHTML = result
}

function divide(num1, num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let result = eval(num1) / eval(num2);
    document.getElementById("result").innerHTML = result
}

function power(num1, num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let result = eval(num1) ** eval(num2);
    document.getElementById("result").innerHTML = result
}

let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let powerBtn = document.getElementById("power")

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
powerBtn.addEventListener("click", power);
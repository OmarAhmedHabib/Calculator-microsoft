
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
function myFunction() {
    var element = document.getElementById("spinner");
    element.classList.toggle("dark-mode");

 }
 let currentInput = "0";
let isResultDisplayed = false; // للتحقق إذا كان هناك نتيجة معروضة

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentInput;
}

function appendToDisplay(number) {
  if (isResultDisplayed) {
    // إذا كانت النتيجة معروضة وبدأ المستخدم كتابة رقم جديد
    currentInput = number;
    isResultDisplayed = false;
  } else {
    if (currentInput === "0") {
      currentInput = number;
    } else {
      currentInput += number;
    }
  }
  updateDisplay();
}

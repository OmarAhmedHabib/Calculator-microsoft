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
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
    updateDisplay();
}

function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
    updateDisplay();
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
    updateDisplay();
}
// وظيفة النسبة المئوية
function calculatePercent() {
  if (!isNaN(currentInput)) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    isResultDisplayed = true;
    updateDisplay();
}
}
/*the dark mode thema */
function white() {
    var element = document.getElementById("spinner");
    element.classList.toggle("white");

 }
function black() {
    var element = document.getElementById("spinner");
    element.classList.toggle("black");

 }
function orange() {
    var element = document.getElementById("spinner");
    element.classList.toggle("orange");

 }
function cyan() {
    var element = document.getElementById("spinner");
    element.classList.toggle("cyan");

 }
function chegecolor(){
  var color = getElementById("colorselct")
  document.body.style.background = color
}


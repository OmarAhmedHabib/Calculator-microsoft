let currentInput = "0";
let isResultDisplayed = false; // للتحقق إذا كان هناك نتيجة معروضة

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = currentInput;
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

function clearDisplay() {
  currentInput = "0";
  isResultDisplayed = false;
  updateDisplay();
}

function deleteLast() {
  if (!isResultDisplayed) {
    currentInput = currentInput.slice(0, -1) || "0";
    updateDisplay();
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString(); // احسب النتيجة
    isResultDisplayed = true;
  } catch (e) {
    currentInput = "Error";
    isResultDisplayed = true;
  }
  updateDisplay();
}


function calculatePercent() {
  try {
    // إذا كانت النسبة المئوية جزءًا من معادلة
    if (currentInput.includes("%")) {
      currentInput = currentInput.replace(/([0-9.]+)%/g, (_, number) => (parseFloat(number) / 100).toString());
      currentInput = eval(currentInput).toString();
    } else {
      // إذا كانت النسبة المئوية مجرد رقم
      currentInput = (parseFloat(currentInput) / 100).toString();
    }
    isResultDisplayed = true;
    updateDisplay();
  } catch (e) {
    currentInput = "Error";
    isResultDisplayed = true;
    updateDisplay();
  }
}

// إعادة ضبط الألوان وتطبيق اللون الجديد
function resetColors() {
  const body = document.body;
  body.classList.remove("white", "black", "orange", "cyan");
}

function changeColor(colorClass) {
  resetColors();
  document.body.classList.add(colorClass);
}
function calculateSquare() {
  try {
    currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
    isResultDisplayed = true;
    updateDisplay();
  } catch (e) {
    currentInput = "Error";
    isResultDisplayed = true;
    updateDisplay();
  }
}
function calculatePower() {
  try {
    if (currentInput.includes("^")) {
      let parts = currentInput.split("^");
      currentInput = (Math.pow(parseFloat(parts[0]), parseFloat(parts[1]))).toString();
      isResultDisplayed = true;
      updateDisplay();
    }
  } catch (e) {
    currentInput = "Error";
    isResultDisplayed = true;
    updateDisplay();
  }
}



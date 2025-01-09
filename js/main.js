
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
    var element = document.getElementById("contenir");
    element.classList.toggle("dark-mode");
    element1.classList.toggle("dark-mode-x");
 }
 

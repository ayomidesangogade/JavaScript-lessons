let calculation = localStorage.getItem("calculation") || "";
document.querySelector(".js-display-char").innerHTML = calculation;

function updateCalculation(char) {
    if (char === "=") {
        calculation = eval(calculation);
        document.querySelector(".js-display-char").innerHTML = calculation;
    } else if (char === "") {
        calculation = "";
        document.querySelector(".js-display-char").innerHTML = "Cleared";
    } else {
        calculation += char;
        localStorage.setItem("calculation", calculation);
        document.querySelector(".js-display-char").innerHTML = calculation;
    }
}
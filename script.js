const buttons = document.querySelector(".buttons");

let num1 = null;
let num2 = null;
let operator = null;
let display = "";

buttons.addEventListener("click", (e) => {
  if (e.target.textContent === "=" && display != "") {
    operator = display
      .split("")
      .find((char) => char == "+" || char == "-" || char == "*" || char == "/");
    const data = display.split(operator);
    num1 = +data[0];
    num2 = +data[1];
    display = operate(num1, num2, operator);
    console.log(display);
    return;
  }
  if (e.target.textContent === "C") {
    display = "";
    return
  }
  display += e.target.textContent;
  console.log(display);
});

const operate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  return result;
};

const add = (num1, num2) => {
  console.log(num1, num2);
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

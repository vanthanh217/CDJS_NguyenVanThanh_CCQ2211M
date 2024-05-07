const $ = document.querySelector.bind(document);

const resultSpan = $("#result");

const addBtn = $("#add");
const subBtn = $("#sub");
const multiBtn = $("#multi");
const divBtn = $("#div");
const powBtn = $("#pow");
const squareBtn = $("#square");

const getValue = () => {
  const inputA = parseFloat($("#numberA").value);
  const inputB = parseFloat($("#numberB").value);
  return [inputA, inputB];
};

const resetInput = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((item) => (item.value = ""));
};

const handleSum = () => {
  const [a, b] = getValue();
  const total = a + b;
  resultSpan.innerHTML = total;
  resetInput();
};

const handleSubtract = () => {
  const [a, b] = getValue();
  const result = a - b;
  resultSpan.innerHTML = result;
  resetInput();
};

const handleMultiply = () => {
  const [a, b] = getValue();
  const result = a * b;
  resultSpan.innerHTML = result;
  resetInput();
};

const handleDivide = () => {
  const [a, b] = getValue();
  const result = a / b;
  resultSpan.innerHTML = result;
  resetInput();
};

const handlePowNumber = () => {
  const [a, b] = getValue();
  const result = a ** b;
  resultSpan.innerHTML = result;
  resetInput();
};

const handleSquareNumber = () => {
  const [a, b] = getValue();
  const numberA = Math.sqrt(a).toPrecision(2);
  const numberB = Math.sqrt(b).toPrecision(2);
  resultSpan.innerHTML = `Number A = ${numberA}</br>Number B = ${numberB}`;
  resetInput();
};

addBtn.addEventListener("click", handleSum);
subBtn.addEventListener("click", handleSubtract);
multiBtn.addEventListener("click", handleMultiply);
divBtn.addEventListener("click", handleDivide);
powBtn.addEventListener("click", handlePowNumber);
squareBtn.addEventListener("click", handleSquareNumber);

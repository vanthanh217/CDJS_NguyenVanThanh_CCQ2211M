const form = document.querySelector("#form");

const formInput = document.querySelector("#form");
const studentIdInput = document.querySelector("#id");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const classIdInput = document.querySelector("#classId");

form.addEventListener("submit", validationForm);

function validationForm(e) {
  e.preventDefault();
  //MSSV
  const studentIdValid = checkStudentId(studentIdInput.value);
  if (!studentIdValid) {
    showErr(studentIdInput, "MSSV không hợp lệ");
  } else removeErrMess(studentIdInput.nextSibling);
  // Họ và tên
  const fullNameValid = checkFullName(fullNameInput.value);
  if (!fullNameValid) {
    showErr(fullNameInput, "Vui lòng nhập họ và tên");
  } else removeErrMess(fullNameInput.nextSibling);
  // email
  const emailValid = checkEmail(emailInput.value);
  if (!emailValid) {
    showErr(emailInput, "Email không hợp lệ");
  } else removeErrMess(emailInput.nextSibling);
  // phone
  const phoneValid = checkPhone(phoneInput.value);
  if (!phoneValid) {
    showErr(phoneInput, "SĐT không hợp lệ");
  } else removeErrMess(phoneInput.nextSibling);
  // class name
  const classValid = checkClassId(classIdInput.value);
  if (!classValid) {
    showErr(classIdInput, "Mã lớp không hợp lệ");
  } else removeErrMess(classIdInput.nextSibling);
}

function checkStudentId(studentId) {
  const studentIdRegex = /^21[0-9]{8}$/;
  return studentIdRegex.test(studentId);
}

function checkFullName(fullName) {
  return fullName.length !== 0;
}

function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkPhone(phone) {
  const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return phoneRegex.test(phone);
}

function checkClassId(classId) {
  const classRegex = /^CCQ[1-9]{4,5}[A-Z]{1,2}$/;
  return classRegex.test(classId);
}

function showErr(e, mess) {
  const parentBox = e.parentNode;
  const errTag = document.createElement("p");
  errTag.className = "invalid";
  errTag.textContent = mess;
  parentBox.insertBefore(errTag, e.nextSibling);
}

function removeErrMess(e) {
  e?.parentNode.removeChild(e);
}

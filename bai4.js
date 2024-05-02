const student = {
  id: "",
  fullName: "",
  classId: "",
  dayOfBirth: "",
};

const form = document.getElementById("form");
const tbodyBox = document.querySelector("#tableContent");
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
  // Cho website không bị reload sau khi submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  student.id = document.querySelector("#id").value;
  student.fullName = document.querySelector("#fullName").value;
  student.classId = document.querySelector("#classId").value;
  student.dayOfBirth = document.querySelector("#dayOfBirth").value;

  student.showInfo = () => {
    let currStr = tbodyBox.innerHTML;
    const { id, fullName, classId, dayOfBirth } = student;
    const newStr = `
    <tr>
      <td>${id}</td>
      <td>${fullName}</td>
      <td>${classId}</td>
      <td>${dayOfBirth}</td>
    </tr>
    `;
    currStr += newStr;
    tbodyBox.innerHTML = currStr;
  };

  student.showInfo();
  // Reset form
  const inputs = document.querySelectorAll("input");
  inputs.forEach((item) => (item.value = ""));
});

// form.addEventListener("submit", (e) => {
//   // Cho website không bị reload sau khi submit
//   e.preventDefault();
//   student.id = document.querySelector("#id").value;
//   student.fullName = document.querySelector("#fullName").value;
//   student.classId = document.querySelector("#classId").value;
//   student.dayOfBirth = document.querySelector("#dayOfBirth").value;

//   student.showInfo = () => {
//     let currStr = tbodyBox.innerHTML;
//     const { id, fullName, classId, dayOfBirth } = student;
//     const newStr = `
//     <tr>
//       <td>${id}</td>
//       <td>${fullName}</td>
//       <td>${classId}</td>
//       <td>${dayOfBirth}</td>
//     </tr>
//     `;
//     currStr += newStr;
//     tbodyBox.innerHTML = currStr;
//   };

//   student.showInfo();
//   // Reset form
//   const inputs = document.querySelectorAll("input");
//   inputs.forEach((item) => (item.value = ""));
// });

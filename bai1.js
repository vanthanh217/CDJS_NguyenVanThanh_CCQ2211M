const fullName = "Nguyễn Văn Thành";
const id = "2122110536";
console.log(`Họ và tên: ${fullName}\nMSSV: ${id}`);

const divBox = document.getElementById("show");
divBox.innerHTML = `<h2>Họ và tên: ${fullName}</h2>
<h2>MSSV: ${id}</h2>`;

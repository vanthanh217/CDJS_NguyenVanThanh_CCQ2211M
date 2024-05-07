// -	Loại bỏ khoảng trắng
// -	Loại bỏ thẻ (tag)
// -	Loại bỏ các ký tự đặc biệt
// -	Thay thế khoảng trắng bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-).

btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const str = document.querySelector("#input").value;
  document.querySelector("#input").value = "";

  const removeSpace = (str) => {
    str = str.replace(/<[^>]*>/g, "");
    return str.trim().replace(/\s+/g, " ").toLowerCase();
  };

  const removeSpecialWord = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ""
    );
    return str;
  };

  const spaceToDash = (str) => {
    return str.split(" ").join("-");
  };

  let newStr = removeSpace(str);
  newStr = removeSpecialWord(newStr);
  newStr = spaceToDash(newStr);

  const show = (str) => {
    const list = document.querySelector("ul.list");
    const template = `<li class='item'>${str}</li>`;
    list.insertAdjacentHTML("beforeend", template);
  };
  show(newStr);
});

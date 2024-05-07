// -	Xử lý chuỗi không có khoảng trắng dư thừa dựa vào Bài 1
// -	Cắt chuỗi từ vị trí đầu đến từ thứ n
const removeSpace = (str) => {
  str = str.replace(/<[^>]*>/g, "");
  return str.trim().replace(/\s+/g, " ");
};

const splitString = (str, limit = 10) => {
  const newArr = str.toLowerCase().split(" ");
  return newArr.slice(0, limit).join(" ");
};

const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Debitis, fugiat error doloremque id, incidunt, hic excepturi nulla 
inventore aut quae perspiciatis tenetur repellendus soluta 
quas consequatur voluptas impedit fugit totam!`;
const newStr = removeSpace(str);
console.log(splitString(newStr));

// -	Xóa bỏ các ký tự trắng ở đầu, cuối chuỗi và giữa 2 từ chỉ còn 1 khoảng trắng
// -	Viết in HOA ký tự đầu mỗi từ trong chuỗi

const removeSpace = (str) => {
  str = str.replace(/<[^>]*>/g, "");
  return str.trim().replace(/\s+/g, " ");
};

const capitalizeWord = (str) => {
  const newStr = str.toLowerCase().split(" ");
  return newStr
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
};

const str = "   ngUyễn      văN     thànH   ";
const newStr = removeSpace(str);
console.log(capitalizeWord(newStr));

const arrNumber = [9, 3, 5, 8, 1, 4, 3, 2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// -	Thêm số 10 vào đầu và cuối (push, unshift)
arrNumber.push(10);
arrNumber.unshift(10);
arrStr.push(10);
arrStr.unshift(10);
// -	Xóa số đầu và cuối (pop, shift)
arrNumber.pop();
arrNumber.shift();
arrStr.pop();
arrStr.shift();
// -	Sắp xếp tăng dần mảng arrNumber và arrStr (sort)
arrNumber.sort((a, b) => {
  return a > b ? 1 : -1;
});
arrStr.sort((a, b) => {
  return a > b ? 1 : -1;
});
// -	Lấy ra mảng con từ vị trị 3 đến 5 từ mảng arrNumber (slice)
const arrNumChild = arrNumber.slice(3, 5);
const arrStrChild = arrStr.slice(3, 5);
console.log(`Mảng con: ${arrNumChild}`);
console.log(`Mảng con: ${arrStrChild}`);
// -	Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber (splice)
arrNumber.splice(3);
arrNumber.push(21, 7, 22);
// -	Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber (indexOf)
console.log(`Vị trí đầu tiên: ${arrNumber.indexOf(3)}`);
// -	Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber (lastIndexOf)
console.log(`Vị trí cuối cùng: ${arrNumber.lastIndexOf(3)}`);
// -	Kiểm tra phân tử có ghí tri 3 có trong mảng arrNumber không (includes)
console.log(`${arrNumber.includes(3) ? "Có" : "Không"}`);
// -	Duyệt mảng forEach
arrNumber.forEach((item) => console.log(item));
arrStr.forEach((item) => console.log(item));
// -	Duyệt mảng map
arrNumber.map((item) => console.log(item));
arrStr.map((item) => console.log(item));
// -	Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber (filter)
const filter = arrNumber.filter((item) => item > 5);
console.log(filter);
// -	Tính tổng các phần tử mảng arrNumber (reduce)
const total = arrNumber.reduce((prev, curr) => prev + curr);
console.log(total);
// -	Nối 2 mảng arrNumber và arrStr lại thành 1 mảng (concat)
const newArr = arrNumber.concat(arrStr);
console.log(newArr);
// -	Nối các phần tử mảng arrStr các nhau bởi dấu "-" (join)
const newStr = arrStr.join("-");
console.log(newStr);
// -	Gán tất cả các phần tử mảng arrNumber bằng 0 (fill)
const arrOfZero = [...arrNumber].fill(0);
console.log(arrOfZero);
// -	Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng (copyWithin)
const newArrNum = arrNumber.copyWithin(0, 1, 4);
const newArrStr = arrStr.copyWithin(0, 1, 4);
console.log(newArrNum);
console.log(newArrStr);
// -	Tìm kiếm phần tử trong mảng thõa mãn điều kiện
//         +	find, findIndex
console.log(arrNumber);
console.log(`Vị trí: ${arrNumber.findIndex((item) => item > 3)}`);
console.log(`Phần tử: ${arrNumber.find((item) => item > 3)}`);
//         +	findLast, findLastIndex
// -	Kiểm tra tất cả các phần tử thõa mãn điều kiện (every)
const everyNum = arrNumber.every((item) => item > 7);
console.log(`Every: ${everyNum ? "Thỏa" : "Không thỏa"}`);
// -	Kiểm tra ít nhất một phần tử thõa mãn điều kiện (some)
const someNum = arrNumber.some((item) => item > 5);
console.log(`Some: ${someNum ? "Thỏa" : "Không thỏa"}`);

console.log(arrNumber);
console.log(arrStr);

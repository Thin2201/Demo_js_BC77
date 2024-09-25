console.log("Hello");

console.warn("this is message warning");

console.error("this is console.error");

// biến: lưu truy xuất giá trị va có thể đem đi sử dụng ở nhiều nơi

// kiểu 1:
// khai báo biến
// cập nhật/ gán giá trị cho biên
// let tênBien;
// têbBien = giá trị;

let user1;
user1 = "abc";
console.log("user1: ", user1);
user1 = "XYZ";
console.log("user1: ", user1);

// kiểu 2:
// vừ khai báo biến, vừa gắn giá trị cho biến
// let tênBien = giá trị;

let user2 = "phan tat thin";
console.log("user2: ", user2);

// const(constant): hằng số không đc gán lại giá trị,
//  sử dụng khi giá trị không bị thay đổi
// const teenBien = giatri;

const PI = 3.14;
console.log("PI: ", PI);
// PI = 2;

// quy tắc đặt tên biến - camelCase
let userName;
let luongCanBan;

// kiểu dữ liệu

// 1. Number: 1,2,3,3.14 (dùng cho cả số nguyên và số thực, dùng để tính toán)
let birthday = 1995;
console.log("birthday: ", birthday);
// 2. string: kiểu chuỗi, ký tự  thường dùng để diễn đạt teen, email, sdt,..
let firstName = "Thin";
console.log("firstName: ", firstName);
// 3. boolean: true/false(thường kết hợp với toán tử so sánh)
let isApproval = true;
console.log("isApproval: ", isApproval);
// 4. undefined:khi mottj biến đc khai báo nhưng chưa gangs giá trị thì giá trị của nó là undefined
let lastName;
console.log("lastName: ", lastName);
// 5. null: biểu thị một giá trị không tồn tại
let shoppingCar = null;
console.log("shoppingCar: ", shoppingCar);

// các loại tóan tử
// 1. toán tử toán học
let number1 = 30;
let number2 = 20;
let number3 = "10";
let sum = number1 + number2;
console.log("sum: ", sum);

// Phép trừ
let minus = number2 - number1;
console.log("minus: ", minus);

// phép nhân
let product = number1 * number2;
console.log("product: ", product);

// phép chia
let quotine = number1 / number2;
console.log("quotine: ", quotine);

// chia lấy phần dư mod
let mod = number1 % number2;
console.log("mod: ", mod);

// cộng một number với 1 String: chỉ xảy ra với phép cộng
// typeof dùng để ktra kiểu dữ liệu từ một biến
console.log("kiểu dữ liệu của number3: ", typeof number3);

// cách convert dữ liệu từ string về number: parseInt(), variable * 1, +variable
// let number3Convert = parseInt(number3);
// let.number3Convert = number3 * 1;
// let.number3Convert = +number3;

// // cộng một number với 1 String
let result = number1 + parseInt(number3);
console.log("result: ", result);

// trừ một number với 1 String
let result2 = number1 - number3;
console.log("result2: ", result2);

// chia một number với 1 String
let result3 = number1 / number3;
console.log("result3: ", result3);

// chuỗi + chuỗi
let string1 = "hello";
let string2 = "BC77";
let string3 = "CyberSoft";

let totalString = string1 + " " + string2 + " " + string3;
console.log("totalString: ", totalString);

let totalString2 = "hello " + "world";
console.log("totalString2: ", totalString2);

// toán tử------tăng 1 số hoặc giảm 1 số
let number4 = 1;
let number5 = 3;

number4++;
console.log("number4++: ", number4++);

number5--;
console.log("number5--: ", number5--);

// // 2. toán tử ngắn
// a = a + b => a += b
// a = a - b => a -= b
// a = a % b => a %= b

let Number6 = 10;
// Number6 = Number6 + 10;
Number6 += 10;
console.log("number6: ", Number6);

let a, b, c;
a = 10;
a += a;
console.log("a: ", a);

b = ++a + 5;
c = a++ + 5;
console.log("a: ", a);

a = 0;
console.log("b: ", b);
console.log("c: ", c);

// // prompt
// let Name = prompt(" ngập tên của bạn");
// alert("bạn đã nhập thành công");
// console.log("tên của bạn vừa nhập là: ", Name);

// ----------------------------------------------------------------------------------------------------

// bài 1 tính lương nhân viên
// B1: xác định input: sóo ngày làm, lương cơ bản
// B2: xử lý: lương NV = số ngày làm * lương cơ bản
// B3: xác định output: Tên NV và Lương NV

let luongCB = 100000;
let tenNV = prompt("Mời bạn nhập tên nhân viên:");

let soNgayLam = prompt("Mời bạn nhập số ngày làm:");

let luongNV = luongCB * soNgayLam;
alert("Bạn đã nhập thàng công!!!");
console.log("lương cơ bản của nhân viên:" + tenNV + " là: ", luongCB);
console.log("Lương của nhân viên", tenNV + " là: ", luongNV);

// ----------------------------------------------------------------------------------------------------

// Bài 2: tính điểm trung bình.
// B1: input 5 số thực A B C D E
// B2: xử lý Tổng 5 số A B C D E chia cho 5
// B3: output Điểm trung bình

let monSo1 = parseInt(prompt("Mời bạn nhập điểm môn thứ nhất: "));
let monSo2 = parseInt(prompt("Mời bạn nhập điểm môn thứ hai: "));
let monSo3 = parseInt(prompt("Mời bạn nhập điểm môn thứ ba: "));
let monSo4 = parseInt(prompt("Mời bạn nhập điểm môn thứ tư: "));
let monSo5 = parseInt(prompt("Mời bạn nhập điểm môn thứ năm: "));

let tongDiem = monSo1 + monSo2 + monSo3 + monSo4 + monSo5;
console.log("Tổng điểm các môn là: ", tongDiem);

let diemTB = tongDiem / 5;
console.log("Điểm trung bình các môn của bạn là: ", diemTB);

// ----------------------------------------------------------------------------------------------------

//  Bài 3: Quy đổi tiền tệ
//  B1: input giá USD, số lượng USD quy đổi.
//  B2: xử lý giá USD * số lượng USD
//  B3: output tổng số tiền nhận được

let giaUSD = prompt("Mời bạn nhập giá USD hiện nay: ");
let soLuong = prompt("Mời bạn nhập số lượng USD muốn quy đổi: ");

let quyDoi = giaUSD * soLuong;
console.log("Giá hiện tại của USD là: ", giaUSD);
console.log("Số USD bạn có là: ", soLuong);
console.log("Bạn đã đổi được: ", quyDoi + "USD");

// ----------------------------------------------------------------------------------------------------

// Bài 4: Tính chu vi và diện tích hcn
// B1: input chiều dài và chiều rộng
// B2: tính chu vi: (dài + rộng)*2
//     tính diện tích: dài*rộng
// B3: output chu vi và diện tích hcn

let chieuDai = parseInt(
  prompt("Mời  bạn  nhập chiều dài hinh hình chữ nhật: ")
);
let chieuRong = parseInt(
  prompt("Mời bạn nhập chiều rộng hinh hình chữ nhật: ")
);

console.log("Chiều dài hình chữ nhật: ", chieuDai);
console.log("Chiều rộng hình chữ nhật: ", chieuRong);

let chuViHCN = (chieuDai + chieuRong) * 2;
console.log("Chu vi hình chữ nhật: ", chuViHCN);

let dienTichHCN = chieuDai * chieuRong;
console.log("Diện tích hình chữ nhật: ", dienTichHCN);

//Bài 1: Tính tiền lương nhân viên

/**
 * INPUT: Khai bao bien SalaryOneDay, Day. Gan gia tri Tien luong ban dau = 0.
 * Process: Tinh luong = Lay tien luong mot ngay * voi so ngay lam. (SalaryOneDay * Day)
 * OUTPUT : Luong sau khi tinh gia tri = Salary
 */

var SalaryOneDay = 250000;
var Day = 30;
var Salary = 0;
var Salary = SalaryOneDay * Day;
console.log("Salary = ", Salary);

//Bài 2: Tính giá trị trung bình

/**
 * INPUT: Khai bao bien One Two Three Four Five. gan gia tri kq trung binh = 0 (arithmeticMedium)
 * Process: 1/ Tinh tong 5 so + lai. 2/ sau do chia 5.
 * OUTPUT: IN ra ket qua trung binh = AritheticMedium
 */

var One = 3.4;
var Two = 4.5;
var Three = 5.1;
var Four = 5.7;
var Five = 9.2;
var arithmeticMedium = 0;
var arithmeticMedium = (One + Two + Three + Four + Five) / 5;
console.log("arithmeticMedium = ",arithmeticMedium);

//Bài 3: Tính USD

/**
 * INPUT: Khai bao bien va gan gia tri cho VND, USD, currency
 * Process: Lay VND nhan cho USD.
 * OUTPUT: In ket qua currency
 */

var VND = 23.500;
var USD = 4;
var currency = 0;
var currency = VND * USD;
console.log("Currency Exchange", currency);

//Bài 4: Tính chu vi, diện tích hình chữ nhật

/**
 * INPUT: Khai bao va gan gia tri cho chieu dai, chieu rong, s = 0, p = 0.
 * Process: 1. Cong thuc Tinh dien tich S = chieu dai * chieu rong.
 * 2. Cong thuc tinh chu vi P = chieu dai + chieu rong * 2.
 * OUTPUT: IN ket qua S dien tich va P chu vi
 */

var long = 5;
var wide = 6;
var S = 0;
var P = 0;
var S = long * wide;
var P = (long + wide) * 2;
console.log("area = ", S);
console.log("perimeter =", P);

//Bài 5: Tính tổng 2 ký số

/**
 * INPUT: Khai bao va gan gia tri cho number, sum.
 * Process: 1. Khai bao numberOne, Chia lay phan du cua number.
 * 2.Khai bao numberTwo Chia cho 10 va lam tron so cua number.
 * 3. Cong hai so sau khi chia lay du va chia cho 10. Sum = numberOne + numberTwo
 * Output: IN ket qua Sum
 */

var number = 44;

var numberOne = number % 10;
var numberTwo = Math.floor(number / 10);

var sum = 0;

var sum = numberOne + numberTwo;

console.log("Sum two number = ",sum);



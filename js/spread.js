const max = Math.max(12, 65, 98, 887, 89);
// console.log(max);
const number = [12, 85, 998, 74];
const largest = Math.max(...number);
console.log(...number);
console.log(largest);

const number2 = [...number];
number.push(55);
number2.push(5575);
console.log(number);
console.log(number2);

const number3 = [...number];
console.log(number3)

const number4 = [444, 78, ...number, 111, 33];
console.log(number4);
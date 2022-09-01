// breakup with var
// no more use var
// let : let it to ressign (let is changeable)
// const : do not allow it to ressign (const not changeable)

let money = 25;
money = 50;
console.log(money);

const bird = 'moynaPakhi';
// bird = 'totaPakhi';
const message = bird + ' potas potas'
console.log(message)

const numbers = [12, 89, 65, 45]
// ressign is not allowed
// numbers = [77, 66, 55, 22, 99];
numbers.push(154);
numbers[1] = 90;
console.log(numbers);

const student = {
    name : 'mofiz',
    address : 'rangpur'
}
// student = {name : 'Mofazzol'}
student.name = 'Mofazzol';
// console.log(student)

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number
    // console.log(number)
}
console.log(number);
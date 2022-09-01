const fish = {
    name : ' Puti Mach',
    address : 'sob gajay',
    color : 'silver',
    phone : '014556654665',
    price : 4000,
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)

const { age, names} = {names : 'Almas', age: 55, profession : 'boyati gan gay'};
console.log(names);

const {address} = fish;
console.log(address);

// array destructuring
const [ first, another] = [44, 82, 54, 35];
console.log(first , another);

const nayoks = ['sakib', 'bappa', 'raj'];
const [king, lost, vlo ] = nayoks;
console.log(king)

function getNames (){
    return ['alim', 'halim']
}
const [baba , cacha] = getNames();
console.log(cacha, baba)
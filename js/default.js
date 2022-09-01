// function add(first, second){
//     console.log(first, second)
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

function add(first, second = 25){
    const total = first + second;
    return total
}
const result = add(10);
console.log(result)

function fullName (first, last = 'saheb'){
    const names = first + ' '+ last;
    return names
}
const names = fullName('Gelam');
console.log(names)
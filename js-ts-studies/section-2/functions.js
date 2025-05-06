// function saudation(){
//     console.log("Hello World!");
// }
// saudation(); // Hello World!

// function saudationWithName(name){
//     console.log("Hello " + name + "!");
// }
// saudationWithName("John"); // Hello John!

// function sum(a, b){
//     const result = a + b;
//     return result;
// }
// console.log(sum(2, 3)); // 5

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5
console.log(raiz(36)); // 6

const raizArrow = (n) => {
    return n ** 0.5;
};

console.log(raizArrow(9)); // 3

const raizArrow2 = n => n ** 0.5;

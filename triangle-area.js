//case1

function triangleArea(base, height) {
    return (base * height) / 2
}
const triangle1 = console.log("triangle1 has the area of " + triangleArea(10, 13) + "cm²");
const triangle2 = console.log("triangle2 has the area of " + triangleArea(16.5, 20.3) + "cm²");
if (triangle1 > triangle2) {
    console.log("triangle1 is bigger than triangle2")
} else {
    console.log("triangle1 is smaller than triangle2")
}


// //case 2

function triangleArea(base, height) {
    return (base * height) / 2
}
const triangle3 = triangleArea(16.5, 20.3);
const triangle4 = triangleArea(20.3, 16.5);
if (triangle3 > triangle4) {
    console.log("triangle3 with the area of " + "(" + triangle3 + ")" + "cm²" + " is bigger than triangle4 with the area of " + "(" + triangle4 + ")" + "cm²")
} else if (triangle3 < triangle4) {
    console.log("triangle3 with the area of " + "(" + triangle3 + ")" + "cm²" + " is smaller than triangle4 with the area of " + "(" + triangle4 + ")" + "cm²")
} else {
    console.log("triangle3 with the area of " + "(" + triangle3 + ")" + "cm²" + " is equal to triangle4 with the area of " + "(" + triangle4 + ")" + "cm²")
}

//case3
//i tried to write case three with nested function, but it is not working.would you explain to me why it is not correct, thank you teacher.

// function compareArea(a, b) {


//     function triangleArea(base, height) {

//         return (base * height) / 2
//     }
//     return triangleArea;


// }
// const result;
// if (a > b) {
//     result = console.log("a is bigger than b")
// } else {
//     result = console.log("a is smaller than b")

// }
// return result;


// let a = triangleArea(7.8, 5.6);
// console.log(a);
// let b = triangleArea(9.3, 12.4);
// console.log(b);
// console.log(compareArea(a, b));

//case 3

function area(a, b) {
    return (a * b) / 2
}
const triangle5 = area(7.8, 5.6);
console.log("triangle5 has the area of " + triangle5 + "cm²");
const triangle6 = area(9.3, 12.4);
console.log("triangle6 has the area of " + triangle6 + "cm²");
if (triangle5 > triangle6) {
    console.log("triangle5 is bigger than triangle6")
} else {
    console.log("triangle5 is smaller than triangle6")
}


//answer:
//we need to cauculate according to operator precedence rule.assignment operators are right associative,so if we dont put the parenthesis, the division (height/2) will be firstly calculated.
let fun = require("./fun.js");

let a = 5, b = 8;

// fun swap
console.log("fun swap, a=", a, "b=", b);
fun.swap(a, b);

console.log("a=", a, "b=", b);

// fun max
console.log("fun max, a=", a, "b=", b);

console.log("max val: ", fun.max(a, b));

console.log("function execute success");

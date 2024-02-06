var addNumbers = function (a, b) { return a + b; };
var optionalNumbers = function (a, b, c) { return a + b + (c !== null && c !== void 0 ? c : 0); };
console.log(addNumbers(20, 20));
console.log(optionalNumbers(20, 30));
console.log(optionalNumbers(20, 30, 20));

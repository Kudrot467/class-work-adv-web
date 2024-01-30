function greet(name){
    console.log(`Hello,${name}`);
}
greet("Alice");
function sum(a,b){
    return a + b;
}
const result=sum(1,2);
console.log(result);
let greet=name1=console.log(`Hello,${name1}`);
greet("Bob");

//passing a function as a function parameter
function operateOnNumbers(a,b,operation){
    return operation(a,b);
}
function add(x,y){
   return x + y;
}
function multiply(x,y){
    return x * y;
}
let resultAddition=operateOnNumbers(5,3,add);
let resultMultiplication=operateOnNumbers(5,3,multiply);
console.log(resultAddition + " "+resultMultiplication);

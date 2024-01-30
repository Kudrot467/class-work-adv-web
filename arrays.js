let numbers=[1,2,3,4,5];
let fruits=['apple','banana','orange'];
let mixedArray=[1,'two',{name:'Alice'},[7,8,9]];
let firstNumber=numbers[0];
let secondFruit=fruits[1];
let thirdElement=mixedArray[2].name;
console.log(firstNumber+" "+secondFruit+" "+thirdElement);
numbers.push(6);
console.log(numbers);
fruits.pop();
console.log(fruits);
fruits.unshift('pear');
console.log(fruits);
numbers.shift();
console.log(numbers);
numbers.forEach(function(number){
    console.log(number);
})
let doubleNumbers=numbers.map((number)=>{
     return number * 2;
})
console.log(doubleNumbers);
const evenNumbers=numbers.filter(num=>{
    return num % 2===0;
})
console.log(evenNumbers);
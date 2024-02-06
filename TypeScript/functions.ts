let addNumbers=(a: number,b: number):number=>a+b;
let optionalNumbers=(a: number,b:number,c?:number):number=>a+b+(c??0);
console.log(addNumbers(20,20));
console.log(optionalNumbers(20,30));
console.log(optionalNumbers(20,30,20));
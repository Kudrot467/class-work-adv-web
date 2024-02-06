type Person={id:number, name:string};
let p: Person={id:1,name:"John"};
console.log(p);
console.log(p.name);

let y: number | string;
y=10;
console.log(y);
let z: "Red" | "Green" | "Blue";
z="Red";
console.log(z);